import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfig {

  apiServerUrl = "https://dev.zefik.com/api/";

  private token: string = 'YbsH-ZRtrfalsUL-ioN0BmelHiScM9cGq_GKfhZHW7eE-Mu8q60htLBSYrI3xRyx1n2rAWwHZFBPt5o1nRN3zmexltI9S1OgVUCc_g6X3iCwn2_BCRdiDNZLsFM92GUuTl9ixajfAGFqgTgiZVOD8hhMQdkhe3CCn28e-RmzW2bGn43lUdlkR9iQzcMDZKf6OV_RH3ynCJGUveHQbkzNwa99Er19f3SeFD_tshRkH1Hqg0OutNNWsJlGgUtTy2atslbwk-YoWwKh8jqb-SelvVmkU4EKmk_ELIJYm1WCE_Fp7PlyJXDeDSbshYRhQitSb8HrHgycZGOyjrOgdIpz5lRZzAP0QjtaiLzDFWRK8OMOX1Rnt804HBk_Z43VAOTMYWvslYFXjFDyJSK1ewvFt15vVhuHLU2hUmhPnMBeofcEkwGYMw7Hw2Tc-FEaeukqnpHqKQ';

  public headers = new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + this.token
  });
  
  configObject = {
      apiServiceBaseUri: this.apiServerUrl,
      appHref: location.href.split('#')[0] + '#/',
      apiUris: {
          account: this.apiServerUrl + "account",
          affectedPerson: this.apiServerUrl + "users",
          businessEntities: this.apiServerUrl + "businessentity",
          trainingOrientation: this.apiServerUrl + "api/training/orientation",
          trainingEvaluation: this.apiServerUrl + "training/evaluation",
          site: this.apiServerUrl + "site",
          documents: this.apiServerUrl + "api/document",
          complianceReport: this.apiServerUrl + "complianceReport",
          reports: this.apiServerUrl + "api/reports",
          subscriptions: this.apiServerUrl + "api/subscription",
          memberships: this.apiServerUrl + "membership",
          manage: this.apiServerUrl + "manage",
          exportToExcel: this.apiServerUrl + "api/export/tableToExcel",
          emailExcelTable: this.apiServerUrl + "api/export/emailExcelTable",
          iconNotification: this.apiServerUrl + "iconnotification",
          zefikcom: this.apiServerUrl + "zefikcom",
          payment: this.apiServerUrl + "payment",
          cards: this.apiServerUrl + "cards",
          allCards: this.apiServerUrl + "cards",
          sorc: this.apiServerUrl + "sorc",
          opportunities: this.apiServerUrl + "opportunities",
          zac: this.apiServerUrl + "zac",
          trade: this.apiServerUrl + "trade",
          products: this.apiServerUrl + "products",
          geo: this.apiServerUrl + 'geo',
          productCategories: this.apiServerUrl + 'productCategories',
          billing: this.apiServerUrl + 'billing',
          role: this.apiServerUrl + 'role',
          monthlyStatements: this.apiServerUrl + 'billingStatement',
          discounts: this.apiServerUrl + 'recurringDiscounts',
          promo: this.apiServerUrl + 'promos',
          affiliations: this.apiServerUrl + 'affiliationStatusLog',
          training: this.apiServerUrl + 'training',
          siteLocation: this.apiServerUrl + 'site',
      },
      roles: {
          zefikEmployee: "zefikemployee",
          primaryAdmin: "Primary Admin",
          accountOwner: "Account Owner",
          genAdmin: "Gen Admin",
          supervisor: "Supervisor",
          basic: "Basic",
          zefikUser: "Zefik User",
          payee: "Payee",
          host: "Host"
      },
      // registerSPePayUri: ngAuthSettings.registerSPePayUri,
      // tokenTimeoutMin: ngAuthSettings.tokenTimeoutMin,
      // tokenWarningTimeoutMin: ngAuthSettings.tokenWarningTimeoutMin,
      siteLevels: {
          Universal: 10,
          Corporate: 20,
          Location: 30,
          Subsite: 40,
          RiskType: 50
      },
      userRoles: {},
      noDataMessage: "No Data",
      toastDelay: 5000,
      hidingPages: ['compliance-report']
  }

}
