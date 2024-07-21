import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card1({ image, title, text }) {
  return (
    <Card style={{ width: '18rem', marginBottom: '1rem', minHeight: '23rem'}}>
      <Card.Img variant="top" src={image} style={{ maxHeight: '160px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Card1;
