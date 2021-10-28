import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-card',
  templateUrl: './select-card.component.html',
  styleUrls: ['./select-card.component.scss']
})
export class SelectCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*
  $scope.getCardImage = commonFunctionsService.getCardImage
            $scope.selectedCard = function(cardId){
                $scope.cards.map(card => document.getElementById(card.Id).classList.remove('selected-card'))
                document.getElementById(cardId).classList.add('selected-card');
                $scope.value = cardId;
            }
            $scope.isDataLoaded = false;
            $scope.cards = [];
            $scope.loadCards = function(){
                $scope.cards = [];
                $scope.isDataLoaded = false;
                spinnerService.show();
                const beId = userService.isZefikUser() ? $routeParams.beId : userService.user.businessEntityId;
                paymentService.getPaymentMethods(beId).then(cards => {
                    if(cards.data && cards.data.length !== 0){
                       $scope.cards = cards.data;
                       $scope.defaultCard = $scope.cards.find(card=> card.IsDefault);
                       $scope.value = $scope.defaultCard.Id;
                    }
                    spinnerService.hide();
                }).catch(()=> {
                    notifyService.error("can't load payment methods");
                    spinnerService.hide();
                }).finally(()=>{
                    $scope.isDataLoaded = true;
                });
            };
            $scope.loadCards();
            $scope.addNewCard = function(){
                $uibModal.open({
                    templateUrl: 'App/components/admin/payment-methods/payment-method/PaymentMethodView.html', 
                    controller: 'PaymentMethodController'
                }).result.then((r)=>{
                    if(r) $scope.loadCards();
                }).catch((e) => {
                    if(e !== 'backdrop click') {
                        throw e;
                    }
                });
            } */

}
