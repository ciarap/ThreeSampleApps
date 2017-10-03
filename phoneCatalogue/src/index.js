 import React from 'react';
    import ReactDOM from 'react-dom';
    import PhoneCatalogueApp from './App';
    import '../node_modules/bootstrap/dist/css/bootstrap.css';
    import phones from  './Data';

    ReactDOM.render(
      <PhoneCatalogueApp phones={phones}/>,
      document.getElementById('root')
    );
