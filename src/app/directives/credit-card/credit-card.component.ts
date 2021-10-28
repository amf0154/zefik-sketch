import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*
  $scope.getCardImage = commonFunctionsService.getCardImage
  const selectedMonthElement = document.getElementById("month-select");
  const selectedYearElement = document.getElementById("year-select");
  const selectedCardNumberElement = document.getElementById("card-number-data");
  const selectedCardCodeElement = document.getElementById("card-code-data");
  let selectedMonthValue = null;
  let selectedYearValue = null;
  let selectedCardNumberValue = null;
  let selectedCardCodeValue = null;
  $scope.touched = false;
  const months = [{key: "01", value: "01"},{key: "02", value: "02"}, {key: "03", value: "03"},{key: "04",value: "04"},{key: "05",value: "05"},{key: "06",value: "06"},
  {key: "07",value: "07"},{key: "08",value: "08"},{key: "09",value: "09"},{key: "10",value: "10"},{key: "11",value: "11"},{key: "12",value: "12"}];

  const range = (start, end) => {
      return Array(++end-start).join(0).split(0).map(function(n, i) {
          return {key: (i+start).toString().slice(2,4), value: i+start}
      })
  }
  const years = range(Number(moment().format("YYYY")),Number(moment().add(12,'years').format("YYYY")));
  let ccNumberInput = document.querySelector('.cc-number-input'),
  ccNumberPattern = /^\d{0,16}$/g,
  ccNumberSeparator = " ",
  ccNumberInputOldValue,
  ccNumberInputOldCursor,
  
  mask = (value, limit, separator) => {
      var output = [];
      for (let i = 0; i < value.length; i++) {
          if ( i !== 0 && i % limit === 0) {
              output.push(separator);
          }
          
          output.push(value[i]);
      }
      
      return output.join("");
  },
  unmask = (value) => value.replace(/[^\d]/g, ''),
  checkSeparator = (position, interval) => Math.floor(position / (interval + 1)),
  ccNumberInputKeyDownHandler = (e) => {
      let el = e.target;
      ccNumberInputOldValue = el.value;
      ccNumberInputOldCursor = el.selectionEnd;
  },
  ccNumberInputInputHandler = (e) => {
      let el = e.target,
              newValue = unmask(el.value),
              newCursorPosition;
      
      if ( newValue.match(ccNumberPattern) ) {
          newValue = mask(newValue, 4, ccNumberSeparator);
          
          newCursorPosition = 
              ccNumberInputOldCursor - checkSeparator(ccNumberInputOldCursor, 4) + 
              checkSeparator(ccNumberInputOldCursor + (newValue.length - ccNumberInputOldValue.length), 4) + 
              (unmask(newValue).length - unmask(ccNumberInputOldValue).length);
          
          el.value = (newValue !== "") ? newValue : "";
      } else {
          el.value = ccNumberInputOldValue;
          newCursorPosition = ccNumberInputOldCursor;
      }
      
      el.setSelectionRange(newCursorPosition, newCursorPosition);
      
      highlightCC(el.value);
  },
  highlightCC = (ccValue) => {
      let ccCardType = '',
              ccCardTypePatterns = {
                  Amex: /^3/,
                  Visa: /^4/,
                  MasterCard: /^5/,
                  Discover: /^6/,
                  Genric: /(^1|^2|^7|^8|^9|^0)/,
              };
      
      for (const cardType in ccCardTypePatterns) {
          if ( ccCardTypePatterns[cardType].test(ccValue) ) {
              ccCardType = cardType;
              break;
          }
      }
      $scope.value.CardTitle = ccCardType;
      let activeCC = document.querySelector('.cc-types__img--active'),
              newActiveCC = document.querySelector(`.cc-types__img--${ccCardType.toLowerCase()}`);
      
      if (activeCC) activeCC.classList.remove('cc-types__img--active');
      if (newActiveCC) newActiveCC.classList.add('cc-types__img--active');
  };

  ccNumberInput.addEventListener('keydown', ccNumberInputKeyDownHandler);
  ccNumberInput.addEventListener('input', ccNumberInputInputHandler);


  function fillSelect($select, arr) {
      arr.forEach((item, index) => {
          $select.append($("<option/>").val(index).text(item.value))
      })
  }

  ($scope.setInitialParams = function(){
      const {CardExpiration, CardNumber, CardCode} = $scope.value;
      if(CardExpiration && CardExpiration.length === 4){
          selectedMonthValue = CardExpiration.substring(0,2);
          selectedYearValue = CardExpiration.substring(2,4);
          const obtainedMonth = CardExpiration.substring(0,2);
          const searchedYear = years.find((y)=>y.key == CardExpiration.substring(2,4))
          setTimeout(()=>{
              $("#month-select").val(Number(obtainedMonth))
              $("#year-select").val(years.indexOf(searchedYear))
              validation();
          })
      }
      if(CardNumber && CardNumber.length === 16){
          selectedCardNumberValue = CardNumber;
          $("#card-number-data").val(CardNumber.replace(/\W/gi, '')
          .replace(/(.{4})/g, '$1 ').slice(0, -1));
          highlightCC(CardNumber)
          validation();
      }
      if(CardCode && (CardCode.length === 4 || CardCode.length === 3)){
          selectedCardCodeValue = CardCode;
          $("#card-code-data").val(selectedCardCodeValue);
          validation(); 
      }

      if($scope.required)
          validation(); 
  })();

  fillSelect($("#month-select"),months);
  fillSelect($("#year-select"),years);

  $rootScope.$on("creditCardUpdValidation",function(){
      $scope.touched = true;
      validation()
  });

  function validation(){
      if($scope.touched && $scope.required){
          commonFunctionsService.applyValidationClass(
              selectedCardCodeElement,
              selectedCardCodeValue && (selectedCardCodeValue.length === 3 || selectedCardCodeValue.length === 4))
          commonFunctionsService.applyValidationClass(
              selectedCardNumberElement,
              selectedCardNumberValue && selectedCardNumberValue.length === 16)
          commonFunctionsService.applyValidationClass(selectedMonthElement,selectedMonthValue)
          commonFunctionsService.applyValidationClass(selectedYearElement,selectedYearValue)                   
      }
      if(
          selectedMonthValue && selectedYearValue && 
          (selectedCardNumberValue && selectedCardNumberValue.length === 16) && 
          selectedCardCodeValue && 
          (selectedCardCodeValue.length === 3 || selectedCardCodeValue.length === 4)
      ){
          $scope.value.CardExpiration = selectedMonthValue + selectedYearValue;
          $scope.value.CardExpiration = selectedMonthValue + selectedYearValue;
          $scope.value.CardNumber = selectedCardNumberValue;
          $scope.value.CardCode = selectedCardCodeValue;
          $scope.form.$setValidity($scope.key, true, window);
      }else{
          if($scope.required)
              $scope.form.$setValidity($scope.key, false, window);
      }
  }
  selectedCardNumberElement.oninput = function(){
      selectedCardNumberValue = selectedCardNumberElement.value.replaceAll(" ", '');
      validation();
  }
  selectedCardCodeElement.oninput = function(){
      selectedCardCodeValue = selectedCardCodeElement.value.replaceAll(" ", '');
      validation();
  }
  selectedMonthElement.oninput = function(){
      const itemvalue = selectedMonthElement.options[selectedMonthElement.selectedIndex].text;
      selectedMonthValue = months.find(el=> el.value === itemvalue)?.key;
      validation();
  }
  selectedYearElement.oninput = function(){
      const itemvalue = selectedYearElement.options[selectedYearElement.selectedIndex].text;
      selectedYearValue = years.find(el=> el.value == itemvalue)?.key;
      validation();
  }
  */

}
