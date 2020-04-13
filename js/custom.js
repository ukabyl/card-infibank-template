// let cardNumber = document.getElementById('card-number');
//
// function formatCardCode() {
//     let cardCode = this.value.replace(/[^\d]/g, '').substring(0,16);
//     cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
//     this.value = cardCode;
// }
//
// function cardNumberValidator() {
//   for (var i in ['input', 'change', 'blur', 'keyup']) {
//       cardNumber.addEventListener('input', formatCardCode, false);
//   }
// }
//
// cardNumberValidator();
//
//
// document.getElementById('heart')
//   .addEventListener('click', function() {
//     cardNumber.focus();
//   })


  var card = new Card({
      form: 'form',
      container: '.card-wrapper',

      formSelectors: {
          numberInput: 'input#number',
          expiryInput: 'input#expiry',
          cvcInput: 'input#cvc',
          nameInput: 'input#name'
      },

      width: '100%',
      formatting: true,


      messages: {
          validDate: 'valid\ndate',
          monthYear: 'mm/yy',
      },

      placeholders: {
          number: '•••• •••• •••• ••••',
          name: 'Full Name',
          expiry: '••/••',
          cvc: '•••'
      },

      masks: {
          cardNumber: '•'
      },
  });
