import { Component } from 'react';
import Card from 'react-bootstrap/Card';

class NotFound extends Component {
    render() {
        return (
            <Card style={{ maxWidth: '20rem' }} border="danger" bg="danger" className="mx-auto mt-5">
            <Card.Img variant="top" style={{ background: "white" }} className="px-5 pt-5 pb-3" src={"/Img/404.png"} alt="404 Not Found" />
            <Card.Body className="p-0">
                <Card.Title className="text-center m-3">Question Not Found</Card.Title>
                <Card.Text className="text-center bg-light p-2">
                    This 404 not found error indicates that the question ID passed in the URL is not found in the questions inventory.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            </Card>
        )
    }
}

export default NotFound;