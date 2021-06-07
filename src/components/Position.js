import { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Position extends Component {
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
            <Card.Title className="d-flex justify-content-center mb-3">
                <span className={this.positionClass(this.props.position)}>
                    Currently in {this.positionText(this.props.position)}
                </span>
            </Card.Title>
        )
    }
}

export default Position;