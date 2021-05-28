import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux';
import { fetchAllAppData } from '../actions/shared';

class App extends Component {
    componentDidMount () {
        this.props.dispatch(fetchAllAppData());
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    Starter Code
                    </p>
                </header>
            </div>
        )
    }
}

export default connect()(App);