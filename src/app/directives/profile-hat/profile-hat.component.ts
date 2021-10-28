import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-hat',
  templateUrl: './profile-hat.component.html',
  styleUrls: ['./profile-hat.component.scss']
})
export class ProfileHatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*
  $scope.address = mapAddressService.getMapAddress($scope.hatData.Address);
  $scope.bgkImg = $scope.hatData.Img || $scope.hatData.ImgPlaceholder;
  $rootScope.$on("updHatImage",() => {
      $scope.bgkImg = $scope.hatData.Img || $scope.hatData.ImgPlaceholder;
  });
  $scope.onReadmoreClick = function () {
      // We use custom implementation of scroll instead of $anchorScroll because of smooth scroll.
      $(".cell-view").animate({ scrollTop: $('#about').offset().top }, 1000);
  };
  */

}
