import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';


export default class SkillForm extends Component {
    state = {
        id: 0,
        skillName: ''
    }

    onChange = (e) => {
        this.setState({
            skillName: e.target.value
        });
    }

    componentDidMount() {
        if (this.props.skill) {
            this.setState({ id: this.props.skill.id, skillName: this.props.skill.skillName });
        }
    }

    submitEdit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:18096/api/CandidateSkill/${this.state.id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id,
                skillName: this.state.skillName
            })
        })
            .then(response => response.json())
            .then(skill => {
                this.props.toggle();
                this.props.updateSkillIntoState(skill);
            })
            .catch(err => console.log(err));
    }

    submitAdd = (e) => {
        e.preventDefault();
        fetch('http://localhost:18096/api/CandidateSkill/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id,
                skillName: this.state.skillName
            })
        })
            .then(response => response.json())
            .then(skill => {
                this.props.toggle();
                this.props.addSkillToState(skill);
            })
    }

    render() {
        let button = '';
        if (this.props.isNew) {
            button = <Button color="success" type="submit">Add skill</Button>;
        }
        else {
            button = <Button color="success" type="submit" >Edit skill</Button>;
        }
        return (
            <div>
                <Form onSubmit={this.props.skill ? this.submitEdit : this.submitAdd}>
                    <FormGroup>
                        <Label for="name">Skill name:</Label>
                        <Input type="text" name="skillName" onChange={this.onChange} value={this.state.name === null ? '' : this.state.skillName}></Input>
                    </FormGroup>
                    
                    {button}
                </Form>
            </div>
        )
    }
}