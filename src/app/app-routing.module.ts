import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BillingComponent } from './components/billing/billing.component';
import { GeneralInfoComponent } from './components/general-info/general-info.component';
import { MonthlystatementsComponent } from './components/monthlystatements/monthlystatements.component';
import { PaymentMethodsComponent } from './components/payment-methods/payment-methods.component';
import { PaymentReceiptsComponent } from './components/payment-receipts/payment-receipts.component';

const routes: Routes = [
  { path: 'billing/:id', component: BillingComponent},
  // { path: '**', component: BillingComponent},
  { path: 'monthly-statements/:beId', component: MonthlystatementsComponent},
  { path: 'payment-receipts/:beId', component: PaymentReceiptsComponent},
  { path: 'payment-methods/:beId', component: PaymentMethodsComponent},
  { path: 'general/:beId', component: GeneralInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
