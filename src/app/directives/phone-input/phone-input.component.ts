import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss']
})
export class PhoneInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*
  const regExp =  helperService.stealthRegExp;
            const input = document.querySelector("#phone");
            $scope.phoneIdName = 'phone' + Math.floor(Math.random() * 1000);
            $scope.touched = false;
            $scope.checkPlusSymbol = function(phone) {
                return phone ? (phone.length === 0) ? phone : phone.includes('+') ? phone : '+' + phone : ""
            };
            $scope.initialValue = $scope.value ? JSON.parse(JSON.stringify($scope.value)) : "";
            const errorMsg = document.querySelector("#error-msg");
            errorMsg.setAttribute('id', `validation_${$scope.key}`);
            input.setAttribute('value', $scope.checkPlusSymbol($scope.value));
            input.setAttribute('id', $scope.key);
            if($scope.disabled)
                input.setAttribute("disabled","disabled");
            const errorMap = ["Invalid number", "Invalid country code", "Wrong phone length", "Wrong phone length", "Invalid number"];
            if(regExp.test($scope.value)) {
                input.style.padding = ".3125rem";
                return input.value = $scope.value;
            }
            const iti = window.intlTelInput(input, {
                // allowDropdown: false,
                // autoHideDialCode: false,
                // autoPlaceholder: "off",
                // dropdownContainer: document.body,
                // excludeCountries: ["us"],
                // formatOnDisplay: false,
                // geoIpLookup: function(callback) {
                //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
                //     var countryCode = (resp && resp.country) ? resp.country : "";
                //     callback(countryCode);
                //   });
                // },
                // hiddenInput: "full_number",
                // initialCountry: "auto",
                // localizedCountries: { 'de': 'Deutschland' },
                // nationalMode: false,
                // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
                // placeholderNumberType: "MOBILE",
                // preferredCountries: ['cn', 'jp'],
                preferredCountries: ["us", "ca", "mx"],
                separateDialCode: true,
                utilsScript: "/js/utils.js",
            });

            function setValidationClass(val){
                if($scope.touched){
                    const isValid = (val ? val : iti.isValidNumber());
                    commonFunctionsService.applyValidationClass(input,isValid)
                    if(!isValid)
                        $scope.form.$setValidity($scope.key, false, window);
                }
            }

            $rootScope.$on("phoneNumberUpdValidation", function(){
                $scope.touched = true;
                setValidationClass();
            });

            if($scope.value && $scope.value.length == 0)
              iti.setCountry("us");

            const removeSymbols = (phone) => phone.replace(/\+/g,'').replace(/\-/g,'').replace(/\s/g,'');  
            function reset() {
                $scope.value = removeSymbols(iti.getNumber());
                setValidationClass(false);
                input.classList.remove("error");
                errorMsg.removeAttribute('title');
                errorMsg.classList.add("hide");
                if($scope.form)
                    $scope.form.$setValidity($scope.key, true, window);
            };

            const setIvalidStatus = function (){
                input.classList.add("error");
                setValidationClass(true);
                const errorCode = iti.getValidationError();
                errorMsg.setAttribute('title',errorMap[errorCode])
                errorMsg.classList.remove("hide");
                if($scope.form)
                    $scope.form.$setValidity($scope.key, false, window);
            }
            $rootScope.$on($scope.key, function (e,data) {
                $scope.value = data;
                $scope.initialValue = JSON.parse(JSON.stringify(data));
                iti.setNumber($scope.checkPlusSymbol(data));
                if(data == ""){
                    iti.setCountry("us");
                }
                reset();
            });

            $rootScope.$on("updPhoneControls", function () {
                iti.setNumber($scope.checkPlusSymbol($scope.value));
                setValidationClass();
            });

            function phoneUpdated(iti, notValid = true){
                    $rootScope.$broadcast("phoneUpdated",{
                        name: $scope.key,
                        isValid: notValid ? iti.isValidNumber() : notValid,
                        value: $scope.value,
                        required: $scope.required
                    });
            }

            const blur = function() {
                reset();
                if (input.value.trim()){
                    if (iti.isValidNumber()) {
                        if($scope.existanceValidation && removeSymbols(iti.getNumber()) !== $scope.initialValue){
                            $regService.checkIfPhoneExistsInDB(removeSymbols(iti.getNumber()))
                            .then((res) => {
                                if(!res.data.IsSuccess){
                                    notifyService.error("Phone already exist, please select different phone!")
                                    $scope.didUpdated();
                                    setIvalidStatus();
                                    phoneUpdated(iti,false);
                                }else{
                                    $scope.didUpdated();
                                    phoneUpdated(iti);
                                }
                            })
                        }else{
                            $scope.didUpdated();
                            phoneUpdated(iti);
                        }
                    } else {
                        setIvalidStatus();
                        $scope.didUpdated();
                        phoneUpdated(iti);
                    }
                }else if($scope.required && !input.value.trim()){
                    setIvalidStatus();
                    phoneUpdated(iti,false)
                }else if(!$scope.required && input.value.trim() == 0){
                    phoneUpdated(iti,false)
                }
            }
            input.addEventListener('blur', blur);
            input.oninput = function(){
                blur();
            };
            input.addEventListener('change', reset);
            input.onkeypress = function(event){
                return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? 
                null : event.charCode >= 48 && event.charCode <= 57 && input.value.length <=16
            } */

}
