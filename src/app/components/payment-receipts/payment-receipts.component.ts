import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PaymentReceiptsService } from 'src/app/services/payment-receipts.service';
import { TableConfigService } from 'src/app/services/table-config.service';

@Component({
  selector: 'app-payment-receipts',
  templateUrl: './payment-receipts.component.html',
  styleUrls: ['./payment-receipts.component.scss']
})
export class PaymentReceiptsComponent implements OnInit, OnDestroy {

  exportConfig = {
    selectorField: 'Id',
    download: (params: any) => this.receiptsService.exportExcel(params),
    email: (params: any) => this.receiptsService.emailExcel(params),
    fileName: 'paymentReceipts.xlsx'
  };

  columns = [
    {
        caption: 'Account Name',
        dataField: 'BusinessEntity.Name',
        // cellTemplate: 'accountNameTemplate',
        allowResizing: true,
    },
    {
        caption: 'Payment Method',
        width: 190,
        dataField: 'ActivityName',
        allowResizing: true,
    },
    {
        caption: 'Charges',
        dataField: 'Charges',
        alignment: 'left',
        width: 80,
        allowResizing: true,
        cellTemplate: function (container: any, options: any) {
            container.innerHTML = '<span class="fg-green bold">' + '$' + options.data.Charges + '</span>'
        }
    },
    {
        caption: 'Sales Tax',
        dataField: 'SalesTax',
        alignment: 'left',
        width: 80,
        allowResizing: true,
        cellTemplate: function (container: any, options: any) {
            container.innerHTML = '<span class="fg-red bold">' + '$' + options.data.SalesTax + '</span>'
        }
    },
    {
        caption: 'Total',
        dataField: 'TotalTransaction',
        alignment: 'left',
        width: 80,
        allowResizing: true,
        // cellTemplate: function (container, options) {
        //     container.append(
        //         `<b>${$filter('currency')(options.data.TotalTransaction)}</b>`
        //     );
        // }
        cellTemplate: function (container: any, options: any) {
            container.innerHTML = '<b>' + '$' + options.data.TotalTransaction + '</b>'
        }
    },
    {
        caption: 'Transaction Status',
        width: 150,
        dataField: 'TransactionStatus',
        allowResizing: true,
        cellTemplate: function (container: any, options: any) {
            container.innerHTML = `<span class="transaction-status ${options.data.TransactionStatus.toLowerCase()}">${options.data.TransactionStatus}</span>`;
        }
    },
    {
        caption: 'Create Date/Time',
        width: 200,
        dataField: 'Date',
        allowResizing: true,
    },
    {
        caption: 'PDF',
        width: 37,
        allowSorting: false,
        dataField: 'PaymentReceiptFilePath',
        allowResizing: true,
        // cellTemplate: function (container, options) {
        //     if (options.value) {
        //         container.append(`<span class="fa fa-external-link cursor-pointer fg-blue"></span>`).on('click', () => {
        //             paymentService.getPdfLink(options.data.Id).then(({data}) => {
        //                 window.open(data, '_blank');
        //             }).catch((e) => notifyService.error("Can't get document."))
        //         })                            
        //     }
        // },
        cellTemplate: (container: any, options: any) => {
          container.innerHTML = `<a class="fa fa-external-link cursor-pointer fg-blue" (click)="openLink()"></a>`;
          container.addEventListener('click', () => {
            this.openLink(options.data.Id)
          })
        },
        headerCellTemplate: function (header: any, info: any) {
          header.innerHTML = '<i class="fa fa-eye grid-header-icon"></i>'
            // return $('<i class="fa fa-eye grid-header-icon"></i>').appendTo(header);
        }
    }
  ]

  buttons: any = [
    {
    location: 'before',
    widget: 'dxButton',
    options: {
        icon: 'mif-plus fg-green',
        text: 'New Receipt',
        onClick: () => {},
    },
    visible: true,
    disabled: true
    }
  ]

  gridContainer : any = {};
  tableSubscriber: Subscription = new Subscription();

  constructor(public receiptsService: PaymentReceiptsService, public tableConfigService: TableConfigService) {
      this.tableSubscriber = 
      this.tableConfigService.getGridContainer().subscribe((res) => {
          if(res) {
            this.gridContainer = res
          }
      })
  }
  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.tableSubscriber.unsubscribe();
  }

  openLink(id: any): void {
    this.receiptsService.getPdfLink(id).subscribe((data) => {
      window.open(data, '_blank');
    })
  }

  addBuks(cellInfo: any): string {
    return cellInfo.value ? "$" +(cellInfo.value).toFixed(2) : "";
  }
  
  getData(params: any) : Promise<any> {
    const payButton  = this.buttons.find((el: any)=>el.options.text === "New Receipt");
    payButton.disabled = false;
    return this.receiptsService.getFilteredEntities(params).toPromise();
  }

  refreshGrid(): void {
    this.gridContainer.component.refresh()
  }

}
