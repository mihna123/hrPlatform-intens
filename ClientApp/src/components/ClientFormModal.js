import React, { Component } from 'react';
import { Button, Modal, ModalHeader,ModalBody } from 'reactstrap';
import ClientForm from './ClientForm';

export default class ClientFormModal extends Component {
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
        let title = 'Edit Job Candidate';
        let button = '';
        if (isNew) {
            title = 'Add Job Candidate';
            button = <Button
                color="success"
                style={{ minWidth: "200px" }}
                onClick={this.toggle}>Add</Button>;
        }
        else {
            button = <Button
                color="primary" 
                onClick= {this.toggle} >Edit</Button>;
        }

        return (
            <div>
                {button}
                <Modal isOpen={this.state.open} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
                    <ModalBody>
                        <ClientForm
                            toggle={this.toggle}
                            isNew={this.props.isNew}
                            updateClientIntoState={this.props.updateClientIntoState}
                            addClientToState={this.props.addClientToState}
                            client={this.props.client}
                        />
                    </ModalBody>
                </Modal>
            </div>
        )
    }

    
}