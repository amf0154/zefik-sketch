import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-headcount',
  templateUrl: './employees-headcount.component.html',
  styleUrls: ['./employees-headcount.component.scss']
})
export class EmployeesHeadcountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*
  $scope.EMPLOYEES_HEADCOUNT_TYPE = EMPLOYEES_HEADCOUNT_TYPE;
            $scope.isConsistentData = $scope.item.value || $scope.item.value.length > 0;
            $scope.organicHint = '"Organization\'s Organic Employees" are persons who work directly for the Organization and as such receive a paycheck from that Organization, i.g. W-2 in US';
            $scope.nonOrganicHint = '"Organization\'s Non-Organic Employees" are persons who do NOT work directly for the organization and as such do not receive a paycheck from that Organization, but who may be considered as employees and not contractors, i.g. employed via a Staffing Company and/or in US paid via a 1099 form.';
            $scope.totalHint = '"Organization\'s Total Employees" is a cumulative number of all self-reported Employees of the Organization calculated by the System by adding up Organization\'s Organic and Non-Organic Employees numbers.';

            $scope.hasValuedStatistics = hasValuedStatistics;
            $scope.getStatistic = getStatistic;
            $scope.getTotal = getTotal;
            $scope.getModel = getModel;

            function hasValuedStatistics(row) {
                return row.Statistics.find(isValuableStat)
            }

            function isValuableStat(stat) {
                return stat.Amount !== null && stat.Amount !== undefined && stat.Amount !== ''
            }

            function getTotal(row) {
                return row.Statistics.reduce((prevValue, currentValue) => prevValue + (+currentValue.Amount), 0);
            }

            function getStatistic(row, type) {
                return getModel(row, type).Amount;
            }

            function getModel(row, type) {
                const stat = row.Statistics.find(item => item.TypeId === type);
                if (!stat) {
                    $scope.isConsistentData = false;
                    throw new Error('Statistic is corrupted');
                }

                return stat;
            } */

}
