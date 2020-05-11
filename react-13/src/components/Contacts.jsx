import React from "react";
 
class Contacts extends React.Component {
	render() {
		return (
			<div data-testid="contacts" className="container">
				<section className="contacts">{this.props.children}</section>
			</div>
		);
	}
}

export default Contacts;
