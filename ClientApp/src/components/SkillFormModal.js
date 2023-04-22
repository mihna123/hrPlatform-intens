import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import SkillForm from './SkillForm';


export default class SkillFormModal extends Component {
    state = {
        open: false
    }

    toggle = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }));
    }

    render() {
        let isNew = this.props.isNew;
        let title = 'Edit Skill';
        let button = '';
        if (isNew) {
            title = 'Add Skill';
            button = <Button
                color="success"
                style={{ minWidth: "200px" }}
                onClick={this.toggle}>Add</Button>;
        }
        else {
            button = <Button
                color="primary"
                onClick={this.toggle} >Edit</Button>;
        }

        return (
            <div>
                <div className="d-flex justify-content-center">
                    {button}
                </div>
                
                <Modal isOpen={this.state.open} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
                    <ModalBody>
                        <SkillForm
                            toggle={this.toggle}
                            isNew={this.props.isNew}
                            updateSkillIntoState={this.props.updateSkillIntoState}
                            addSkillToState={this.props.addSkillToState}
                            skill={this.props.skill}
                        />
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}