//Get the string from the page
//controller function
const getValue = () => {
  document.getElementById('alert').classList.add('invisible');
  let userString = document.getElementById(userString).value;
  let revString = reverseString(userString);
  displayString(revString);
};

//Reverse the string
//logic function
const reverseString = (userString) => {
  let revString = [];

  //reverse a string using a decrimenting for loop
  for (let index = userString.length - 1; index >= 0; index--) {
    revString += userString[index];
  }

  return revString;
};

//Display the message back to the user
//View function
const displayString = (revString) => {
  //write to the page
  document.getElementById(
    'msg'
  ).innerHTML = `Your reversed string is: ${revString}`;
  //show the alert box
  document.getElementById('alert').classList.remove('invisible');
};
