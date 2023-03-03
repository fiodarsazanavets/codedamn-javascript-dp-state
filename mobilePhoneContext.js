const LockedScreenState = require('./lockedScreenState.js');

class MobilePhoneContext {
    
    #state = new LockedScreenState();

    pressHomeButton() {
        this.#state.pressHomeButton();
    }
}

module.exports = MobilePhoneContext;