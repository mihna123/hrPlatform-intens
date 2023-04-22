import React, { Component } from 'react';
import { Input,Button,InputGroup,InputGroupAddon } from 'reactstrap';

export default class SearchBar extends Component{
    state = {
        searchprompt: ''
    }

    handleSearch = () => {
        this.props.updateClientState(this.state.searchprompt);        
    }

    render() {
        return (
            <div>
                <InputGroup>
                    <Input
                        placeholder="Search"
                        value={this.state.searchprompt}
                        onChange={(event) => this.setState({ searchprompt: event.target.value })}                        
                    />
                    <InputGroupAddon addonType="append">
                        <Button color="primary" onClick={this.handleSearch}>Search</Button>
                    </InputGroupAddon>
                </InputGroup>
                <br/>
            </div>
        )
    }
}