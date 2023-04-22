import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import ClientFormModal from './ClientFormModal';
import DataTable from './DataTable';
import SearchBar from './SearchBar';



export default class Home extends Component {
    state = {
        items: []
    }
    componentDidMount() {
        this.getItems();
    }

    getItems = () => {
        fetch(`http://localhost:18096/api/JobCandidate/`, {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(result => {
                this.setState({ items: result });
            })
            .catch(err => console.log(err));
    }

    updateClientState = (prompt) => {
        fetch(`http://localhost:18096/api/JobCandidate/search/${prompt}`, {
            method: 'get',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(result => {
                
                this.setState({items: result })
                
                
            })
            .catch(err => console.log(err));
    }

    updateClientIntoState = (client) => {
        let update = this.state.items.filter(item => item.id != client.id);
        update = [...update, client];
        this.setState({
            items: update
        });
    }

    

    addClientToState = (client) => {
        this.setState(prev => ({
            items: [...prev.items, client]
        }));
    }

    

    updateState = (id) => {
        this.getItems();
    }

    

    deleteItemFromState = (id) => {
        let update = this.state.items.filter(item => item.id != id);
        this.setState({
            items: update
        });
    }

    

    render() {
            return (
                <div>
                    <Container style={{
                        paddingTop: "30px"
                    }}>
                        <Row>
                            <Col>
                                <h4 style={{
                                    textAlign: 'center',
                                    paddingBottom: '30px'
                                }}>Candidates</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <SearchBar updateClientState={this.updateClientState} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <DataTable
                                    items={this.state.items}
                                    updateState={this.updateState}
                                    deleteItemFromState={this.deleteItemFromState}
                                    updateClientIntoState={this.updateClientIntoState} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ClientFormModal
                                    isNew={true}
                                    addClientToState={this.addClientToState} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
    }
}