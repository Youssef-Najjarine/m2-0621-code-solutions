function objectExample() {
  const anObject = new Object();
  console.log('value of anObject: ', anObject);
  console.log('typeof anObject: ', typeof anObject);
  return anObject;
}



function arrayExample() {
  const anArray = new Array();
  console.log('value of anArray: ', anArray);
  console.log('typeof anArray: ', typeof anArray);
  return anArray;
}



function functionExample() {
  const aFunction = new Function();
  console.log('value of aFunction: ', aFunction);
  console.log('typeof aFunction: ', typeof aFunction)
  return aFunction;
}

function stringExample() {
  const aString = new String();
  console.log('value of aString: ', aString);
  console.log('typeof aString: ', typeof aString);
  return aString;
}

function numberExample() {
  const aNumber = new Number();
  console.log('value of aNumber: ', aNumber);
  console.log('typeof aNumber: ', typeof aNumber);
  return aNumber;
}

function booleanExample() {
  const aBoolean = new Boolean();
  console.log('value of aBoolean: ', aBoolean);
  console.log('typeof aBoolean: ', typeof aBoolean);
  return aBoolean;
}
objectExample();
arrayExample();
functionExample();
numberExample();
booleanExample();
stringExample();
