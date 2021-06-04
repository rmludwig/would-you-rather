import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import User from './User';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class UserSelection extends Component {
    render() {
        return (
            <Fragment>
                <Row className="row-pad-top">
                    <Col className="d-flex justify-content-center">
                        <p>Select a user to get started. Who do you want to be?</p>
                    </Col>
                </Row>
                <Row className="row-pad-top">
                    {this.props.allUserIds.map((id) => (
                        <Col lg={4} md={6} sm={12}  className="justify-content-center mt-4" key={id}>
                            <User id={id} />
                        </Col>
                    ))}
                </Row>
            </Fragment>
        )
    }
}

function mapStateToProps ({ users }) {
    // TODO sort order for users?
    return {
        allUserIds: Object.keys(users)
            .sort((a,b) => users[b].id - users[a].id)
    }
}

export default connect(mapStateToProps)(UserSelection);