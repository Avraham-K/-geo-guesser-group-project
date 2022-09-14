import React, { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import axios from "axios";

function Admin() {
  const [Image, setImage] = useState();
  const [location, setLocation] = useState();
  const [isAdmin, setisAdmin] = useState(false);

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append("location", location);
      formData.append("locationImage", Image);

      const res = await axios.post("http://localhost:8080/admin", formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="admin-container">
      <h1 className="display-3">Admin Page</h1>
      <Form className="admin-add-pet-form">
        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="formBasicname">
            <Form.Label>Location</Form.Label>
            <Form.Control
              name="location"
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              placeholder="Location"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formImageFile" className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              name="image"
              onChange={handleImage}
            />
          </Form.Group>
        </Row>

        <button
          className="add-location-button"
          type="submit"
          onClick={handleSubmit}
        >
          Add Location
        </button>
      </Form>
    </div>
  );
}

export default Admin;
