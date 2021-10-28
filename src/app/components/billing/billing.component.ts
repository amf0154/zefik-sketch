import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BillingService } from 'src/app/services/billing.service';
import { TableConfigService } from 'src/app/services/table-config.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit, AfterViewInit, OnDestroy {
  exportConfig = {
    selectorField: 'Id',
    download: (params: any) => this.billingService.exportExcel(params),
    email: (params: any) => this.billingService.emailExcel(params),
    fileName: 'AllBilling.xlsx'
  };

  columnsTotalOutsidingBalance = [
    {
        dataField: 'DueDate',
        allowEditing: false,
        allowSorting: false,
        allowResizing: true,
    },
    {
        dataField: 'Status',
        cssClass: 'bg-grayLighter',
        alignment: 'center' as 'center',
        allowEditing: false,
        allowSorting: false,
        allowResizing: true
    },
    {
        dataField: 'AccountTotalBalance',
        alignment: 'center' as 'center',
        minWidth: 140,
        allowEditing: false,
        allowSorting: false,
        allowResizing: true,
        // cellTemplate: (c,o) => paymentStyle(c,o,o.data.AccountTotalBalance) 
    },
];

  columns : any = [
    {
      dataField: 'ActivityName',
      caption: 'Activity Name',
      allowEditing: false,
      allowSorting: false,
      allowResizing: true,
      width: 300,
  },
  {
      alignment: 'center' as 'center',
      caption: 'Type',
      width: 90,
      dataField: 'TypeName',
      allowEditing: false,
      allowSorting: false,
      allowResizing: true
  },
  {
      alignment: 'center' as 'center',
      dataField: 'Date',
      caption: 'Date',
      width: 220,
      allowEditing: false,
      allowSorting: false,
      allowResizing: true
  },
  {
      alignment: 'left' as 'left',
      dataField: 'BusinessEntityName',
      caption: 'Organization Name',
      width: 220,
      allowEditing: false,
      allowSorting: false,
      allowResizing: true,
      // cellTemplate: linkToCompanyInfo,
      // visible: userService.isZefikUser() || userService.user.isHiringCompany
  },
  {
      dataField: 'AddedBy',
      caption: 'Added by',
      allowEditing: false,
      allowSorting: false,
      allowResizing: true,
      // cellTemplate: (c,o) => linkToUserInfo(c, o, o.data.AddedByUserId),
      width: 150
  },
  {
      alignment: 'center' as 'center',
      caption: 'Base Rate',
      dataField: 'Rate',
      width: 90,
      allowEditing: false,
      allowSorting: false,
      allowResizing: true,
      customizeText: this.addBuks
  },
  {
      alignment: 'center' as 'center',
      caption: 'Pro-Rated Value',
      dataField: 'ProRateValue',
      width: 90,
      allowEditing: false,
      allowSorting: false,
      allowResizing: true,
      customizeText: this.addBuks
  },
  {
      alignment: 'center' as 'center',
      dataField: 'SalesTax',
      caption: 'Sales tax',
      width: 90,
      allowEditing: false,
      allowSorting: false,
      allowResizing: true,
      customizeText: this.addBuks
  },
  {
      alignment: 'center' as 'center',
      width: 140,
      dataField: 'Fee',
      caption: 'Charges/Payments',
      allowEditing: false,
      allowSorting: false,
      allowResizing: true,
      customizeText: this.addBuks,
      cellTemplate: (c: any,o: any) => this.paymentChargesStyle(c,o,o.data)
  },
  {
      alignment: 'center' as 'center',
      dataField: 'AccountBalance',
      caption: 'Account Balance',
      width: 90,
      allowEditing: false,
      allowSorting: false,
      allowResizing: true,
      cellTemplate: (c: any,o: any) => this.paymentStyle(c,o,o.data.AccountBalance)
  },
  {
      alignment: "left" as 'left',
      dataField: 'Status',
      caption: 'Status',
      width: 90,
      allowEditing: false,
      allowSorting: false,
      allowResizing: true,
  },
  ]

  buttons: any = [
    {
    location: 'before',
    widget: 'dxButton',
    options: {
        icon: 'mif-dollar2 fg-green',
        text: 'Click to Pay',
        onClick: () => {},
    },
    visible: true,
    disabled: true
    }
  ]

  gridContainer : any = {};
  tableSubscriber: Subscription = new Subscription();
  id: any;

  constructor(public billingService: BillingService, public tableConfigService: TableConfigService,
    private route: ActivatedRoute) {
      this.tableSubscriber = 
      this.tableConfigService.getGridContainer().subscribe((res) => {
          if(res) {
            this.gridContainer = res
          }
      })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    this.tableSubscriber.unsubscribe();
  }

  addBuks(cellInfo: any) {
    return cellInfo.value ? "$" +(cellInfo.value).toFixed(2) : "";
  }

  paymentStyle(container: any, options: any, data: any) {
    const style = (data == 0) ? "black" : data > 0 ? 'green' : 'red';
    container.innerHTML = `<span class="fg-${style} bold">` + '$' + (data ? data.toFixed(2) : '') + '</span>'
  }

  paymentChargesStyle(container: any, options: any, data: any) {
    const style = data.TypeName == "Charge" ? 'red' : 'green';
    container.innerHTML = `<span class="fg-${style} bold">` + '$'+ (data.Fee ? data.Fee.toFixed(2) : '') + '</span>';
}
  
  getData(params: any) : any {
    if(this.id !== '1') {
      params.Filter.BillingStatementId = this.id
    }
    const payButton  = this.buttons.find((el: any)=>el.options.text === "Click to Pay");
    payButton.disabled = false;
    return this.billingService.getBillingData(params).toPromise();
  }

  refreshGrid() {
    this.gridContainer.component.refresh()
  }
}
