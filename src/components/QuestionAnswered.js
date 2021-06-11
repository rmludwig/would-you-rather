import { Component } from 'react';
import Col from 'react-bootstrap/Col';

class QuestionAnswered extends Component {
    positionText = (position) => {
        switch(position) {
            case 0 :
                return "1st place"
            case 1 :
                return "2nd place"
            default :
                return "the running"
        }
    }

    positionClass = (position) => {
        switch(position) {
            case 0 :
                return "text-success"
            case 1 :
                return "text-info"
            default :
                return "text-secondary"
        }
    }

    render() {
        return (
            <Col sm={3} className="d-flex justify-content-center my-1">
                {this.props.answered === this.props.option &&
                    <h6><span className="rounded bg-success text-light p-1">Your Choice</span></h6>
                }
            </Col>
        )
    }
}

export default QuestionAnswered;




















