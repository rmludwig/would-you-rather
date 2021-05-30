import { Component } from 'react';
import { connect } from 'react-redux';

class QuestionsList extends Component {
  render() {
    return (
      <div>
        <h3 className='center'>QuestionsList</h3>
        <ul>
          {this.props.allQuestionIds.map((id) => (
            <li key={id}>
              Question: {id}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ questions }) {
  return {
    allQuestionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(QuestionsList);