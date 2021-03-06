import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { answerOptionOne, answerOptionTwo } from '../actions/questions';


class QuestionVote extends Component {
    vote = (e) => {
        e.preventDefault()
        const { dispatch, id, userAuth, answer } = this.props
        if (answer === 'optionOne') {
            dispatch(answerOptionOne({ id, userAuth, answer}));
        }
        else {
            dispatch(answerOptionTwo({ id, userAuth, answer}));
        }
    }

    render() {
        return (
            <Col sm={3} className="d-flex justify-content-center my-1">
                <Button variant="primary" style={{height: "2.25rem"}} className="rounded mx-auto d-block" onClick={this.vote}>
                    VOTE
                </Button>
            </Col>
        )
    }
}

function mapStateToProps ({ userAuth }, { id, option }) {
    return {
        id,
        userAuth,
        answer: option
    }
}

export default withRouter(connect(mapStateToProps)(QuestionVote));