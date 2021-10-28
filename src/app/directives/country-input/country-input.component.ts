import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.scss']
})
export class CountryInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*
  let defaultCountry = false;
            let state = "";
            $scope.$on('address1', function () {
                if($scope.item.key === "country1") {
                    $scope.item.value = addressService.countryValue;
                    state = addressService.stateValue;
                }
            });
            $scope.$on('address2', function () {
                if($scope.item.key === "country2") {
                    $scope.item.value = addressService.countryValue;
                    state = addressService.stateValue;
                }
            });
            $scope.$on('address3', function () {
                if($scope.item.key === "country3") {
                    $scope.item.value = addressService.countryValue;
                    state = addressService.stateValue;
                }
            });
            $scope.changeCountry = (item) => {
                countryToStateLinkService.country = item.value
            }
            geoService.getCountries().then(function (response) {
                $scope.countries = response.data;
                $scope.countries = response.data; // (!$scope.required) ?  [select,...response.data] : response.data;
                if($scope.countries[0].Id !== undefined)
                $scope.countries.unshift({Name: 'Select Country', Id: undefined});
                countryToStateLinkService.triggerLoadCountryEvent($scope.fieldId, $scope.item.value);
                $scope.$watch('item.value', function (newVal, oldVal) {
                    if (newVal || oldVal) countryToStateLinkService.triggerChangeCountryEvent($scope.fieldId, $scope.item.value);
                    if($scope.item?.updKey === 'toPayableOrg')
                    $rootScope.$broadcast("updTaxes",$scope.item);
                });
            });

            $rootScope.$on('changeCountry', (params, type) => {
                switch (type) {
                    case 'edit': {
                        if($scope.item.value == null){
                            $scope.item.value = 'United States of America';
                            defaultCountry = true;
                            countryToStateLinkService.triggerChangeCountryEvent($scope.fieldId, $scope.item.value);
                        };
                        break;
                    }
                    case 'cancel': {
                        if(defaultCountry){
                            $scope.item.value = null;
                        };
                        break;
                    }
                    case 'save': {
                        if($scope.item.name === 'CountryOfFormation'
                         && defaultCountry
                         && !countryToStateLinkService.getState()
                         && $scope.item.value === 'United States of America') {
                            $scope.item.value = null;
                        } else if ($scope.item.name !== 'CountryOfFormation'
                         && defaultCountry
                         && $scope.item.value === 'United States of America' && !countryToStateLinkService.getCountryStates()[$scope.item.key]) {
                            $scope.item.value = null;
                        }
                        break;
                    }
                } 
            });

            $scope.$on('$destroy', clearCountryInitPromise);

            function clearCountryInitPromise() {
                countryToStateLinkService.clearCountryInitPromise($scope.fieldId);
            }
  */

}
