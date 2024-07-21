import React from 'react';
import Card1 from './card-2';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './card.style.scss';

function Cards() {
  const cardsData = [
    {
      image: '/img/1.jpg',
      title: 'Card Title 1',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      image: '/img/2.jpg',
      title: 'Card Title 2',
      text: 'Another example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      image: '/img/3.jpg',
      title: 'Card Title 3',
      text: 'More example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
        image: '/img/4.jpg',
        title: 'Card Title 4',
        text: 'More example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      image: '/img/5.jpg',
      title: 'Card Title 5',
      text: 'Even more example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
        image: '/img/6.jpg',
        title: 'Card Title 6',
        text: 'Even more example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
        image: '/img/7.jpg',
        title: 'Card Title 7',
        text: 'Even more example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
        image: '/img/8.jpg',
        title: 'Card Title 8',
        text: 'Even more example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
        image: '/img/9.jpg',
        title: 'Card Title 9',
        text: 'Even more example text to build on the card title and make up the bulk of the card\'s content.',
    },  
    {
      image: '/img/10.jpg',
      title: 'Card Title 10',
      text: 'Even more example text to build on the card title and make up the bulk of the card\'s content.',
  },
  {
      image: '/img/11.jpg',
      title: 'Card Title 1',
      text: 'Even more example text to build on the card title and make up the bulk of the card\'s content.',
  },
  {
      image: '/img/12.jpg',
      title: 'Card Title 12',
      text: 'Even more example text to build on the card title and make up the bulk of the card\'s content.',
  }, 
  ];

  return (
    <Container className="cards-container">
      <Row>
        {cardsData.map((card, index) => (
          <Col key={index} md={4}>
            <Card1 
              image={card.image}
              title={card.title}
              text={card.text}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cards;
