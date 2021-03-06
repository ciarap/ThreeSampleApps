  import '../node_modules/bootstrap/dist/css/bootstrap.css';
    import React from 'react';
    import ReactDOM from 'react-dom';
    import ContactsApp from './App';

    var contacts = [
        {
            "name": "Contact 1",
            "address": "123 Test St",
            "phone_number": "132-3212"
        },

        {
            "name": "Contact 2",
            "address": "23 Main St",
            "phone_number": "934-4329"
        },

        {
            "name": "Contact 3",
            "address": "4 Lower St",
            "phone_number": "432-5832"
        },

        {
            "name": "Contact 4",
            "address": "49 Upper Street",
            "phone_number": "934-4290"
        }
      ] ;       

    ReactDOM.render(
      <ContactsApp  contacts={contacts}  />,
          document.getElementById('root')
    );