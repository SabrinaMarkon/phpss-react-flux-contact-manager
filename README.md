phpss-react-flux-contact-manager

A simple contact manager app built with React and Flux.

--------------

Sabrina Notes:

npm install -g create-react-app
create-react-app contactmanager
cd contactmanager
npm install --save flux bootstrap react-bootstrap superagent keymirror

keymirror - sets values in an object equal to its keys to help create the flux constants.
superagent - does the http requests in ContactsAPI to the example data source (jsonplaceholder.typicode.com/users)
           - note: the data does not persist between browser sessions (because it is from the external example source),
           but the data source could be changed so it persists on your own database.

--------------

Flux: https://github.com/facebook/flux/tree/master/examples/flux-concepts

Singleton Dispatcher - "The central hub that manages all the data flow in the Flux application"
                  - "A simple mechanism for distributing the ACTIONS to the STORES"

Stores - Contain application STATE and LOGIC
       - "After the stores are updated, they broadcast an event saying their state has changed,
          so the views may query the new state and update themselves".
