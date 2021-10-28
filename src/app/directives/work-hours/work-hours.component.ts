import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-hours',
  templateUrl: './work-hours.component.html',
  styleUrls: ['./work-hours.component.scss']
})
export class WorkHoursComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*
  const openTime  = $scope.item.value.OpenTime;
            const closeTime = $scope.item.value.CloseTime;
            const openTimeObj = moment(openTime, 'HH:mm:ss')
            const closeTimeObj = moment(closeTime, 'HH:mm:ss')

            $scope.switcherOptions = {
                value: $scope.item.value.IsOpened,
                width: 50,
                switchedOffText: 'close',
                switchedOnText: 'open',

                onValueChanged: function (e) {
                    $scope.item.value.IsOpened = e.value;
                    $scope.getForm().$setDirty();
                }
            }

            $scope.openTimeOptions = {
                type: 'time',
                width: 110,
                height: 30,
                value: openTime && openTimeObj,

                onValueChanged: function (e) {
                    $scope.item.value.OpenTime = moment(e.value).format('HH:mm:ss')
                    $scope.getForm().$setDirty();
                }
            }

            $scope.closeTimeOptions = {
                type: 'time',
                width: 110,
                height: 30,
                value: closeTime && closeTimeObj,

                onValueChanged: function (e) {
                    $scope.item.value.CloseTime = moment(e.value).format('HH:mm:ss')
                    $scope.getForm().$setDirty();
                }
            }

            $scope.openTimeLabel = (openTime && closeTime)
                ? openTimeObj.format('LT') + ' - ' + closeTimeObj.format('LT') + ' (EST) '
                : ''; */

}
