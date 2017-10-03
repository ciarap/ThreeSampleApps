 import React from 'react';

    class ContactForm extends React.Component {
      render() {
        return (
          <tr>
            <td>
            <input type="text" className="form-control" />
            </td>
            <td>
            <input type="text" className="form-control"/>
            </td>
            <td>
            <input type="text" className="form-control" />
            </td>
            <td>
            <input type="button" className="btn btn-primary" value="Add"/>
            </td>
          </tr>
          )
      }
    }
// eslint-disable-next-line
    class Contact extends React.Component {
      render() {
          return (
            <tr >
              <td> 
              {this.props.contact.name}
              </td>    
              <td> 
              {this.props.contact.address}
              </td>     
              <td> 
              {this.props.contact.phone_number}
              </td>            
            </tr>
            ) ;
        }
    }

    class ContactList extends React.Component {
      render() {
          var contactRows =this.props.contacts.map(function(item) {
            return <Contact key={item.number} contact={item} />;
        });
          return (
              <tbody >
                  {contactRows}
                  <ContactForm />
              </tbody>
            ) ;
        }
    }

    class ContactsTable extends React.Component {
      render() {
          return (
            <table className="table table-bordered">
                  <ContactList contacts={this.props.contacts}  />   {/* CHANGE */} 
            </table>
            );
      }
    }

   class ContactsApp extends React.Component {
      render() {
          return (
                <div>
                   <h1>Contact List.</h1>
                   <ContactsTable contacts={this.props.contacts}  />  {/* CHANGE */} 
                </div>
          );
      }
    }

    export default ContactsApp;