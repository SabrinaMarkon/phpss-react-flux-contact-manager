/* Manage the state for the entire application from within our Store.
   Very easy to SCALE and add more React components because of this
   centralized space to manage everything. A different data source can be 
   switched out from ContactAPI to use a different backend without affecting
   any of our Flux architecture.
 */

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

// usually with state variables you start off with an underscore:
let _contacts = [];

function setContacts(contacts) {
    _contacts = contacts.sort(SortByName);    
}

function setContact(contact) {
    _contacts.push(contact);
    setContacts(_contacts);
}

function SortByName(a, b) {
    var aName = a.name.toLowerCase();
    var bName = b.name.toLowerCase();
    return ((aName < bName) ? -1 : ((aName > bName) ? 1: 0));
}

class AppStoreClass extends EventEmitter {
    
    // when the store changes, it emits an event.
    emitChange() {
        this.emit(CHANGE_EVENT);
    }
    
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }
    
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
    
    getContacts() {
        return _contacts;
    }
    
}

const AppStore = new AppStoreClass();

AppStore.dispatchToken = AppDispatcher.register(action => {
    switch(action.actionType) {
        case AppConstants.RECEIVE_CONTACTS:
            setContacts(action.contacts);
            AppStore.emitChange();
            break
        case AppConstants.RECEIVE_CONTACTS_ERROR:
            alert(action.message);
            AppStore.emitChange();
            break   
        case AppConstants.RECEIVE_CONTACT:
            setContact(action.contact);
            AppStore.emitChange();
            break
        case AppConstants.RECEIVE_CONTACT_ERROR:
            alert(action.message);
            AppStore.emitChange();
            break             
            default:
    }
});

export default AppStore;
