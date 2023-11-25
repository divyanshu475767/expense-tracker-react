import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './UpdateProfile.css'
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const ProfileUpdate = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handlePhotoURLChange = (e) => {
    setPhotoURL(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // Perform update logic using fullName and photoURL state values
    console.log('Full Name:', fullName);
    console.log('Photo URL:', photoURL);
   
    alert('profile updated successfully');
    navigate('/');
  };

  return (
    <Container>
        <p className='profile-para'>
         <span>Winners never quit and quitters never win</span>
         <span>Awesome , now complete your profile here and increase your chances of landing a job</span>
        </p>
      <h2 className="text-center mt-4">Update Profile</h2>
      <Form onSubmit={handleUpdate}>
        <Form.Group controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" value={fullName} onChange={handleFullNameChange} />
        </Form.Group>

        <Form.Group controlId="photoURL">
          <Form.Label>Profile Photo URL</Form.Label>
          <Form.Control type="text" placeholder="Enter profile photo URL" value={photoURL} onChange={handlePhotoURLChange} />
        </Form.Group>

        <Button variant="primary" type="submit" block className="mt-3">
          Update
        </Button>

        <NavLink to='/'>
        <Button variant="secondary" type="submit" block className="mt-3 cancel">
          Cancel
        </Button>
        </NavLink>
      </Form>
    </Container>
  );
};

export default ProfileUpdate;
