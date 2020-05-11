import React from 'react';

import TopBar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";
import Contact from "./components/Contact";

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
      .then(response => response.json() )
      .then(json => {
        this.setState({contacts: json})
    });
  }
  render() {
    return (
      <React.Fragment> 
        <TopBar />               

          <Filters nome={`Nome` } telefone="Telefone" pais="País" admissao=" Data de Admissão" empresa="empresa" departamento="Departamento" />         

          <Contacts>
            <Contact image nome="Nome" telefone="Telefone" pais="País" admissao="Admissão" empresa="empresa" departamento="Departamento" />
            {this.state.contacts.map(contact => {
              return(
                <Contact key={contact.id} image={contact.avatar} nome={contact.name} telefone={contact.phone} pais={contact.country} admissao={new Date (contact.admissionDate).toLocaleDateString()} empresa={contact.company} departamento={contact.department}  />
              )
            })}

          </Contacts>
      </React.Fragment>
    )
  }
}

export default App;
