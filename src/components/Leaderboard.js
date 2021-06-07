import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserStats from './UserStats';

class Leaderboard extends Component {
    render() {
        return (
            <Fragment>
                <Row className="row-pad-top row-pad-side">
                    <Col className="d-flex justify-content-center">
                        <h1 className='center'>Leaderboard</h1>
                    </Col>
                </Row>
                <div className="px-4">
                {this.props.sortedUsers.map((id, index) => (
                    <UserStats key={id} id={id} position={index}/>
                ))}
                </div>
        </Fragment>
        )
    }
}

function mapStateToProps ({ users }) {
    return {
        sortedUsers: Object.keys(users)
            .sort((a,b) =>
                (Object.keys(users[b].answers).length + users[b].questions.length) -
                (Object.keys(users[a].answers).length + users[b].questions.length))
    }
}

export default connect(mapStateToProps)(Leaderboard);