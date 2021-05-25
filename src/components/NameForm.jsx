import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', message: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState( {[event.target.name]: event.target.value} );
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name+ ', And message was: ' + this.state.message);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label> Name:
                    <input type="text" name="name" onChange={this.handleChange} />
                </label>
                <textarea name="message" onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NameForm;