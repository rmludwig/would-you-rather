import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
//import LoadingBar from 'react-redux-loading'
import '../App.css';
import { fetchAllAppData } from '../actions/shared';
import UserSelection from "./UserSelection";
import QuestionView from "./QuestionView";
import QuestionsList from "./QuestionsList";
import Leaderboard from "./Leaderboard";
import AddQuestion from "./AddQuestion";
import Header from "./Header";



class App extends Component {
    componentDidMount () {
        this.props.dispatch(fetchAllAppData());
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <Container fluid className="container-fix">
                        <Header />
                        {this.props.showUserSelect === true
                            ? <UserSelection />
                            : <div>
                                <Route path='/' exact component={QuestionsList} />
                                <Route path='/questions/:question_id' component={QuestionView} />
                                <Route path='/add' component={AddQuestion} />
                                <Route path='/leaderboard' component={Leaderboard} />
                            </div>
                        }
                    </Container>
                </Fragment>
          </Router>
        )
    }
}

function mapStateToProps ({ userAuth }) {
    return {
        showUserSelect: userAuth === null
    }
}

export default connect(mapStateToProps)(App);