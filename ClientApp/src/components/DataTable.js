import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import ClientFormModal from './ClientFormModal';

export default class DataTable extends Component {
    deleteItem = (id) => {
        let confirmDelete = window.confirm("Do you realy want to delete this client?");
        if (confirmDelete) {
            fetch(`http://localhost:18096/api/JobCandidate/${id}`, {
                method: 'delete',
                headers: {
                    "Content-Type": "application/json"
                }

            }).then(response => {
                this.props.deleteItemFromState(id);
            }).catch(err => console.log(err));
        }
    }

    render() {
        const items = this.props.items;

        return (
            <div>
                <Table striped style={{border: '2px solid grey', }}>
                    <thead className="thead-dark">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Last name</th>
                            <th>Date of birth</th>
                            <th>Contact Number</th>
                            <th>email</th>
                            <th style={{ textAlign: 'center' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items == null | items.length <= 0 ?
                            <tr>
                                <td colSpan="7" align="center" ><b>No clients yet</b></td>
                            </tr> :
                            items.map(item => (
                                <tr key={item.id}>
                                    <th scope="row">
                                        {item.id}
                                    </th>
                                    <td>{item.name}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.dateOfBirth}</td>
                                    <td>{item.contactNumber}</td>
                                    <td>{item.email}</td>
                                    <td align="center">
                                        <div className="d-flex justify-content-between">
                                            <ClientFormModal
                                                client={item}
                                                isNew={false}
                                                updateClientIntoState={this.props.updateClientIntoState}
                                            />
                                            <Button style={{ marginLeft: "5px" }} onClick={() => this.deleteItem(item.id)}>Delete</Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}