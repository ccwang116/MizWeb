import React from "react";
import { Card } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Quiz({ field, setField, result, handleSubmit }) {
  return (
    <div className="mt-1 text-center d-flex align-items-center flex-column">
      <Form onSubmit={handleSubmit} className="w-50 mb-5">
        <Card className="mb-5">
          <Card.Header>
            <Card.Title>Input</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form.Group controlId="formGridText">
              {/* <Form.Label>input</Form.Label> */}
              <Form.Control
                type="text"
                name="input"
                placeholder="Enter input"
                value={field}
                onChange={(e) => setField(e.target.value)}
                as="textarea"
                style={{ minHeight: "90px" }}
              />
            </Form.Group>
          </Card.Body>
        </Card>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Card className="w-50 mb-5">
        <Card.Header>
          <Card.Title>Answer</Card.Title>
        </Card.Header>
        <Card.Body>{result}</Card.Body>
      </Card>
    </div>
  );
}

export default Quiz;
