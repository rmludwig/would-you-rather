import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import QuestionView from './QuestionView';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';

class QuestionsList extends Component {
    render() {
        return (
            <Fragment>
                <Row className="row-pad-top row-pad-side">
                    <Col className="d-flex justify-content-center">
                        <h1 className='center'>Questions</h1>
                    </Col>
                </Row>
                <div className="border border-bark rounded mx-md-auto mx-sm-3 mx-xs-3 my-5" style={{ maxWidth: "56rem"}}>
                    <Tabs defaultActiveKey="unanswered" id="uncontrolled-tab-example">
                        <Tab eventKey="unanswered" title="Unanswered" tabClassName="font-weight-bold">
                            {this.props.unansweredIdsSorted.map((id) => (
                                <QuestionView key={id} id={id} preview/>
                            ))}
                            {this.props.unansweredIdsSorted.length === 0 &&
                                <div className="text-center p-4">User {this.props.name} has no remaining unanswered questions. Add a new one above.</div>
                            }
                        </Tab>
                        <Tab eventKey="answered" title="Answered" tabClassName="font-weight-bold">
                            {this.props.answeredIdsSorted.map((id) => (
                                <QuestionView key={id} id={id} preview/>
                            ))}
                            {this.props.answeredIdsSorted.length === 0 &&
                                <div className="text-center p-4">User {this.props.name} has no answered questions.</div>
                            }
                        </Tab>
                    </Tabs>
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps ({ users, questions, userAuth }) {
    const answeredIdsSorted = Object.keys(questions).filter( (id) =>
        questions[id].optionOne.votes.includes(userAuth.id) || questions[id].optionTwo.votes.includes(userAuth.id)
    )
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp);
    const unansweredIdsSorted = Object.keys(questions).filter( (id) =>
        questions[id].optionOne.votes.includes(userAuth.id) === false && questions[id].optionTwo.votes.includes(userAuth.id) === false
    )
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp);
    const name = users[userAuth.id].name;

    return {
        answeredIdsSorted,
        unansweredIdsSorted,
        name
    }
}

export default connect(mapStateToProps)(QuestionsList);