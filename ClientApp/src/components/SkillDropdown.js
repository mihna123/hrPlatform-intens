import React, { Component,Fragment } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

export default class SkillDropdown extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState(prev => ({ isOpen: !prev.isOpen }));
    }

    render() {
        const skills = this.props.skills;
        return (
            <div>
                <Dropdown isOpen={this.state.isOpen} toggle={this.toggle} direction="down">
                    <DropdownToggle caret>Show</DropdownToggle>
                    <DropdownMenu>
                        {skills == null || skills.length <= 0 ?
                            <DropdownItem>No skills yet</DropdownItem> :
                            skills.map(skill => {
                                return (
                                    <Fragment key={ skill.id }>
                                        <DropdownItem text>{skill.skillName}</DropdownItem>
                                        <DropdownItem divider />
                                    </Fragment>
                                )
                            })}
                    </DropdownMenu>
                </Dropdown>
                
            </div>
        )
    }
}