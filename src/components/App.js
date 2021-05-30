import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';
//import LoadingBar from 'react-redux-loading'
import logo from '../logo.svg';
import '../App.css';
import { fetchAllAppData } from '../actions/shared';
import UserSelection from "./UserSelection";
import Question from "./Question";
import QuestionsList from "./QuestionsList";
import Leaderboard from "./Leaderboard";
import AddQuestion from "./AddQuestion";


class App extends Component {
    componentDidMount () {
        this.props.dispatch(fetchAllAppData());
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <header className="App-header">
                        This is header
                    </header>

                    <div className='container'>
                        {/* TODO add nave here? */}
                        {//this.props.loading === true
                        1 === 2
                            ? null
                            : <div>
                                    <img src={logo} className="App-logo" alt="logo" />
                                    <p>
                                    Starter Code
                                    </p>
                                    <UserSelection />
                                    <Route path='/' exact component={QuestionsList} />
                                    <Route path='questions/:question_id' component={Question} />
                                    <Route path='/add' component={AddQuestion} />
                                    <Route path='/leaderboard' component={Leaderboard} />
                            </div>
                        }
                    </div>
                </Fragment>
          </Router>
        )
    }
}

export default connect()(App);