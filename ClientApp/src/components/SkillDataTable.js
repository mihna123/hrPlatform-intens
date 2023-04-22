import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import SkillFormModal from './SkillFormModal';


export default class SkillDataTable extends Component {
    deleteItem = (id) => {
        fetch(`http://localhost:18096/api/CandidateSkill/${id}`, {
            method: 'delete',
            headers: {
                "Content-Type": "application/json"
            }

        }).then(response => {
            this.props.deleteItemFromState(id);
        }).catch(err => console.log(err));
    }

    render() {
        const items = this.props.items;
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                
            }}>
                <Table striped style={{ width: '50%', border: '2px solid grey',  }}>
                    <thead className="thead-dark">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th style={{ textAlign: 'center' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items == null | items.length <= 0 ?
                            <tr>
                                <td colSpan="3" align="center" ><b>No skills yet</b></td>
                            </tr> :
                            items.map(item => (
                                <tr key={item.id}>
                                    <th scope="row">
                                        {item.id}
                                    </th>
                                    <td>{item.skillName}</td>
                                    <td align="center">
                                        <div className="d-flex justify-content-between">
                                            <SkillFormModal
                                                skill={item}
                                                isNew={false}
                                                updateSkillIntoState={this.props.updateSkillIntoState}
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