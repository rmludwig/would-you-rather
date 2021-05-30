import { Component } from 'react';
import { connect } from 'react-redux';

class UserSelection extends Component {
  render() {
    return (
      <div>
        <h3 className='center'>UserSelection</h3>
        <ul>
          {this.props.allUserIds.map((id) => (
            <li key={id}>
              Question: {id}
            </li>
          ))}
        </ul>
      </div>
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