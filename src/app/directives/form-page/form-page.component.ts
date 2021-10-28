import { AfterViewInit, Component, forwardRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
  providers: [
    {
       provide: NG_VALUE_ACCESSOR,
       useExisting: forwardRef(() => FormPageComponent),
       multi: true
    }
  ]
})
export class FormPageComponent implements OnInit, ControlValueAccessor {

  @Input() item: any = [];
  @Input() data: any = [];
  @Input() isEditMode: any = false;

  isZefikUser = true;
  canChangeBeInfo = true;
  PARAM_TYPE: any = {};
  be: any = {}
  beId: any = ''
  accordionInstance: any;

  value = 0;

  onChange: any = () => { };
  onTouched: any = () => { };

  onChangeVal() {
    this.onChange(this.value);
  }

  writeValue(value: number): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

 
  onInitialized(e: any) {
    this.accordionInstance = e.component;
  }

  onContentReady(e: any) {
    if (!this.accordionInstance) {
      console.error('Accordion wasn`t initialized');
      return ;
    }
    for (var i = 0; i < this.data.length; i++) {
        this.accordionInstance.expandItem(i);
    }
  }

  defineLabelIcon(item: any) {
    if(item.icons){
        const findPath = item.icons.find((el: any)=> el.value === item.value);
        return (findPath) ? '/assets/icons/' + findPath.icon : (item.icons.length === 1) ? '/assets/icons/' + item.icons[0].icon : false;
    } else {
        return false;
    }
  }

  cityChange(item: any) {
    // switch(item.key){
    //     case "smart":{
    //         $rootScope.$broadcast("smartStreet",item);
    //         break;
    //     }
    //     case "city1": {
    //         $scope.be.PhysicalAddress.City = item.value;
    //         break;
    //     }
    //     case "city2": {
    //         $scope.be.RemitToAddress.City = item.value;
    //         break;
    //     }
    //     case "city3": {
    //         $scope.be.MailingAddress.City = item.value;
    //         break;
    //     }
    // }
    // $scope.hidethis = true; 
    // if(item?.updKey === 'toPayableOrg')
    //     $rootScope.$broadcast("updTaxes",item);
  };

  isValidUrl(url: any) {
    return true;
  }

  onFieldClick(item: any) {

  }

  zsnTableShowSaveButton() {

  }

  updPromo(item: any) {

  }

  zipChange(item: any) {

  }

  newCardHolder() {

  }

  asAccountOwner(item: any) {

  }

  onSiteInputClick(siteNameAddress: any, isDisabled: any) {
    // if (!siteNameAddress || !isDisabled) {
    //     return ;
    // }
    // $window.open(siteNameAddress, '_blank');
  }

  onURLInputClick(url: any, isDisabled: any) {
    // if (!url || !isDisabled || !helperService.isValidUrl(url)) {
    //     return ;
    // }
    // $window.open(helperService.createFullUrl(url), '_blank');
  }

  onPathClickDefaultHandler(path: any, isDisabled: any) {
    // if (path && isDisabled) {
    //     if (path.toLowerCase().indexOf('http') === 0) {
    //         $window.open(path, '_blank');
    //     } else {
    //         $location.path(path)
    //     }
    // }
  }

  onPhoneInputClick(e: any, tel: any, isDisabled: any) {
    // if (tel && isDisabled) {
    //     helperService.createLink('tel:' + tel).click();
    // }
  }

  onEmailInputClick(email: any, isDisabled: any) {
    // if (email && isDisabled) {
    //     helperService.createLink('mailto:' + email).click();
    // }
  }

  stateChange(item: any) {

  }

  getSelectionClass(item: any) {

  }

  getValueFromDict(item: any) {

  }

  changeAffirmativeCategoriesHandler(item: any) {

  }

  verifyAddressInformation(type: any) : any {

  }

  isAddressValidateByType(type: any): any {

  }

  autocomplete(item: any, second: any) {

  }
}
