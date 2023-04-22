import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import SkillDataTable from './SkillDataTable';
import SkillFormModal from './SkillFormModal';

export default class HomeSkill extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        this.getSkillItems();
    }

    getSkillItems = () => {
        fetch(`http://localhost:18096/api/CandidateSkill/`, {
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

    updateSkillIntoState = (skill) => {
        let update = this.state.items.filter(item => item.id != skill.id);
        update = [...update, skill];
        this.setState({
            items: update
        });
    }

    addSkillToState = (skill) => {
        this.setState(prev => ({
            items: [...prev.items, skill]
        }));
    }

    updateSkillState = () => {
        this.getSkillItems();
    }

    deleteSkillItemFromState = (id) => {
        let update = this.state.items.filter(item => item.id != id);
        this.setState({
            items: update
        });
    }

    render() {
        return (
            <div >
                <Container style={{ paddingTop: "30px" }}>
                    <Row>
                        <Col>
                            <h4 style={{
                                textAlign: 'center',
                                paddingBottom: '30px'
                            }}>Skills</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <SkillDataTable
                                items={this.state.items}
                                updateState={this.updateSkillState}
                                deleteItemFromState={this.deleteSkillItemFromState}
                                updateSkillIntoState={this.updateSkillIntoState} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <SkillFormModal
                                isNew={true}
                                addSkillToState={this.addSkillToState} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}