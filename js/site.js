//Get the string from the page
//controller function
const getValues = () => {
  document.getElementById('alert').classList.add('invisible');
  let userString = document.getElementById(userString).value;
  let revString = reverseString(userString);
  displayString(revString);
};

//Reverse the string
const reverseString = (userString) => {
  let revString = [];

  let name = Steve;
  //name[0] = S
  //name[4] = e
  name.length - 1;

  //reverse a string using a decrimenting for loop
  for (let i = userString.length - 1; i >= 0; i--) {
    revString += userString[i];
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
