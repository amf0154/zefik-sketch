import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-street-input',
  templateUrl: './smart-street-input.component.html',
  styleUrls: ['./smart-street-input.component.scss']
})
export class SmartStreetInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  /*
  $scope.searchParams = {
                address: "",
                state: $scope.initState,
                city: $scope.initCity,
            };

            $scope.isValidForm = function(){
                const val = $scope.item.value
                const isValid = val ? val.trim().length != 0 : !!val
                if($scope.item.required)
                    $scope.form.$setValidity($scope.item.name, isValid, window);
            };

            if($scope.item.required){
                $scope.isValidForm();
            };

            $scope.changeListener = function(){
                $scope.isValidForm();
            };

            updSearchParams = function(address,state,city){
                address ? this.address = address : null
                state ? this.state = state : null
                city ? this.city = city : null
            };

            $scope.getMatches = function(address){
                updSearchParams.call($scope.searchParams,address);
                return beService.addressAutocomplete($scope.searchParams).then(({data}) => {
                    return data.IsSuccess ? data.Result : [];
                });
            };

            $scope.select = function({state,city,zipcode}){
                if(state && city && zipcode){
                    $rootScope.$broadcast("updState",state);
                    $rootScope.$broadcast("updZip",zipcode);
                    $rootScope.$broadcast("updCity",city);
                }
            };

            $rootScope.$on("smartStreet",function(i,{type,value}){
                switch(type){
                    case "state": {
                        const state = value ?? " ";
                        updSearchParams.call($scope.searchParams,null,state);
                        break;
                    }
                    case "text": {
                        const city = value ?? " ";
                        updSearchParams.call($scope.searchParams,null,null,city);
                        break;
                    }
                }
            }); */

}
