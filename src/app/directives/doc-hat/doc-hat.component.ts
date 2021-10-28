import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-hat',
  templateUrl: './doc-hat.component.html',
  styleUrls: ['./doc-hat.component.scss']
})
export class DocHatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*
  $scope.onReadmoreClick = function () {
                // We use custom implementation of scroll instead of $anchorScroll because of smooth scroll.
                $(".cell-view").animate({ scrollTop: $('#about').offset().top }, 1000);
            }; */

}
