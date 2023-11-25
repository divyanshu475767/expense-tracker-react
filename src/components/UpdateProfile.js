import React, { useState, useContext, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./UpdateProfile.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import authContext from "../store/auth-context";

const ProfileUpdate = () => {
  const navigate = useNavigate();
  const authCtx = useContext(authContext);
  const tokenId = authCtx.token;

  const [fullName, setFullName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  useEffect(() => {
    async function getupdatedProfile() {
      const response = await axios({
        method: "get",
        url: "http://localhost:5000/getUpdatedProfile",
        headers: { Authorization: tokenId },
      });
      console.log(response);

      setFullName(response.data.name);
      setPhotoURL(response.data.profilelink);
    }

    getupdatedProfile();
  },[]);

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handlePhotoURLChange = (e) => {
    setPhotoURL(e.target.value);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    // Perform update logic using fullName and photoURL state values
    console.log("Full Name:", fullName);
    console.log("Photo URL:", photoURL);
    const response = await axios({
      method: "post",
      url: "http://localhost:5000/updateProfile",
      data: {
        name: fullName,
        profileLink: photoURL,
      },
      headers: { Authorization: tokenId },
    });
    console.log(response);
    alert(response.data);
    navigate('/');
  };

  return (
    <Container>
      <p className="profile-para">
        <span>Winners never quit and quitters never win</span>
        <span>
          Awesome , now complete your profile here and increase your chances of
          landing a job
        </span>
      </p>
      <h2 className="text-center mt-4">Update Profile</h2>
      <Form onSubmit={handleUpdate}>
        <Form.Group controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={handleFullNameChange}
          />
        </Form.Group>

        <Form.Group controlId="photoURL">
          <Form.Label>Profile Photo URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter profile photo URL"
            value={photoURL}
            onChange={handlePhotoURLChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" block="true" className="mt-3">
          Update
        </Button>

        <NavLink to="/">
          <Button
            variant="secondary"
            type="submit"
            block="true"
            className="mt-3 cancel"
          >
            Cancel
          </Button>
        </NavLink>
      </Form>
    </Container>
  );
};

export default ProfileUpdate;
