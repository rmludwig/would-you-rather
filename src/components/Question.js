import { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { answerOptionOne, answerOptionTwo } from '../actions/questions';

class Question extends Component {
    voteOne = (e) => {
        e.preventDefault()
        const { dispatch, id, userAuth } = this.props
        console.log("Called voteOne with ", dispatch, id);
        const answer = 'optionOne';
        dispatch(answerOptionOne({ id, userAuth, answer}))
    }

    voteTwo = (e) => {
        e.preventDefault()
        const { dispatch, id, userAuth } = this.props
        console.log("Called voteTwo with ", dispatch, id);
        const answer = 'optionTwo';
        dispatch(answerOptionTwo({ id, userAuth, answer}))
    }

    render() {
        const { user } = this.props;
        if (user === null) {
            return (
                <span>
                    Unknown User
                </span>
            )
        }
        else {
            return (
                <Card border="secondary" style={{ "minWidth": "18rem", margin: "2rem"}}>
                    <Card.Body className="pt-0">
                        <Card.Header className="text-center mt-2 secondary"><h4>Would You Rather? {this.props.currentQuestion.id} </h4></Card.Header>
                        <Card.Text as="div">
                            <ListGroup>
                                <ListGroup.Item>
                                    <Row>
                                        <Col sm={7} className="my-1">
                                            <h5 className="text-success">
                                                A: {this.props.currentQuestion.optionOne.text}
                                            </h5>
                                        </Col>
                                        <Col sm={5}  className="d-flex justify-content-center my-1">
                                        {this.props.answered === false
                                                ? <Button variant="primary" style={{height: "2.25rem"}} className="rounded mx-auto d-block"onClick={this.voteOne}>
                                                    VOTE
                                                </Button>
                                                : null
                                            }
                                            {this.props.answered === 'optionOne'
                                                ? <h6>
                                                    <span className="rounded bg-success text-dark p-1">
                                                        Your Choice
                                                    </span>
                                                </h6>
                                                : null
                                            }
                                            {/* TODO: fix the above to point to ONE!!!! */}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col sm={7} className="my-1">
                                            <h5 className="text-success">
                                                B: {this.props.currentQuestion.optionTwo.text}
                                            </h5>
                                        </Col>
                                        <Col sm={5} className="d-flex justify-content-center my-1">
                                            {this.props.answered === false
                                                ? <Button variant="primary" style={{height: "2.25rem"}} className="rounded mx-auto d-block"onClick={this.voteTwo}>
                                                    VOTE
                                                </Button>
                                                : null
                                            }
                                            {this.props.answered === 'optionTwo'
                                                ? <h6>
                                                    <span className="rounded bg-success text-dark p-1">
                                                        Your Choice
                                                    </span>
                                                </h6>
                                                : null
                                            }
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )
        }
    }
}

function mapStateToProps ({ questions, users, userAuth }, {id}) {
    const currentQuestion = questions[id];
    let answered = users[userAuth.id].answers.hasOwnProperty(id) ? users[userAuth.id].answers[id] : false;

    return {
        currentQuestion,
        answered: answered,
        userAuth: userAuth /*TODO needeD? */
    }
}

export default connect(mapStateToProps)(Question);