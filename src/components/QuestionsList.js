import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import QuestionView from './QuestionView';
import Card from 'react-bootstrap/Card';

class QuestionsList extends Component {
    render() {
        return (
            <Fragment>
                <Card style={{ margin: "3rem"}}>
                    <Card.Body>
                        <Tabs defaultActiveKey="unanswered" id="uncontrolled-tab-example">
                            <Tab eventKey="unanswered" title="Unanswered">
                                {this.props.unansweredIdsSorted.map((id) => (
                                    <QuestionView key={id} id={id} preview/>
                                ))}
                            </Tab>
                            <Tab eventKey="answered" title="Answered">
                                {this.props.answeredIdsSorted.map((id) => (
                                    <QuestionView key={id} id={id} preview/>
                                ))}
                            </Tab>
                        </Tabs>
                    </Card.Body>
                </Card>
            </Fragment>
        )
    }
}

function mapStateToProps ({ questions, userAuth }) {
    const answeredIdsSorted = Object.keys(questions).filter( (id) =>
        questions[id].optionOne.votes.includes(userAuth.id) || questions[id].optionTwo.votes.includes(userAuth.id)
    )
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp);
    const unansweredIdsSorted = Object.keys(questions).filter( (id) =>
        questions[id].optionOne.votes.includes(userAuth.id) === false && questions[id].optionTwo.votes.includes(userAuth.id) === false
    )
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp);

    return {
        answeredIdsSorted,
        unansweredIdsSorted
    }
}

export default connect(mapStateToProps)(QuestionsList);