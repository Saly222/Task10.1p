import React from 'react';
import { Header, Button } from 'semantic-ui-react';
import CardList2 from './CardList2'; 
import { faker } from '@faker-js/faker';
import './Card.css';

const generateTutorials = (count = 3) => {
  return Array.from({ length: count }, () => ({
    title: faker.lorem.words(3), 
    description: faker.lorem.sentence(), 
    author: faker.name.fullName(),
    rating: faker.datatype.number({ min: 1, max: 5 }), 
    image: faker.image.imageUrl(100, 100, 'nature', true),
  }));
};

const TutorialsList = () => {
  const tutorials = generateTutorials(3); 

  return (
    <div>
      <br></br>
      <Header as='h2' size = 'huge' textAlign='center'>Featured Tutorials</Header>
      <CardList2 tutorials={tutorials} />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button color='grey'>See all tutorials</Button>
        <br></br>
      </div>
    </div>
  );
};

export default TutorialsList;