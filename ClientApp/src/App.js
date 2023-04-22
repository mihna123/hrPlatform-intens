import React, { Component } from 'react';
import './custom.css'
import AppHeader from './components/AppHeader.js';
import Home from './components/Home';
import HomeSkill from './components/HomeSkill';


export default class App extends Component {
  static displayName = App.name;
    state = {
        isClient: true
    }

    skillClick = (e) => {
        e.preventDefault();
        this.setState({ isClient: false });
    }

    candidateClick = (e) => {
        e.preventDefault();
        this.setState({ isClient: true });
    }

    render() {
        let home = <Home/>;
        if (!this.state.isClient) {
            home = <HomeSkill/>
        }
        return (
            <div>
                <AppHeader
                    skillClick={this.skillClick}
                    candidateClick={this.candidateClick} />
                {home}
            </div>
        );
    }
}
