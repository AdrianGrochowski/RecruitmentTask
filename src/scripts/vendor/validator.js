var Validator = (function () {
      function Validator(input, validateFn) {
          this.input = document.getElementById(input);
          this.validateFn = validateFn;
          this.timeOut = null;
          this.bindEvents();
      };
      Validator.prototype.bindEvents = function () {
          this.input.addEventListener('keyup', this.onKeyUp.bind(this), false);
      };
      Validator.prototype.onKeyUp = function () {
          clearTimeout(this.timeOut);
          this.timeOut = setTimeout(function(){this.validate();}.bind(this), 500);
      }
      Validator.prototype.validate = function () {
          var result = this.validateFn(this.input.value);
          result && this.isValid();
          !result && this.isInvalid();
      };
      Validator.prototype.isValid = function () {
        this.input.style.borderBottom = "2px solid green";
        this.input.classList.add("filled");
      }
      Validator.prototype.isInvalid = function () {
        this.input.style.borderBottom = "2px solid red";
        if(this.input.value.length == 0) {
          this.input.classList.remove("filled");
        } else {
          this.input.classList.add("filled");
        }
      }
      return Validator;
  }());

  var imie = new Validator('name-surname', function(v){return /^.{3,}$/.test(v)});
  var mail = new Validator('email', function(v){return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(v)});
  var tel = new Validator('telephone', function(v){return /^.{9,}$/.test(v)});
  var topic = new Validator('topic', function(v){return /^.{3,}$/.test(v)});
  var msg = new Validator('message', function(v){return /^.{3,}$/.test(v)});
