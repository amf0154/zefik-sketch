import { AfterContentChecked, AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, ViewChild } from '@angular/core';
import CustomStore from "devextreme/data/custom_store";
import { TableConfigService } from 'src/app/services/table-config.service';
import * as $ from 'jquery';
import { BillingService } from 'src/app/services/billing.service';
import { Observable } from 'rxjs';
import { saveAs } from 'file-saver';
import { TimeZoneService } from 'src/app/services/timezone.service';
import { BehaviorSubject } from 'rxjs';
import { ChildActivationEnd } from '@angular/router';


@Component({
  selector: 'app-base-table-config',
  templateUrl: './base-table-config.component.html',
  styleUrls: ['./base-table-config.component.scss']
})
export class BaseTableConfigComponent implements OnInit{
  @Input() columns: any = [];
  @Input('component') child: any = {};
  @Input('buttons') additionalButtons: Array<any> = [];
  @Input() exportConfig: any = {};
  @ViewChild('gridContainer') gridContainer: any = {};
  dataSource: CustomStore | any;
  isLoadPanelVisible: boolean = false;
  column: any;
  customizeText: any;
  summaryType: any;

  mainButtons: Array<any> = [
    {
      location: 'before',
      widget: 'dxButton',
      options: {
        icon: 'mif-loop2 fg-orange',
        text: 'Refresh',
        onClick: () => {
          this.refresh()
        },
      },
      visible: true,
      disabled: false
    },
    {
      location: 'before',
      widget: 'dxButton',
      options: {
        icon: 'mif-file-download fg-blue',
        text: 'Download',
        onClick: () => this.downloadExport(),
      },
      visible: true,
      disabled: true
    },
    {
      location: 'before',
      widget: 'dxButton',
      options: {
        icon: 'mif-mail fg-blue',
        text: 'Email',
        onClick: () => this.emailExport(),
      },
      visible: true,
      disabled: true
    },
    {
      location: 'after',
      widget: 'dxButton',
      options: {
        hint: 'Columns Selector',
        icon: 'dx-icon dx-icon-column-chooser fg-blue selector-tooltip columns-selector-tooltip',
        onClick: () => {
          this.tableConfigService.getColumnChooserVisibility() ? this.gridContainer.instance.hideColumnChooser() : 
          (this.gridContainer.instance.showColumnChooser(), this.tableConfigService.setColumnChooserVisibility(true))
        },
      },
      visible: true,
      disabled: false
    },
    {
      location: 'after',
      widget: 'dxButton',
      options: {
        hint: 'Change Table View',
        icon: 'dx-icon dx-icon-alignjustify fg-blue selector-tooltip change-view-tooltip',
        onClick: () => {console.log('test')},
      },
      visible: true,
      disabled: true
    }, 
  ]

  buttons: Array<any> = [];

  customExport = {
    selectorField: 'Id',
    download: (model: any) : Observable<any> => {
        throw 'Download handler should be overrided';
    },
    email: (model: any) : Observable<any> => {
        throw 'Email handler should be overrided';
    },
    fileName: 'Export.xlsx'
  }

  constructor(public tableConfigService: TableConfigService, public timeZoneSrvice: TimeZoneService) {
    
  }

  ngOnInit(): void {
    if(this.child.summary) {
      this.column = this.child.summary.column;
      this.summaryType = this.child.summary.summaryType;
      this.customizeText = this.child.summary.customizeText;
    }
    this.createConfig();
    this.initExportConfigs();
    if(this.child.areReportsDisabled) {
      const download = this.mainButtons.find((el: any)=>el.options.text === "Download");
      const email = this.mainButtons.find((el: any)=>el.options.text === "Email");
      download.visible =  !this.child.areReportsDisabled;
      email.visible =  !this.child.areReportsDisabled;
    }
    this.prependActionBar();
  }

  prependActionBar() {
    this.buttons = [...this.mainButtons, ...this.additionalButtons];
  }

  refresh() {
    this.gridContainer.instance.refresh();
    this.gridContainer.instance.deselectAll();
  }

  onContentReady(e: any) {
    const columnChooserView = e.component.getView("columnChooserView");  
    if (!columnChooserView._popupContainer) {  
        columnChooserView._initializePopupContainer();  
        columnChooserView.render();  
        columnChooserView._popupContainer.on("hiding", (e: any) => {  
          this.tableConfigService.setColumnChooserVisibility(false);
        });  
    }
    this.tableConfigService.setGridContainer(e)
  }

  createConfig() {
    this.dataSource = new CustomStore({
      load: (loadOptions: any) => {
        let skip = loadOptions.skip ? loadOptions.skip : 0;
        let take = loadOptions.take ? loadOptions.take : 25;
        let order = loadOptions.sort ? {
          'Field': loadOptions.sort[0].selector,
          'IsAscending': !loadOptions.sort[0].desc
        } : {};
        let page = {
          'Num': Math.ceil((skip + 1) / take),
          'Size': take
        }   
        let params = {"Filter":{},"Order":order,"Page":page}
        return this.child.getData(params)
          .then((data: any) => {
            this.prependActionBar()
              return {
                  data: data.Data,
                  totalCount: data.Total
              };
          })
          .catch((error : any) => {
            console.log(error)
             throw 'Data Loading Error' 
            });
      }
    });
  }

  downloadExport() {
    const collection = this.gridContainer.instance.getSelectedRowsData();
    const exportModel = this.getExportModel(collection);
    this.customExport.download(exportModel).subscribe((res: any) => {
      this.saveResponseToFile(res);
      console.log('File was loaded')
    })
  }

  emailExport() {
    const collection = this.gridContainer.instance.getSelectedRowsData();
    const exportModel = this.getExportModel(collection);
    this.customExport.email(exportModel).subscribe((res: any) => {
      console.log('File was sent')
    })
  }

  initExportConfigs() {
    if (this.exportConfig.selectorField) {
        this.customExport.selectorField = this.exportConfig.selectorField;
    }
    if (this.exportConfig.download) {
      this.customExport.download = this.exportConfig.download;
    }
    if (this.exportConfig.email) {
      this.customExport.email = this.exportConfig.email;
    }
    if (this.exportConfig.fileName) {
      this.customExport.fileName = this.exportConfig.fileName;
    }
  }

  getExportModel(collection: any) {
    var ids = this.getCollectionExportKeys(collection);

    return {
        TimeZone: this.timeZoneSrvice.getTimeZoneModel(),
        Ids: ids,
        Fields: this.columns
            .filter((value: any) => {
                if (!value || value.excludeFromExport === true) {
                    return false;
                }
                return true;
            })
            .map((value: any) => {
                return {
                    Name: value.exportDataField || value.dataField,
                    Display: value.caption
                }
            })
    }
  }

  getCollectionExportKeys(collection: any) {
    return collection.map((item: any) => {
        if (item && item[this.customExport.selectorField]) {
            return item[this.customExport.selectorField];
        }
        return undefined;
    })
  }

  saveResponseToFile(response: any) {
    let fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    const content = new Blob([response], { type: fileType });
    saveAs(content, this.customExport.fileName);
  }

  onSelectionChanged({selectedRowsData} : any) {
    const download = this.buttons.find((el: any)=>el.options.text === "Download");
    const email = this.buttons.find((el: any)=>el.options.text === "Email");
    const disabled = selectedRowsData.length === 0
    download.disabled =  disabled;
    email.disabled =  disabled;
  }
}
