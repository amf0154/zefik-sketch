import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zip-input',
  templateUrl: './zip-input.component.html',
  styleUrls: ['./zip-input.component.scss']
})
export class ZipInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  /*
  $scope.$on('address1', function () {
                if($scope.item.key === "zip1")
                  $scope.item.value = addressService.zipValue
            });
            $scope.$on('address2', function () {
                if($scope.item.key === "zip2")
                  $scope.item.value = addressService.zipValue
            });
            $scope.$on('address3', function () {
                if($scope.item.key === "zip3")
                  $scope.item.value = addressService.zipValue
            });
            $scope.onChange = function(item){}
            
            if($scope.item.smart)
                $rootScope.$on("updZip",function(i,zip){
                    $scope.item.value = zip;
                })

            $scope.$watch("item.value", function(v, ov){
                if(v && v !== ov){ 
                    if($scope.item.updKey === 'toPayableOrg')
                        $rootScope.$broadcast("updTaxes",v); 
                }
            }); */
}
