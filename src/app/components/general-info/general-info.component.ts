import { Component, OnInit } from '@angular/core';
import { BeServiceService } from 'src/app/services/be-service.service';
import { OptionsService } from 'src/app/services/options.service';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {

//   info = {"ComplianceCalculationTask":0,"Id":1,"IdDisplay":"ORE-000-0000-001","IsHiringCompany":true,"Name":"Zefik, Inc.","DBA":"Zefik, llc","NonLegalAka":"Zefik","OrganizationType":0,"StockExchangeName":"","StockExchangeSymbol":"n/a","About":"","ProfileImage":"https://zefikmaser.blob.core.windows.net/photos/org_1_38542031-a021-4dbc-8db9-ca1e90e24234.png?sv=2015-04-05&sr=b&sig=7OvZUoiQzoek2JQwiywZhBfOSy6xyiGjL6QVnMNGW7I%3D&st=2021-09-20T12%3A06%3A08Z&se=2021-09-21T18%3A11%3A08Z&sp=r","OrgNetworkUtilizationSummary":{"CreatedBy":"System","CreatedDate":"04/12/2019 04:59:01 PM (+03:00)","LastChangeBy":"Elad ada Trachtenberg","LastChangeDate":"02/22/2021 10:05:09 AM (+03:00)","LastLoginBy":"Mike Pateev","LastLoginDate":"09/20/2021 03:09:43 PM (+03:00)"},"LegalStructureFormation":{"CountryOfFormation":"Albania","CofLegalStructure":"Individual/Sole Proprietor or Single-Member LLC","StateOfFormation":null,"SofLegalStructure":null,"CofId":"46-3804683","CofRegistrationDate":"11/20/2013 12:00:00 AM (+03:00)","CofStatus":null,"SofId":"4468054","SofRegistrationDate":"10/11/2013 12:00:00 AM (+03:00)","SofStatus":null,"SofEntityType":null},"PhysicalAddress":{"StreetAddress":"6 Aaron Ct","State":"WI","SiteName":"wefeww","City":"Madison","Zip":"53716","Country":"United States of America","TimeZone":null,"Floor":"avavav","StreetViewImageUrl":"https://zefikmaser.blob.core.windows.net/photos/businessEntity_1_59fb33d1-c4ce-43b1-9a3f-4362ae8f6741.jpeg?sv=2015-04-05&sr=b&sig=GSvAa6W6HA78gGJYvEIfGKrreMMq2OR%2B0dcPPmd0KiM%3D&st=2021-09-20T12%3A06%3A08Z&se=2021-09-21T18%3A11%3A08Z&sp=r","MapPoint":{"Longitude":-89.2894548,"Latitude":43.0701548},"IsVerified":true,"UpdateTime":"08/26/2021 10:32:04 AM (+03:00)","UpdateByUserId":10319},"Affiliations":[{"TypeName":"Corporate Parent Organization(s)","Affiliations":[{"AffiliationId":106,"ConnectedOrganizationId":10459,"ConnectedOrganizationName":"dawd","DateRange":[{"From":"08/29/2021 12:00:00 AM (+03:00)","Until":null},{"From":"07/31/2021 12:00:00 AM (+03:00)","Until":null},{"From":"06/16/2021 12:00:00 AM (+03:00)","Until":"06/18/2021 12:00:00 AM (+03:00)"}]}]},{"TypeName":"Corporate Subsidiary Organization(s)","Affiliations":[{"AffiliationId":108,"ConnectedOrganizationId":10023,"ConnectedOrganizationName":"OM Solutions LLC","DateRange":[{"From":"08/29/2021 12:00:00 AM (+03:00)","Until":null},{"From":"07/29/2021 12:00:00 AM (+03:00)","Until":null}]},{"AffiliationId":131,"ConnectedOrganizationId":10025,"ConnectedOrganizationName":"Valley Land Services, LLC","DateRange":[{"From":"08/25/2021 03:00:00 AM (+03:00)","Until":null}]},{"AffiliationId":137,"ConnectedOrganizationId":4,"ConnectedOrganizationName":"Graymont (PLG)","DateRange":[{"From":"08/30/2021 03:00:00 AM (+03:00)","Until":"09/01/2021 03:00:00 AM (+03:00)"}]},{"AffiliationId":151,"ConnectedOrganizationId":3,"ConnectedOrganizationName":"Maser Consulting P.A.","DateRange":[{"From":"09/09/2021 03:00:00 AM (+03:00)","Until":null}]}]},{"TypeName":"Other Legally Binding Affiliation","Affiliations":[{"AffiliationId":130,"ConnectedOrganizationId":11822,"ConnectedOrganizationName":"dscd","DateRange":[{"From":"09/12/2021 03:00:00 AM (+03:00)","Until":null},{"From":"08/29/2021 12:00:00 AM (+03:00)","Until":null}]},{"AffiliationId":119,"ConnectedOrganizationId":10712,"ConnectedOrganizationName":"adminpanel","DateRange":[{"From":"07/31/2021 03:00:00 AM (+03:00)","Until":"10/14/2021 12:00:00 AM (+03:00)"}]}]},{"TypeName":"Non-Legally Binding but Otherwise Affiliated Organization(s)","Affiliations":[{"AffiliationId":136,"ConnectedOrganizationId":11839,"ConnectedOrganizationName":"Zefik","DateRange":[{"From":"08/30/2021 05:30:51 PM (+03:00)","Until":null}]}]}],"IsOrganizationFree":false}

  items: any = [
    {
        type:  'form',
        title: 'Organization General Overview',
        icon:  'general-overview.png',
        items: [
            {
                type: 'profile-hat'
            }
        ]
    },
    {
        type: 'form',
        title: 'Legal and Non-Legal Name(s)',
        icon:  'organization-names.png',
        items: [
            {
                type: 'form',
                title: 'Organization Name(s)',
                items: [
                    {
                        title: 'Full Legal Name',
                        name: 'Name',
                        required: true,
                    },
                    {
                        title: 'Registered Trade Name (D/B/A)',
                        name: 'DBA'
                    },
                    {
                        title: 'Non-Registered/Non-Legal A.K.A.',
                        name: 'NonLegalAka'
                    },
                ]
            }
        ]
    }
    ,
    {
        type: 'form',
        title: 'Organization Network Credential',
        icon: 'network-credentials.png',
        items: [
            {
                title: 'Org Z-ID',
                name: 'BEID',
                type: 'clickable',
                readonly: true
            },
            {
                title: 'Primary Place of Business Site Z-ID',
                // name: 'UZID',
                type: 'clickable',
                value: '***************',
                readonly: true
            }
        ]
    },
    {
        type: 'form',
        title: 'Organization Country and State/Province of Formation',
        icon:  'sales.png',
        items: [
            {
                type: 'form',
                title: 'Country of Formation',
                hint: 'Country of Formation Section contains information assigned to an Organization by the Country, in which the Organization was formed.',
                name: 'LegalStructureFormation',
                id: 'countryFormation',
                items: [
                    {
                        type: 'country',
                        title: 'Name',
                        name: 'CountryOfFormation',
                        statePare: 'StateOfFormation'
                    },
                    {
                        name: 'CofId',
                        title: 'ID'
                    },
                    {
                        name: 'CofLegalStructure',
                        title: 'Legal Structure',
                        type: 'select',
                        options: 'legalStructures'
                    },
                    {
                        name: 'CofRegistrationDate',
                        title: 'Registration Date',
                        type: 'date',
                        isPopUp: false
                    },
                    {
                        name: 'CofStatus',
                        title: 'Status',
                        type: 'select',
                        cssClass: 'cof-status',
                        options: 'cofStatuses'
                    }
                ]
            },
            {
                type: 'form',
                title: 'State/Province of Formation',
                hint: 'State/Province of Formation Section contains information assigned to an Organization by the State and/or a Province, in which the Organization was formed.',
                name: 'LegalStructureFormation',
                id: 'f1e5e227-248f-4707-80cb-7edfea031cd1',
                items: [
                    {
                        name: 'StateOfFormation',
                        title: 'Name',
                        type: 'state',
                        countryPare: 'CountryOfFormation'
                    },
                    {
                        name: 'SofId',
                        title: 'ID'
                    },
                    {
                        name: 'SofLegalStructure',
                        title: 'Legal Structure',
                        type: 'select',
                        options: 'legalStructures'
                    },
                    {
                        name: 'SofEntityType',
                        title: 'Entity Type',
                        type: 'select',
                        options: 'sofEntityType'
                    },
                    {
                        name: 'SofRegistrationDate',
                        title: 'Registration Date',
                        type: 'date',
                        isPopUp: false
                    },
                    {
                        name: 'SofStatus',
                        title: 'Status',
                        type: 'select',
                        cssClass: 'sof-status',
                        options: 'sofStatuses'
                    }
                ]
            }
        ]
    },
    {
        type: 'form',
        title: 'Organization Type and Stock Exchange Info',
        icon:  'stock.png',
        id: 'org-type',
        items: [
            {
                type: 'form',
                title: 'Organization Type',
                id: 'org-type-input',
                items: [
                    {
                        name: 'OrganizationType',
                        title: 'Org. Type',
                        type: 'select',
                        options: 'orgTypes',
                        required: true
                    }
                ]
            },
            {
                type: 'form',
                title: 'Stock Exchange Info',
                id: 'stock-exchange-info',
                isHidden: false,
                items: [
                    {
                        name: 'StockExchangeName',
                    },
                    {
                        name: 'StockExchangeSymbol'
                    }
                ]
            }
        ]
    },
    {
        type: 'form',
        title: 'Organization Network Utilization Summary ',
        icon: 'network-utilization.png',
        name: 'OrgNetworkUtilizationSummary',
        items: [
            {
                type: 'form',
                title: 'Create History',
                items: [
                    {
                        name: 'CreatedDate',
                        title: 'Create Date/Time',
                        readonly: true
                    },
                    {
                        name: 'CreatedBy',
                        title: 'Created by',
                        readonly: true
                    }
                ]
            },
            {
                type: 'form',
                title: 'Last Log-in History',
                items: [
                    {
                        name: 'LastLoginDate',
                        title: 'Last Log-in Date/Time',
                        readonly: true
                    },
                    {
                        name: 'LastLoginBy',
                        title: 'Last Log-in by',
                        readonly: true
                    }
                ]
            },
            {
                type: 'form',
                title: 'Last Change History',
                items: [
                    {
                        name: 'LastChangeDate',
                        title: 'Last Change Date/Time',
                        readonly: true
                    },
                    {
                        name: 'LastChangeBy',
                        title: 'Last Change By',
                        readonly: true
                    }
                ]
            }
        ]
    },
    {   
        type: 'form',
        title: 'Affiliated Organizations',
        icon: 'Picture5.png',
        items: []
    },
    {
        type: 'form',
        title: 'About',
        icon: 'mission.png',
        id: 'about',
        items: [
            {
                type: 'textarea',
                cssClass: 'about-tile-row',
                title: 'About',
                name: 'About'
            }
        ]
    }
]

    constructor(private beService: BeServiceService,public options: OptionsService) { }

    ngOnInit(): void {
        this.options.setOption('orgTypes', [
            { text: 'Private Company', value: 0 },
            { text: 'Publicly Traded Company', value: 1 }
        ]);
    }

    getDetails() {
        return this.beService.getDetails(1)
    }

}
