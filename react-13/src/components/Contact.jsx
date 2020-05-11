import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <article data-testid="contact" className="contact">
        <img src={this.props.image} className="contact__avatar" alt={this.props.alt} />
        <span className="contact__data">{this.props.nome}</span>
        <span className="contact__data">{this.props.telefone}</span>
        <span className="contact__data">{this.props.pais}</span>
        <span className="contact__data">{this.props.admissao}</span>
        <span className="contact__data">{this.props.empresa}</span>
        <span className="contact__data">{this.props.departamento}</span>
      </article>
      );
    }
  }
  
  export default Contact;
  