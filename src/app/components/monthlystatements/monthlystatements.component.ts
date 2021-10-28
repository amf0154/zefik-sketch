import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BillingService } from 'src/app/services/billing.service';
import { MonthlyStatementsService } from 'src/app/services/monthly-statements.service';
import { TableConfigService } from 'src/app/services/table-config.service';

@Component({
  selector: 'app-monthlystatements',
  templateUrl: './monthlystatements.component.html',
  styleUrls: ['./monthlystatements.component.scss']
})
export class MonthlystatementsComponent implements OnInit {

  exportConfig = {
    selectorField: 'Id',
    download: (params: any) => this.monthlyStatementsService.exportExcel(params),
    email: (params: any) => this.monthlyStatementsService.emailExcel(params),
    fileName: 'MonthlyStatements.xlsx'
  };

  gridContainer : any = {};
  tableSubscriber: Subscription = new Subscription();
  balance: any = 0;

  constructor(public monthlyStatementsService: MonthlyStatementsService, public tableConfigService: TableConfigService,
    private router: Router) {
      this.tableSubscriber = 
      this.tableConfigService.getGridContainer().subscribe((res) => {
          if(res) {
            this.gridContainer = res
          }
      })
  }

  ngOnInit(): void {
  }

  summary = {
    // column: (userService.isZefikUser() || userService.user.isHiringCompany) ? "BusinessEntityName" : "StatementName",
    column: 'BusinessEntityName',
    summaryType: "min",
    customizeText: () => {
        return `Account Outstanding Total Balance: ${this.balance.toFixed(2)} $`;
    },
  }

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

  columns: any = [ 
    {
        caption: 'Organization Name',
        width: 360,
        dataField: 'BusinessEntityName',
        // cellTemplate: linkToCompanyInfo,
        allowSorting: false,
        allowResizing: true,
        // visible: userService.isZefikUser() || userService.user.isHiringCompany
    },
    {
        caption: 'Statement Name',
        // width: (userService.isZefikUser() || userService.user.isHiringCompany) ? 220 : 450,
        dataField: 'StatementName',
        cellTemplate: this.linkToBilling,
        allowSorting: false,
        allowResizing: true,
    },
    {
        caption: 'Create Date',
        width: 200,
        dataField: 'CreateDate',
        allowSorting: false,
        allowResizing: true,
    },
    {
        caption: 'Due Date',
        dataField: 'DueDate',
        width: 200,
        allowSorting: false,
        allowResizing: true,
    },
    {
        caption: 'Settle Date',
        width: 200,
        dataField: 'SettleDate',
        allowSorting: false,
        allowResizing: true,
    },
    {
        caption: 'Statement Balance',
        dataField: 'StatementBalance',
        minWidth: 100,
        alignment: 'center',
        cellTemplate: (c: any,o: any) => this.paymentStyle(c,o),
        allowSorting: false,
        allowResizing: true,
    },
    {
        caption: 'Current Balance',
        minWidth: 100,
        dataField: 'CurrentBalance',
        alignment: 'center',
        cellTemplate: (c: any,o: any) => this.paymentStyle(c,o),
        allowSorting: false,
        allowResizing: true,
    },
    {
        caption: 'Status',
        width: 120,
        dataField: 'StatusName',
        allowSorting: false,
        allowResizing: true,
        cellTemplate: (element: any, info: any) => {
            element.innerHTML = `<span class="bold ${this.changeColor(info.data)}">` + info.text + '</span>';
        },
    }]

    ngOnDestroy() {
        this.tableSubscriber.unsubscribe();
    }
    
    addBuks(cellInfo: any) {
        return cellInfo.value ? "$" +(cellInfo.value).toFixed(2) : "";
    }

    changeColor(data: any) {
        let color;
        switch (data.StatusName) {
            case 'Open': 
            color = 'monthly_green';
            break;
            case 'Pending':
            color = 'monthly_orange';
            break;
            case 'Past Due':
            color = 'monthly_red';
            break;
            case 'Declined':
            color = 'monthly_gray';
            break;
            default: 
            color = 'monthly_black';
        }
        return color;
      }
    
      paymentStyle(container: any, options: any) {
        container.innerHTML = `<span class="bold ${this.changeColor(options.data)}">` + '$' + (options.value ? options.value : '')  + '</span>';
      }
    
    getData(params: any) : any {
        const payButton  = this.buttons.find((el: any)=>el.options.text === "Click to Pay");
        payButton.disabled = false;
        return this.monthlyStatementsService.getTotalbalance(params).toPromise().then((res) => {
            this.balance = res;
            return this.monthlyStatementsService.getMonthlyStatementsBilling(params).toPromise();
        });
    }

    linkToBilling(container: any, options: any) {
        if (options.value) {
            container.innerHTML = `<a href="/billing/${options.data.Id}">` + options.value + '</a>';
        }
    }
    
    refreshGrid() {
        this.gridContainer.component.refresh()
    }

}
