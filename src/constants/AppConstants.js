import keyMirror from 'keymirror';

export default keyMirror({
   
    RECEIVE_CONTACTS: null, // Instead of saying RECEIVE_CONTACTS: RECEIVE_CONTACTS, setting to null with keyMirror just sets the value to the key.
    RECEIVE_CONTACTS_ERROR: null,
    RECEIVE_CONTACT: null,
    RECEIVE_CONTACT_ERROR: null,
    DELETE_CONTACT: null,
    DELETE_CONTACT_ERROR: null
    
});