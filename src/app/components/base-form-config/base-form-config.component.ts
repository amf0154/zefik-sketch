import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HelperServiceService } from 'src/app/services/helper-service.service';
import { BaseFormComponent } from '../base-form/base-form.component';

@Component({
  selector: 'app-base-form-config',
  templateUrl: './base-form-config.component.html',
  styleUrls: ['./base-form-config.component.scss']
})
export class BaseFormConfigComponent extends BaseFormComponent implements OnInit, OnChanges {

  @Input('component') child: any = {};
  @ViewChild('toolbar') toolbar: any = {};
  @Input() dataSource: any = [];
  zsnConfig = {};
  accordionInstance: any;
  isEditMode = false;
  isDataLoaded = false;
  canEdit = true;
  canChangeBeInfo = true; // TODO: Temporary while permissions are not supported
  be = {};
  refreshPage = this.refresh;
  resetForm = this.clearForm;
  visiblePopup = false;
  popup = undefined;
  firstChange = true;
  info : any;
  buttons: Array<any> = [];
  additionalButtons = [];
  fb: FormBuilder = new FormBuilder();
  zsnForm: any;
  beId: any = '';

  tilesChooserPopupOptions = {
      width: 300,
      height: 250,
      contentTemplate: "info",
      showTitle: true,
      resizeEnabled: true,
      title: "Tiles Selector",
      dragEnabled: true,
      closeOnOutsideClick: true,
      shading: false,
      position: {
          at: 'right bottom',
          my: 'right bottom',
          of: '.cell-view.zsn-content',
          offset: '-15 -5'
      },
      bindingOptions: {
          visible: "visiblePopup",
      },
      onContentReady: (e: any) => {
          e.component._$content.addClass('tile-chooser')
          this.popup = e.component;
      },
      onHidden: () => {
          this.visiblePopup = false;
      }
  };

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
      visible: !this.isEditMode,
      disabled: false
    },
    {
      location: 'before',
      widget: 'dxButton',
      options: {
        icon: 'mif-file-download fg-blue',
        text: 'Download',
        // onClick: () => this.downloadExport(),
      },
      visible: !this.isEditMode,
      disabled: false
    },
    {
      location: 'before',
      widget: 'dxButton',
      options: {
        icon: 'mif-mail fg-blue',
        text: 'Email',
        // onClick: () => this.emailExport(),
      },
      visible: !this.isEditMode,
      disabled: false
    },
    {
      location: 'before',
      widget: 'dxButton',
      options: {
        icon: 'mif-pencil fg-orange',
        text: 'Edit',
        onClick: () => {
          this.isEditMode = true;
          this.changeButtonsVisibility();
        },
      },
      visible: !this.isEditMode,
      disabled: false
    },
    {
      location: 'before',
      widget: 'dxButton',
      options: {
        icon: 'mif-cancel fg-orange',
        text: 'Cancel',
        onClick: () => {
          this.refresh()
        },
      },
      visible: this.isEditMode,
      disabled: false
    },
    {
      location: 'before',
      widget: 'dxButton',
      options: {
        icon: 'mif-floppy-disk fg-blue',
        text: 'Save',
        onClick: () => {
          if (!this.zsnForm.valid) {
              alert('not valid')
          }else{
            this.formControlNames = this.zsnForm.value;
            this.turnOffSaveMode()
          }
        },
      },
      visible: this.isEditMode,
      disabled: true
    },
    {
      location: 'after',
      widget: 'dxButton',
      options: {
        hint: 'Tiles Selector',
        icon: 'dx-icon dx-icon-column-chooser fg-blue selector-tooltip columns-selector-tooltip',
        onClick: () => {
        },
      },
      visible: true,
      disabled: false
    }, 
  ]

  constructor(helperSevice: HelperServiceService,
    ) { 
    super(helperSevice)
  }

  ngOnInit(): void {
    this.prependActionBar();
  }

  ngOnChanges() {
    this.uploadData();
  }

  toggleSaveButton(disable: boolean) {
    const save = this.buttons.find((el: any)=>el.options.text === "Save");
    save.disabled =  disable;
  }

  turnOffSaveMode() {
    this.isEditMode = false;
    this.changeButtonsVisibility();
    this.toggleSaveButton(true);
  }

  prependActionBar() {
    this.buttons = [...this.mainButtons, ...this.additionalButtons];
  }

  changeButtonsVisibility() {
    const editModeButtons = ['Save', 'Cancel'];
    this.buttons = this.buttons.map((el) => {
        el.visible = editModeButtons.includes(el.options.text) ? this.isEditMode : !this.isEditMode;
    })
    this.prependActionBar();
  }

  verifyAddressInformation(type: any) : any {

  }

  isAddressValidateByType(type: any): any {

  }

  uploadData() {
    // spinnerService.show();
    this.isDataLoaded = false;
    this.child.getDetails().subscribe((res: any) => {
      this.info = res;
      this.fillFormWithData(this.dataSource, this.info);
      this.isDataLoaded = true
      this.zsnForm = this.fb.group(this.formControlNames)
      this.zsnForm.valueChanges.subscribe((e: any) => {
        this.toggleSaveButton(false);
      })
      // spinnerService.hide();
    });
  }

  refresh() {
    // $scope.visiblePopup = false
    // $scope.popup = undefined;
    if (this.zsnForm.dirty) {
      this.askRefreshConfirmation();
    } else {
      this.turnOffSaveMode();
      this.uploadData();
    }
  }

  getForm() {
    return this.zsnForm;
  }

  clearForm() {
    this.zsnForm.reset(this.formControlNames)
  }

  onInitialized(e: any) {
    this.accordionInstance = e.component;
  }

  onContentReady(e: any) {
    if (!this.accordionInstance) {
      console.error('Accordion wasn`t initialized');
      return ;
    }
    for (var i = 0; i < this.dataSource.length; i++) {
        this.accordionInstance.expandItem(i);
    }
  }

  askRefreshConfirmation() {
    this.clearForm();
    this.turnOffSaveMode();
  }

  /*
        function onTileChooserClick() {
            if ($scope.popup) {
                if(!$scope.visiblePopup) {
                    $scope.visiblePopup = true;
                    $scope.popup.show();
                }
                return ;
            }

            $scope.chooserItems = $scope.getAccordionItems()
                .map(item => ({text: item.title, selected: item.visible, id: item.id, disabled: false}));
            $scope.allTilesVisible = true;
            $scope.treeViewOptions = {
                items: $scope.chooserItems,
                searchEnabled: true,
                selectByClick: true,
                showCheckBoxesMode: 'normal',
                scrollDirection: 'vertical',
                onSelectionChanged: () => {
                    const selectedItemsCount = $scope.chooserItems.reduce((count, item) => item.selected ? ++count : count, 0);
                    const listShouldBeDisabled = selectedItemsCount === 1;

                    if (
                        $scope.allTilesVisible && listShouldBeDisabled
                    ||
                        !$scope.allTilesVisible && !listShouldBeDisabled
                    ) {
                        $scope.allTilesVisible = !listShouldBeDisabled
                        $scope.chooserItems.forEach(item => item.selected && (item.disabled = listShouldBeDisabled))
                        $scope.treeView.option('items', $scope.chooserItems)
                    }

                    $scope.getAccordionItems().forEach(updateTileVisibility)
                },
                onInitialized: e => {
                    $scope.treeView = e.component
                },
                onDisposing: (e) => {
                    $scope.treeView = undefined;
                    $scope.treeViewOptions = undefined;
                }
            };
            $scope.visiblePopup = true;
        }

        function updateTileVisibility(tile) {
            tile.visible = $scope.chooserItems.find(chooser => chooser.id === tile.id).selected;    
            toggleTileVisibility(tile);
        }

        function toggleTileVisibility(tile) {
            if (tile.visible) {
                $('#' + tile.id).parent('.dx-item.dx-accordion-item').removeClass('dx-state-invisible')
            } else {
                $('#' + tile.id).parent('.dx-item.dx-accordion-item').addClass('dx-state-invisible')
            }
        }
        */

}
