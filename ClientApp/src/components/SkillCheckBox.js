import React, { Component } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

export default class SkillCheckBox extends Component {

    state = {
        skills: []
    }

    componentDidMount() {
        fetch(`http://localhost:18096/api/CandidateSkill/`, {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(result => {
                this.setState({ skills: result });
            })
            .catch(err => console.log(err));
    }
    
    
    checkBoxCheck = (skill) => {
        const client = { ...this.props.client };
        console.log(client);
        /*fetch(`http://localhost:18096/api/jobCandidate/addSkill/${client.id}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(skill)
        })
            .then(response => response.json())
            .then(client => {
                this.props.updateClient(client);
            })
            .catch(err => console.log(err));
        */
        if (client.skills == null) {
            client.skills = [skill];
        } else {
            client.skills.push(skill);
        }
        this.props.updateClient(client);
    }
    
    checkBoxUnCheck = (skill) => {
        const client = { ...this.props.client };
        client.skills = client.skills.filter(x => x.id !== skill.id);
        this.props.updateClient(client);
    }
    
    isChecked = (id) => {
        const skills = this.props.client.skills;
        console.log(skills);
        let object = skills.find(x => x.id == id);
        if (object == null) {
            console.log("false");
            return false;
            
        } else {
            console.log("true");
            return true;
        }
    }
    
    render() {
        return (
            <div>{
                this.state.skills.map(skill => {
                    return (
                        <FormGroup key={skill.id } check>
                            <Input type="checkbox"
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        this.checkBoxCheck(skill);
                                    }
                                        
                                    else
                                        this.checkBoxUnCheck(skill);
                                }}
                                checked={this.isChecked(skill.id)}/>
                            <Label check>{skill.skillName}</Label>
                        </FormGroup>
                    )
                })
            }
            </div>
        )
    }
}