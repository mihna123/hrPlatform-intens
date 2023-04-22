import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export default class ClientForm extends Component {
    state = {
        id: 0,
        name: '',
        lastName: '',
        dateOfBirth: '',
        contactNumber: '',
        email: '',
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    componentDidMount() {
        if (this.props.client) {
            const { id, name, lastName, dateOfBirth, contactNumber, email } = this.props.client;
            this.setState({ id, name, lastName, dateOfBirth, contactNumber, email });
        }
    }

    submitNew = (e) => {
        e.preventDefault();
        fetch(`http://localhost:18096/api/JobCandidate/`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                lastName: this.state.lastName,
                dateOfBirth: this.state.dateOfBirth,
                contactNumber: this.state.contactNumber,
                email: this.state.email
            })
        }).then(res => res.json())
            .then(client => {
                this.props.addClientToState(client);
                this.props.toggle();
            }).catch(err => console.log(err));
    }

    submitEdit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:18096/api/JobCandidate/${this.state.id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                lastName: this.state.lastName,
                dateOfBirth: this.state.dateOfBirth,
                contactNumber: this.state.contactNumber,
                email: this.state.email
            })
        }).then(res => res.json())
            .then((client) => {
                this.props.toggle();
                this.props.updateClientIntoState(client);
            }).catch(err => console.log(err));
    }

    render() {
        let button = '';
        if (this.props.isNew) {
            button = <Button color="success" type="submit">Add candidate</Button>;
        }
        else {
            button = <Button color="success" type="submit" >Edit candidate</Button>;
        }
        return (
            <div>
                <Form onSubmit={this.props.client ? this.submitEdit : this.submitNew}>
                    <FormGroup>
                        <Label for="name">Name:</Label>
                        <Input type="text" name="name" onChange={this.onChange} value={this.state.name === null ? '' : this.state.name}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Last name:</Label>
                        <Input type="text" name="lastName" onChange={this.onChange} value={this.state.lastName === null ? '' : this.state.lastName}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="date">Date of birth:</Label>
                        <Input type="date" name="dateOfBirth" onChange={this.onChange} value={this.state.dateOfBirth === null ? '' : this.state.dateOfBirth}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="contact">Contact number(999-999-9999):</Label>
                        <Input type="tel" name="contactNumber"
                            pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$" onChange={this.onChange} value={this.state.contactNumber === null ? '' : this.state.contactNumber}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email:</Label>
                        <Input type="email" name="email" onChange={this.onChange} value={this.state.email === null ? '' : this.state.email}></Input>
                    </FormGroup>
                    {button}
                </Form>
            </div>
        )
    }

}