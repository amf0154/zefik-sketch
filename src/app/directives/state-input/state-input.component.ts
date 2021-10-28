import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-input',
  templateUrl: './state-input.component.html',
  styleUrls: ['./state-input.component.scss']
})
export class StateInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*
   $scope.disabledByCountry = false;
            $scope.$on('$destroy', destroyStateFieldHandler);
            $scope.$on('address1', function () {
                if($scope.item.key === "state1") {
                    $scope.item.value = addressService.stateValue;
                    $scope.item.required = !$scope.disabledByCountry;
                    countryToStateLinkService.setCurrentState($scope.item);
                }
                  
            });
            $scope.$on('address2', function () {
                if($scope.item.key === "state2") {
                    $scope.item.value = addressService.stateValue;
                    $scope.item.required = !$scope.disabledByCountry;
                    countryToStateLinkService.setCurrentState($scope.item);
                }                 
            });
            $scope.$on('address3', function () {
                if($scope.item.key === "state3") {
                    $scope.item.value = addressService.stateValue;
                    $scope.item.required = !$scope.disabledByCountry;
                    countryToStateLinkService.setCurrentState($scope.item);
                }
                  
            });
            if($scope.smart){
                $rootScope.$on('updState', function (i,v) {
                      $scope.item.value = v;
                      if($scope.smart)
                        $rootScope.$broadcast('smartStreet',$scope.item); 
                });
            }
            geoService.getStates().then(function (response) {
                $scope.states = angular.copy(response.data);
                $scope.states.unshift({Name: 'Select State', Id: null});
                countryToStateLinkService.getInitialCountryValue($scope.linkToCountry).then(fetchCountryLabel)
            });
            countryToStateLinkService.subscribeToCountryField($scope.linkToCountry, countryChangeHandler);
            countryToStateLinkService.setCurrentState($scope.item);
            function destroyStateFieldHandler() {
                $scope.item.required = false;
                countryToStateLinkService.unsubscribeToCountryField($scope.linkToCountry, countryChangeHandler);
            }
            function countryChangeHandler(countryId) {
                fetchCountryLabel(countryId);
            }
            $scope.ngChange = function(item) {
                $scope.onChange(item);
                $scope.item.required = !$scope.disabledByCountry;
                countryToStateLinkService.setCurrentState(item);
                if($scope.smart)
                    $rootScope.$broadcast('smartStreet',item); 
            }
            function fetchCountryLabel(countryId) {
                 if (countryId  === null) {
                    $scope.item.value = null;
                    $scope.disabledByCountry = false;
                    $scope.isFieldRequired = true;
                    $scope.item.disabled = false;
                } else if (countryId !== UNITED_STATES_ID) {
                    $scope.item.value = null;
                    $scope.disabledByCountry = true;
                    $scope.isFieldRequired = false;
                    $scope.item.disabled = true;
                    $scope.item.required = !$scope.disabledByCountry;
                } else {
                    $scope.disabledByCountry = false;
                    $scope.isFieldRequired = true;
                    $scope.item.disabled = false;
                }
                if(countryToStateLinkService.country || $scope.item.value) {
                    countryToStateLinkService.country = undefined;
                    $scope.item.required = !$scope.disabledByCountry;
                }
            }
  */

}
