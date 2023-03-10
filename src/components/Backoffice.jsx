import { Row, Col } from "react-bootstrap/esm";
import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useState, useEffect, useRef } from "react";
import { ImAttachment } from 'react-icons/im'


const Backoffice = () => {
    const title = document.querySelector("#movie-input-title")
    const year = document.querySelector("#movie-input-year")
    const imdbID = document.querySelector("#movie-input-imdbID")
    const type = document.querySelector("#movie-input-type")

    const [file, setFile] = useState();
    const [isError, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")
    const inputRef = useRef(null);

    function handleFile(event) {
        const img = event.target.files[0];
        const imgData = new FormData();
        imgData.append("poster", img);
        setFile(imgData)
        console.log(event.target.files[0]);
    }

    const handleClick = () => {
        inputRef.current.click();
    };

    const postMedia = async () => {
        try {
            if (file) {
                const newMedia = {
                    title: title.value,
                    year: year.value,
                    imdbID: imdbID.value,
                    type: type.value,
                    poster: "",
                };
                const res = await fetch(process.env.REACT_APP_BE_DEV_URL + "/medias", {
                    method: "POST",
                    body: JSON.stringify(newMedia),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (res.ok) {
                    const resMessage = await res.json()
                    const imdbID = resMessage.imdbID;
                    console.log(imdbID)
                    const res2 = await fetch(process.env.REACT_APP_BE_DEV_URL + "/medias/" + imdbID + "/poster", {
                        method: "POST",
                        body: file,
                    });
                    if (res2.ok) {
                        setFile(null);
                        title.value = "";
                        year.value = "";
                        type.value = "";
                    } else {
                        setErrorMessage("Error about your poster!")
                        setError(true)
                    }
                }
                else {
                    setErrorMessage("Error about your media content!")
                    setError(true)
                }
            } else {
                setErrorMessage("You should pick a poster for a new media!")
                setError(true)
            }
        } catch (error) {
            setErrorMessage("ERROR :D")
            setError(true)
        }
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
                        <Form.Control style={{ display: "none" }} onChange={handleFile} type="file" name="file" ref={inputRef} />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col sm={2} md={2} lg={2}>
                    <Button variant="primary" onClick={handleClick}><ImAttachment></ImAttachment>Add Photo</Button>
                </Col>
                <Col sm={2} md={2} lg={2}>
                    <Button variant="primary" onClick={postMedia}>Submit</Button>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col sm={2} md={2} lg={6}>

                </Col>
            </Row>


        </Container>
    )
}

export default Backoffice