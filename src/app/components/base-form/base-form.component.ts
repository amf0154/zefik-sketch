import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { HelperServiceService } from 'src/app/services/helper-service.service';

@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss']
})
export class BaseFormComponent implements OnInit {

  constructor(private helperService: HelperServiceService) { }

  formControlNames: any = {};

  ngOnInit(): void {
  }

  /*
  $scope.be = {};
  $scope.beId = $routeParams.beId;
  $scope.fillFormWithData = fillFormWithData;
  $scope.updateDataFromForm = updateDataFromForm;
  $scope.getForm = getForm;
  $scope.clearForm = clearForm;
  $scope.resetForm = resetForm;
  $scope.setInitialItems = setInitialItems;
  } */

  fillFormWithData(formScheme: any, formData: any) {
    const formItemDefaults = {
        type: 'text',
        title: '',
        name: '',
        required: false,
        readonly: false,
        value: null
    };
    // var hasAfterProcessItemHandler = typeof $scope.afterProcessItemHandler === 'function';

    const precessFormItems = (item: any, formData: any) => {
      if (item.type === 'form') {
          item.id = item.id /*|| helperService.uuidv4()*/;
          item.visible = true;
          item.items.forEach(function (formItem: any) {
              precessFormItems(formItem, item.name ? formData[item.name] : formData)
          });
      } else {
          item = this.helperService.safeCopy(item, formItemDefaults);
          item.title = this.extractFieldTitle(item);
          item.value = (formData[item.name] !== null && formData[item.name] !== undefined)
              ? formData[item.name]
              : item.value; // TODO: Let's store default field value in `defaultValue` field (in configuration)
          this.formControlNames[item.name] = [
            {
              value: '' || item.value,
              disabled: !!item?.readonly
            },
            this.setValidators(item)
          ];
          // if (item.urlAlias) {
          //   let routeKey = Object.keys($route.routes).find( key => $route.routes[key].alias === item.urlAlias);
          //   if (routeKey) {
          //       let route = $route.routes[routeKey];
          //       let urlParams = {
          //           beId:   formData.BusinessEntityId,
          //           id: $routeParams.id
          //       };
          //       item.path = helperService.replaceStrWithObj(route.originalPath, urlParams);
          //   }
          // }

          // hasAfterProcessItemHandler && $scope.afterProcessItemHandler(item);
      }
      return this.formControlNames;
    }

    for(let item of formScheme){
      precessFormItems(item, formData);
    }
  }

  setValidators(formItem:any){
    return Object.entries(formItem).reduce((validators: Array<Validators>,item)=>{
      const [key,value] = item;
      switch(key){
        case 'required': {
          if(value){
            validators.push(Validators.required);
          }
          break;
        }  
        default: null;
      }
      return validators;
    },[]);
  }

  extractFieldTitle(item: any) {
    var camelCaseRegexp = /([a-z])([A-Z])/g;
    if (item.title === null) return null;
    return item.title || (item.name.replace(camelCaseRegexp, '$1 $2'));
  }

  updateDataFromForm(accordionItems: any, formData: any) {

    for(let item of accordionItems){
      precessFormItems(item, formData);
    }

    function precessFormItems(item: any, formData: any) {
        if (item.type === 'form') {
          for(let i of item.items){
            precessFormItems(i, item.name ? formData[item.name] : formData)
          }
        } else if(item.name) {
            formData[item.name] = item.value;
        }
    }
  }

  //   function precessFormItems(item: any) {
  //     if (item.type === 'form') {
  //         item.items.forEach(precessFormItems)
  //     } else if(item.name) {
  //         item.value = fieldsMap[item.name].value || null;
  //     }
  //   }
  // }

  createSourceFieldsMap(sourceScheme: any) {
    let fieldsMap: any = {};

    sourceScheme.forEach(precessFormItems)

    return fieldsMap;

    function precessFormItems(item: any) {
      if (item.type === 'form') {
          item.items.forEach(precessFormItems)
      } else if(item.name) {
          fieldsMap[item.name] = item;
      }
    }
  }
  
}
