import { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { setCurrentUser } from '../actions/userAuth';

class User extends Component {
    selectUser = (e) => {
        e.preventDefault()
        const { dispatch, id } = this.props
        dispatch(setCurrentUser({ id }))
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
                <Card border="secondary" style={{ "minWidth": "18rem"}}>
                    <Card.Img variant="top" src={user.avatarURL} alt="User avatar" className="rounded mx-auto d-block avatar-img"/>
                    <Card.Body className="pt-0">
                        <Card.Title className="text-center">{user.name}</Card.Title>
                        <hr className="mt-0" />
                        <Card.Text as="div">
                            <Row className="mt-3">
                                <Col xs={4} sm={4} md={4} lg={6}>User ID :</Col>
                                <Col xs={8} sm={8} md={8} lg={6}>{user.id}</Col>
                            </Row>
                            <Row className="mt-2">
                                <Col xs={4} sm={4} md={4} lg={6}>Activity :</Col>
                                <Col xs={8} sm={8} md={8} lg={6}>{(user.questions.length + Object.keys(user.answers).length)}</Col>
                            </Row>
                        </Card.Text>
                        <Button variant="primary" className="rounded mx-auto d-block mt-3" onClick={this.selectUser}>Select User</Button>
                    </Card.Body>
                </Card>
            )
        }
    }
}

function mapStateToProps ({ users }, {id}) {
    const user = users[id];
    return {
        user: user ? user : null
    }
}

export default connect(mapStateToProps)(User);