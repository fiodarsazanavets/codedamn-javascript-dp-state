const MobilePhoneContext = require('./mobilePhoneContext.js');
const UnlockedScreenState = require('./unlockedScreenState.js');

var phone = new MobilePhoneContext();

console.log('Pressing home button.');
phone.pressHomeButton();

console.log('Changing the phone state to unlocked.');
// Change state here

console.log('Pressing home button.');
phone.pressHomeButton();