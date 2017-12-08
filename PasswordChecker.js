var passWordChecker = function () {
  var userName = prompt('Enter a Username: ')
  var passWord = prompt('Enter a Password: ')
  var userNameValidation = function(userName) {
    var possibilities = [
        'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
        'P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d',
        'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
        't','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9
      ];
      userName.split().forEach(el => {
      if (!possibilities.includes(el)) {
        return false;
      } else if (userName.length <= 5) {
        return false;
      } else {
        return true;
      }
  })
}
  while (userNameValidation(userName) === true) {
    alert('Username may only include Letters and Numbers and contain atleast 5 characters.');
    var userName = prompt('Enter a Username: ');
  };
  var passWordValidation = function(passWord) {
    var possibilities = [
        'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
        'P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d',
        'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
        't','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9
      ];
    var capitalLetter = [
        'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
        'P','Q','R','S','T','U','V','W','X','Y','Z'
      ];
    var isANumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    function cap(el) {
      return capitalLetter.includes(el);
    }

    passWord.split().forEach(el => {
      if (!possibilities.includes(el)) {
        return false;
      } else if (passWord.length < 8) {
        return false;
      } else if (passWord.split("").some(cap)) {
        return true;
      } else if (password.some(isANumber))
      return true;
    })
  }
  while (passWordValidation(passWord) === false) {
    alert('Password must contain a capital letter and at least one number and be atleast length of 8.');
    var passWord = prompt('Enter a Password: ');
  }
}
