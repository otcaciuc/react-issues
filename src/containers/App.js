import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.css'
import './App.css';

import IssueList from '../components/IssuesList';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <Header as="h1">React Project Issues List</Header>
                </div>
                <Container>
                    <IssueList />
                </Container>
            </div>
        );
    }
}

export default App;
