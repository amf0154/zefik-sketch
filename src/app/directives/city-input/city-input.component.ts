import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.scss']
})
export class CityInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*
  $scope.$on('address1', function () {
    if($scope.item.key === "city1")
      $scope.item.value = addressService.cityValue
  });
  $scope.$on('address2', function () {
    if($scope.item.key === "city2")
      $scope.item.value = addressService.cityValue
  });
  $scope.$on('address3', function () {
    if($scope.item.key === "city3")
      $scope.item.value = addressService.cityValue
  }); */

}
