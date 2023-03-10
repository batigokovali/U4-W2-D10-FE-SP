import { Row, Col } from "react-bootstrap/esm";
import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


const Backoffice = () => {
    const title = document.querySelector("#movie-input-title")
    const year = document.querySelector("#movie-input-year")
    const imdbID = document.querySelector("#movie-input-imdbID")
    const type = document.querySelector("#movie-input-type")

    const postMedia = async () => {

    }

    return (
        <Container className="text-white">
            <Row className="justify-content-center">
                <Col lg={6}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Movie Title</InputGroup.Text>
                        <Form.Control
                            placeholder="Enter Movie Title"
                            id="movie-input-title"
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg={6}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Movie Year</InputGroup.Text>
                        <Form.Control
                            placeholder="Enter Movie Year"
                            id="movie-input-year"
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg={6}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Movie imdbID</InputGroup.Text>
                        <Form.Control
                            placeholder="Enter Movie imdbID"
                            id="movie-input-imdbID"
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg={6}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Type</InputGroup.Text>
                        <Form.Control
                            placeholder="Enter Type"
                            id="movie-input-type"
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg={6}>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Control type="file" />
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="primary">Submit Media</Button>
        </Container>
    )
}

export default Backoffice