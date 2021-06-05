import { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
// import { setCurrentUser } from '../actions/userAuth';

class Question extends Component {
    // selectUser = (e) => {
    //     e.preventDefault()
    //     const { dispatch, id } = this.props
    //     dispatch(setCurrentUser({ id }))
    // }

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
                        <Card.Header className="text-center mt-2 secondary"><h4>Would You Rather?</h4></Card.Header>
                        <Card.Text as="div">
                            <ListGroup>
                                <ListGroup.Item>
                                    <Row>
                                        <Col sm={9} className="my-1">
                                            <h5 className="text-success">
                                                A: {this.props.currentQuestion.optionOne.text}
                                            </h5>
                                        </Col>
                                        <Col sm={3} className="my-1">
                                            <Button variant="primary" className="rounded mx-auto d-block" onClick="">VOTE</Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col sm={9} className="my-1">
                                            <h5 className="text-success">
                                                B: {this.props.currentQuestion.optionTwo.text}
                                            </h5>
                                        </Col>
                                        <Col sm={3} className="my-1">
                                            <Button variant="primary" className="rounded mx-auto d-block" onClick="">VOTE</Button>
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

function mapStateToProps ({ questions, userAuth }, {id}) {
    const currentQuestion = questions[id];
    return {
        currentQuestion: currentQuestion,
        userAuth: userAuth /*TODO needeD? */
    }
}

export default connect(mapStateToProps)(Question);