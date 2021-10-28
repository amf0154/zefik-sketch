import { Component, Input, OnInit } from '@angular/core';
import { OptionsService } from 'src/app/services/options.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  public options = [];  
  constructor(
    public $options: OptionsService
  ) {}

  @Input() item: any;
  ngOnInit(): void {
      const {options} = this.item;
      console.log(options)
      this.options = this.$options.getOptions(options)
  }

  optionName(option:any){
    return option.text
  }

  optionValue(option: any){
    return option.value
  }


  /*
  const isObjectValue = angular.isObject($scope.item.value);
                const dict = angular.copy($scope.dicts[$scope.item.options]);
                $scope.labelField = $scope.item.labelField || 'text';
                $scope.valueField = $scope.item.valueField || 'value';
                $scope.staticLabel = getStaticLabel();
                $scope.dict = dict;
                if(!!$scope.item && Reflect.has($scope.item,"updKey")){
                    $rootScope.$on($scope.item.updKey,(e,data)=>{
                        let obtainedData = data;
                        if(obtainedData.length == 0 || (obtainedData.length != 0 && obtainedData[0].value != null)){
                            obtainedData.unshift({value: null, Id: null, Name: '-- Select from list --', text: '-- Select from list --'});
                        }
                        $scope.dict = obtainedData;
                    })
                }
                $scope.isObjectValue = isObjectValue;
                $scope.currentIcon = null;

               $scope.selectFromList = function(){
                if($scope.item.labelField === "Name"){
                    const value = dict[0][$scope.item.valueField];
                    if(dict.length === 0 || (dict[0].value && dict[0].value !== null) || (value !== null))
                    dict.unshift(
                        ($scope.item.valueField === "Id") ? {Id: null, Name: '-- Select from list --'} : {value: null, Name: '-- Select from list --'}
                    );
                }else{
                    if(dict.length === 0 || dict[0].value !== null)
                    dict.unshift(
                        {value: null, text: '-- Select from list --',Id: null, Name: '-- Select from list --'}
                    );
                }
                if($scope.item.value === null) {
                    $scope.newValue = null;
                } else if (!isObjectValue) {
                    let text;
                    $scope.item.valueField !== "Id" ?
                    (text = dict.find((el) => el.value === $scope.item.value).text) :
                    (text = dict.find((el) => el.Id === $scope.item.value).Name)
                    $scope.newValue = text
                } else {
                    $scope.newValue = $scope.item.value.Name
                }
               };
               $scope.selectFromList();

                if (isObjectValue) {
                    setValueFromDict()
                }
                function setValueFromDict() {
                    const valueId = $scope.item.value.Id;
                    $scope.item.value = dict.find(item => item.Id === valueId);
                }

                $scope.formItemChangeHandler = function(el){
                    const element = $scope.dict.find((v)=> v.value === el.value ||  v.text === el.value);
                    if(element && typeof element == "object" && Reflect.has(element,"icon")){
                        $scope.currentIcon = '/ZSN/App/assets/img/icons/' + element.icon
                    }
                  //  $scope.currentIcon = $scope.dict.find((v)=> v.value === el.value);
                }
                $scope.formItemChangeHandler({value: $scope.staticLabel});
                function getStaticLabel() {
                    return isObjectValue
                        ? $scope.item.value[$scope.labelField]
                        : ($scope.getValueFromDict($scope.item) || $scope.item.value)
                }

                $scope.formItemChangeHandler = (item) => {
                    let icon = item.options.toLowerCase();
                    if(icon === 'dead' || icon === 'departed' || icon === 'donotdisturb') {
                        if(!item.value) {
                            $scope.currentIcon = null;
                        } else {
                            $scope.currentIcon = '/ZSN/App/assets/img/icons/statuses_designations/' + icon + '.svg';
                        }
                    }
                    $rootScope.$broadcast('zsnSelect',item);
                } */
}
