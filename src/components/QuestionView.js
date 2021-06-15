import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

import QuestionAnswered from './QuestionAnswered';
import QuestionVote from './QuestionVote';
import NotFound from './NotFound';

class Question extends Component {
    render() {
        const { user } = this.props;
        if (user === null) {
            return (
                <span>
                    Unknown User
                </span>
            )
        }
        else if (this.props.questionNotFound) {
            return <NotFound />
        }
        else {
            return (
                <Card border="info" className="mx-md-auto mt-5 mx-sm-2" style={{ "maxWidth": "50rem", margin: "2rem"}}>
                    <Card.Body className="pt-0">
                        <Card.Title className="text-center text-dark mt-2 bg-info mb-0 p-2">{user.name} has asked...</Card.Title>
                        <hr className="mt-0" />
                        <Card.Text as="div">
                            <Row>
                                <Col sm={4} md={3} className="d-flex justify-content-center">
                                    <div style={{height: "180px", width:" 180px", overflow: "hidden"}}>
                                        <Image src={user.avatarURL} className="mx-auto d-block"/>
                                    </div>
                                </Col>
                                <Col sm={8} md={9}>
                                    <ListGroup>
                                        <ListGroup.Item className="text-center font-weight-bold"><h4>Would you rather?</h4></ListGroup.Item>
                                        {this.props.preview &&
                                        <ListGroup.Item>
                                            <Row>
                                                <Col className="my-1">
                                                    <h5 className="text-success text-center">
                                                        "{this.props.currentQuestion.optionOne.text}"
                                                        <span className="text-muted"> or </span>
                                                        "{this.props.currentQuestion.optionTwo.text}"
                                                    </h5>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="my-1 d-flex justify-content-center">
                                                    <Link to={`/questions/${this.props.currentQuestion.id}`} >
                                                        <Button variant="primary">
                                                            View Question
                                                        </Button>
                                                    </Link>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                        }
                                        {this.props.preview === false &&
                                        <ListGroup.Item>
                                            <Row>
                                                <Col sm={9} className="my-1">
                                                    <h5 className="text-success">
                                                        A: {this.props.currentQuestion.optionOne.text}
                                                    </h5>
                                                </Col>
                                                {this.props.answered === false
                                                    ? <QuestionVote id={this.props.currentQuestion.id} option="optionOne"/>
                                                    : <QuestionAnswered answered={this.props.answered} option="optionOne" />
                                                }
                                            </Row>
                                            {this.props.answered !== false &&
                                                <ProgressBar striped variant="primary" max={this.props.userCount} now={this.props.votesOne} label={
                                                    `${this.props.votesOne} / ${this.props.userCount} or ${this.props.percentOne}% voted`
                                                } />
                                            }
                                        </ListGroup.Item>
                                        }
                                        {this.props.preview === false &&
                                        <ListGroup.Item>
                                            <Row>
                                                <Col sm={9} className="my-1">
                                                    <h5 className="text-success">
                                                        B: {this.props.currentQuestion.optionTwo.text}
                                                    </h5>
                                                </Col>
                                                {this.props.answered === false
                                                    ? <QuestionVote id={this.props.currentQuestion.id} option="optionTwo"/>
                                                    : <QuestionAnswered answered={this.props.answered} option="optionTwo" />
                                                }
                                            </Row>
                                            {this.props.answered !== false &&
                                                <ProgressBar striped variant="primary" max={this.props.userCount} now={this.props.votesTwo} label={
                                                    `${this.props.votesTwo} / ${this.props.userCount} or ${this.props.percentTwo}% voted`
                                                } />
                                            }
                                        </ListGroup.Item>
                                        }
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )
        }
    }
}

function mapStateToProps ({ questions, users, userAuth }, props) {
    const question_id = props.match ? props.match.params.question_id : null;

    if (! (question_id in questions) && ! props.id) {
        console.log("BAD QUESTION!!! ID=", question_id)
        return {questionNotFound: true}
    }
    else {
        const preview = props.preview ? true : false;
        const currentQuestion = question_id ? questions[question_id] : questions[props.id];
        const answered = users[userAuth.id].answers.hasOwnProperty(currentQuestion.id) ? users[userAuth.id].answers[currentQuestion.id] : false;
        const votesOne = currentQuestion.optionOne.votes.length;
        const votesTwo = currentQuestion.optionTwo.votes.length;
        const userCount = Object.keys(users).length;
        const percentOne = Math.floor((votesOne * 100) / userCount );
        const percentTwo = Math.floor((votesTwo * 100) / userCount );

        return {
            questionNotFound: false,
            currentQuestion,
            preview,
            answered: answered,
            user: users[userAuth.id],
            votesOne,
            votesTwo,
            userCount,
            percentOne,
            percentTwo
        }
    }
}

export default connect(mapStateToProps)(Question);