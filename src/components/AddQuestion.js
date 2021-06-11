import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { addPollQuestion } from '../actions/questions';

class AddQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        redirect: false
    }

    formInputHandlerOne = (e) => {
        const optionOne = e.target.value
        this.setState(() => ({
            optionOne
        }))
    }

    formInputHandlerTwo = (e) => {
        const optionTwo = e.target.value
        this.setState(() => ({
            optionTwo
        }))
    }

    pollSubmit = (e) => {
        e.preventDefault()
        const { optionOne, optionTwo } = this.state
        const { dispatch, user } = this.props

        dispatch(addPollQuestion({author: user.id, optionOneText: optionOne, optionTwoText: optionTwo }))

        this.setState(() => ({
            redirect: true,
        }))
    }

    render() {
        const { optionOne, optionTwo, redirect } = this.state

        if (redirect === true) {
            return <Redirect to='/' />
        }

        return (
            <div className="mx-4">
                <Row className="row-pad-top row-pad-side">
                    <Col className="d-flex justify-content-center">
                        <h1 className='center'>Add New Question</h1>
                    </Col>
                </Row>
                <Card border="success" style={{ maxWidth: "40rem", minWidth: "18rem"}} className="mx-auto my-4">
                    <Card.Body className="pt-0">
                        <Card.Header className="text-center mt-2 secondary">
                            <h4>Would someone rather:</h4>
                        </Card.Header>
                        <Card.Text as="div">
                            <Form className="my-2" onSubmit={this.pollSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Text className="text-muted mb-3">
                                        Enter your question options below.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter option one"
                                        value={optionOne}
                                        onChange={this.formInputHandlerOne}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Text className="text-muted mb-3 text-center">
                                        <h6>OR</h6>
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter option two"
                                        value={optionTwo}
                                        onChange={this.formInputHandlerTwo}
                                    />
                                </Form.Group>
                                <Form.Group className="d-flex justify-content-center">
                                    <Button
                                        variant="success"
                                        type="submit"
                                        disabled={this.state.optionOne.length === 0 || this.state.optionTwo.length === 0}
                                    >
                                        Submit
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

function mapStateToProps ({ users, userAuth }) {
    return {
        user: users[userAuth.id]
    }
}

export default connect(mapStateToProps)(AddQuestion);