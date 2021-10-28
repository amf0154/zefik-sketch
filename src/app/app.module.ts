import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DxAccordionModule, DxDataGridModule, DxTemplateModule, DxTooltipModule } from 'devextreme-angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BaseTableConfigComponent } from './components/base-table-config/base-table-config.component';
import { BillingComponent } from './components/billing/billing.component';
import { DxLoadPanelModule, DxToolbarModule, DxFunnelModule } from 'devextreme-angular';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MonthlystatementsComponent } from './components/monthlystatements/monthlystatements.component';
import { MenuComponent } from './menu/menu.component';

import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentReceiptsComponent } from './components/payment-receipts/payment-receipts.component';
import { PaymentMethodsComponent } from './components/payment-methods/payment-methods.component';
import { BaseFormConfigComponent } from './components/base-form-config/base-form-config.component';
import { GeneralInfoComponent } from './components/general-info/general-info.component';
import { FormPageComponent } from './directives/form-page/form-page.component';
import { BaseFormComponent } from './components/base-form/base-form.component';
import { TooltipComponent } from './directives/tooltip/tooltip.component';
import { ProfileHatComponent } from './directives/profile-hat/profile-hat.component';
import { CityInputComponent } from './directives/city-input/city-input.component';
import { CreditCardComponent } from './directives/credit-card/credit-card.component';
import { WorkHoursComponent } from './directives/work-hours/work-hours.component';
import { DocHatComponent } from './directives/doc-hat/doc-hat.component';
import { ZipInputComponent } from './directives/zip-input/zip-input.component';
import { PhoneInputComponent } from './directives/phone-input/phone-input.component';
import { EmailInputComponent } from './directives/email-input/email-input.component';
import { SmartStreetInputComponent } from './directives/smart-street-input/smart-street-input.component';
import { PasswordFieldComponent } from './directives/password-field/password-field.component';
import { SelectCardComponent } from './directives/select-card/select-card.component';
import { SelectComponent } from './directives/select/select.component';
import { BlockComponent } from './directives/block/block.component';
import { CountryInputComponent } from './directives/country-input/country-input.component';
import { StateInputComponent } from './directives/state-input/state-input.component';
import { EmployeesHeadcountComponent } from './directives/employees-headcount/employees-headcount.component';
import { TradesSelectComponent } from './directives/trades-select/trades-select.component';


@NgModule({
  declarations: [
    AppComponent,
    BaseTableConfigComponent,
    BillingComponent,
    ToolbarComponent,
    MonthlystatementsComponent,
    MenuComponent,
    PaymentReceiptsComponent,
    PaymentMethodsComponent,
    BaseFormConfigComponent,
    GeneralInfoComponent,
    FormPageComponent,
    BaseFormComponent,
    TooltipComponent,
    ProfileHatComponent,
    CityInputComponent,
    CreditCardComponent,
    WorkHoursComponent,
    DocHatComponent,
    ZipInputComponent,
    PhoneInputComponent,
    EmailInputComponent,
    SmartStreetInputComponent,
    PasswordFieldComponent,
    SelectCardComponent,
    SelectComponent,
    BlockComponent,
    CountryInputComponent,
    StateInputComponent,
    EmployeesHeadcountComponent,
    TradesSelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxDataGridModule,
    DxLoadPanelModule,
    DxToolbarModule,
    DxFunnelModule,
    DxAccordionModule,
    DxTemplateModule,
    DxTooltipModule,
    MatListModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

