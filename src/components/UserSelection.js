import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import User from './User';

class UserSelection extends Component {
    render() {
        return (
            <Fragment>
                <Row className="row-pad-top row-pad-side">
                    <Col className="d-flex justify-content-center">
                        <p>Select a user to get started. Who do you want to be?</p>
                    </Col>
                </Row>
                <Row className="row-pad-top row-pad-side">
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
    // TODO Change the sort order for users as needed
    return {
        allUserIds: Object.keys(users)
            .sort((a,b) => users[b].id - users[a].id)
    }
}

export default connect(mapStateToProps)(UserSelection);