import { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Position from "./Position";

class UserStats extends Component {
    render() {
        return (
            <Card style={{ margin: "3rem", maxWidth: "50rem"}} className="mx-auto" border="primary">
                <Card.Body>
                    <Card.Header className="d-flex justify-content-center text-dark mb-2 rounded">
                        <h3 className="font-weight-bold">{this.props.users[this.props.id].name}</h3>
                    </Card.Header>
                    <Card.Text as={"div"}>
                        <CardGroup className="text-center rounded">
                        <Card className="mx-auto">
                            <Card.Body>
                            <Card.Img variant="top" src={this.props.users[this.props.id].avatarURL} alt="User avatar" className="rounded mx-auto d-block avatar-img"/>
                            </Card.Body>
                        </Card>
                        <Card className="mx-auto">
                            <Card.Body>
                                <Position position={this.props.position} />
                                <Card.Text as={"div"}>{/*d-flex justify-content-between*/}
                                <Row>
                                    <Col sm={12} md={8} className="custom-left-center-text">Answers</Col>
                                    <Col sm={12} md={4} className="custom-right-center-text">{this.props.answers}</Col>
                                </Row>
                                <Row>
                                    <Col sm={12} md={8} className="custom-left-center-text">Questions</Col>
                                    <Col sm={12} md={4} className="custom-right-center-text">4{this.props.questions}</Col>
                                </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mx-auto">
                            <Card.Body className="p-0">
                                <Card.Header className="secondary font-weight-bold bg-primary text-light">Score</Card.Header>
                                <Card.Text as={"div"} className="pt-4">
                                    <h1>{this.props.score}</h1>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </CardGroup>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

function mapStateToProps ({ users }, {id, position}) {
    const questions = users[id].questions.length;
    const answers = Object.keys(users[id].answers).length;
    const score = questions + answers;
    return {
        id,
        position,
        score,
        answers,
        questions,
        users
    }
}

export default connect(mapStateToProps)(UserStats);