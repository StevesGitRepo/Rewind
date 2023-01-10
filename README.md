
![RewindLogoFinNoText](https://user-images.githubusercontent.com/104333881/211467925-54350db8-5123-418d-8bb0-f39ae762613d.png)

Play it forward and reverse! Rewind is a Javascript coding exercise using arrays. Write a program that displays a string in reverse.

REWIND is structured into three Javascript functions.

getValue
The first function, "getValue" pulls the entered string from the page and acts as the controller function. The function manipulates the Document Object Model (DOM) by taking in the 'alert' and 'invisible' attributes. The "userString" and "revString" variables are declared in this function.

reverseString
The "reverseString" function contains the app's logic and reverses the user's inputted string. The "revString" variable declares an empty array. A decrementing for loop begins the index count at the end of the string by assigning the start point with "userSTring.length - 1". The indices are walked through in reverse one at a time with "i--".

displayString
The "displayString" function displays the result of the completed function. The reversed string (revString), 'alert' and 'invisible' attributes are all called to display on the page with the button click.
