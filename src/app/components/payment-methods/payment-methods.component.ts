import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonFunctionsService } from 'src/app/services/common-functions.service';
import { PaymentMethodsService } from 'src/app/services/payment-methods.service';
import { TableConfigService } from 'src/app/services/table-config.service';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss']
})
export class PaymentMethodsComponent implements OnInit {

  gridContainer : any = {};
  tableSubscriber: Subscription = new Subscription();
  areReportsDisabled: boolean = true;

  buttons: any = [
    {
    location: 'before',
    widget: 'dxButton',
    options: {
        icon: 'mif-plus fg-green',
        text: 'New',
        onClick: () => {},
    },
    visible: true,
    disabled: true
    },
    {
      location: 'before',
      widget: 'dxButton',
      options: {
          icon: 'mif-pencil fg-green',
          text: 'Edit',
          onClick: () => {},
      },
      visible: true,
      disabled: true
      }
  ]

  //   buttons = 
//     [{
//         title: 'New',
//         iconCls: 'spin',
//         isDisabled: () => !$scope.selectionFiltersLoaded,
//         handler: () => {
//             const options = {
//                 templateUrl: 'App/components/admin/payment-methods/payment-method/PaymentMethodView.html', 
//                 controller: 'PaymentMethodController'
//             };

//             $uibModal.open(options).result.then(onNewProductPopupClose).catch((e) => {
//                 if(e !== 'backdrop click') {
//                     throw e;
//                 }
//             })
//         }
//     },
//     {
//         title: 'Edit',
//         iconCls: 'mif-pencil green',
//         isDisabled: function () {
//             return true;
//         },
//         handler: () => {
//             paymentService.setEdittingPaymentMethod($scope.gridContainer.grid.component.getSelectedRowsData()[0]);
//             const options = {
//                 scope: $scope,
//                 templateUrl: 'App/components/admin/payment-methods/payment-method/PaymentMethodView.html', 
//                 controller: 'PaymentMethodController'
//             };

//             $uibModal.open(options).result.then(onNewProductPopupClose).catch((e) => {
//                 if(e !== 'backdrop click') {
//                     throw e;
//                 }
//             })
//         }
//     },
//     {
//         title: 'Delete',
//         iconCls: 'mif-cross red',
//         handler: function () {
//             $scope.deleteProduct($scope.gridContainer.grid.component.getSelectedRowsData()[0]);
//         },
//         isVisible: function () {
//             return false;
//             //return $scope.selectionFiltersLoaded
//         },
//         isDisabled: function () {
//             return $scope.gridContainer.grid.component.getSelectedRowsData().length !== 1;
//         }
//     }
// ]);


columns = [{
              caption: 'Org Name',
              cssClass: "ctr",
              dataField: 'BusinessEntityName',
              // cellTemplate: linkToCompanyInfo,
              allowSorting: false,
          },
          {
              caption: 'Site Name',
              cssClass: "ctr",
              dataField: 'SiteName',
              allowSorting: false,
          },
          {
              caption: 'Card Holder',
              cssClass: "ctr",
              dataField: 'CardHolder',
              // cellTemplate: (c,o) => linkToUserInfo(c, o, o.data.CardHolderId),
              allowSorting: false,
          },
          {
              caption: 'Payment Method',
              width: 150,
              dataField: 'CardBrand',
              cellTemplate: (element: any, info: any) => {
                  element.innerHTML = "<div style='display: flex'>" + this.commonFunctionsService.getCardImage(info.text,true) + "</div>"
              },
              allowSorting: false,
          },
          {
              caption: 'Last 4 digits',
              cssClass: "ctr",
              dataField: 'LastDigits',
              allowSorting: false,
          },
          {
              caption: 'Expiration Date',
              cssClass: "ctr",
              dataField: 'ExpirationDate',
              allowSorting: false,
          },
          {
              caption: 'Status',
              cssClass: "ctr",
              dataField: 'Status',
              allowSorting: false,
          },
          {
              caption: 'Default Payment',
              cssClass: "ctr",
              dataField: 'IsDefault',
              allowSorting: false,
          },
          {
              caption: 'Create Date/Time',
              cssClass: "ctr",
              dataField: 'CreatedDateTime',
              allowSorting: false,
          },
          {
              caption: 'Created By',
              cssClass: "ctr",
              dataField: 'CreatedByName',
              // cellTemplate: (c,o) => linkToUserInfo(c, o, o.data.CreatedBy),
              allowSorting: false,
          },
          {
              caption: 'Last Modified by',
              cssClass: "ctr",
              dataField: 'UpdatedByName',
              // cellTemplate: (c,o) => linkToUserInfo(c, o, o.data.UpdatedBy),
              allowSorting: false,
          },
          {
              caption: 'Last Used by',
              cssClass: "ctr",
              dataField: 'LastUsedByName',
              // cellTemplate: (c,o) => linkToUserInfo(c, o, o.data.LastUsedBy),
              allowSorting: false,
          },
          {
              caption: 'Last Used Date/Time',
              cssClass: "ctr",
              dataField: 'LastUsedDateTime',
              allowSorting: false,
          },
          {
              caption: 'Last Charge/Amount',
              cssClass: "ctr",
              dataField: 'LastChargeAmount',
              allowSorting: false,
          },
          {
              caption: 'is Successful',
              cssClass: "ctr",
              dataField: 'IsSuccessful',
              allowSorting: false,
          },
          {
              caption: 'Total # Charges',
              cssClass: "ctr",
              dataField: 'NumberOfCharges',
              alignment: 'left',
              allowSorting: false,
          },
            ]

  constructor(public methodsService: PaymentMethodsService, public tableConfigService: TableConfigService,
    private commonFunctionsService: CommonFunctionsService) {
    this.tableSubscriber = 
    this.tableConfigService.getGridContainer().subscribe((res) => {
        if(res) {
          this.gridContainer = res
        }
    })
  }

  ngOnInit(): void {
  }

  changeSuccessful(res: any) {
    res.forEach((el: any) => {
        el.IsSuccessful = el.IsSuccessful ? true : false
    })
    return res
}

  getData(params: any) : Promise<any> {
    const payButton  = this.buttons.find((el: any)=>el.options.text === "New");
    payButton.disabled = false;
    return this.methodsService.getAllPaymentMethods(params.Page.Num, params.Page.Size, params.Filter.Search).toPromise().then((res) => {
      res.PaymentMethods = this.changeSuccessful(res.PaymentMethods)
      return {
            Data: res.PaymentMethods,
            Total: res.TotalCount
        }
    });
  }

  /*if(userService.isZefikUser() && $routeParams.beId === "1") {
                return paymentService.getAllPaymentMethods(params.Page.Num, params.Page.Size, params.Filter.Search).then((res)=>{  
                    res.data.PaymentMethods = changeSuccessful(res.data.PaymentMethods)            
                        return {
                            data: {
                                Data: res.data.PaymentMethods,
                                Total: res.data.TotalCount
                            }
                        }
                    });
            } else if (!userService.isZefikUser()) {
                return paymentService.getPaymentMethods(Number(userService.user.businessEntityId)).then((res)=>{
                    res.data = changeSuccessful(res.data)
                    return {
                        data: {
                            Data: res.data,
                            Total: res.data.length
                        }
                    }
                });
            } else {
                return paymentService.getPaymentMethods(Number($routeParams.beId)).then((res)=>{
                    res.data = changeSuccessful(res.data)
                    return {
                        data: {
                            Data: res.data,
                            Total: res.data.length
                        }
                    }
                });
            } */

}
