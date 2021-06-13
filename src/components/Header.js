import { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Link, withRouter } from 'react-router-dom';
import logo from '../logo.svg';
import { logoutCurrentUser } from '../actions/userAuth';

class Header extends Component {
    logoutUser = (e) => {
        e.preventDefault()
        const { dispatch} = this.props
        dispatch(logoutCurrentUser())
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="md">
                <Navbar.Brand style={{"width": "55px"}}>
                    <img src={logo} className="App-logo" alt="WYR" style={{"minWidth": "55px"}}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                    <Nav text="light" className="mr-auto">
                        <Link to={`/leaderboard`} className="nav-link">Leader Board</Link>
                        <Link to={`/`} className="nav-link">Questions</Link>
                        <Link to={`/add`} className="nav-link">Add Question</Link>
                    </Nav>
                    <Nav text="light">
                        {this.props.selectedUser !== null
                            ? <Navbar.Text>
                                <Image variant="top" src={this.props.selectedUser ? this.props.selectedUser.avatarURL : ""} alt="User avatar" className="rounded mx-2 avatar-img-sm"/>
                                <span className="font-weight-bold text-uppercase text-success">{this.props.selectedUser ? this.props.selectedUser.name : ""}</span>
                            </Navbar.Text>
                            : ''
                        }
                        {this.props.hideUserLogout === true
                            ? <Nav.Link href="#" disabled>Select User Below</Nav.Link>
                            : <Button variant="warning" className="nav-btn-pad-side" style={{ maxWidth: "5rem"}} onClick={this.logoutUser}>Logout</Button>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

function mapStateToProps ({ users, userAuth }) {
    const selectedUser = userAuth === null ? null : users[userAuth.id];
    return {
        selectedUser: selectedUser,
        hideUserLogout: userAuth === null
    }
}

export default withRouter(connect(mapStateToProps)(Header));