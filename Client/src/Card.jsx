import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import './Card.css'

const ArticleCard = ({ title, description, author, rating, image }) => (
  <Card>
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span className='date'>{description}</span>
      </Card.Meta>
      <Card.Description>
        {author}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Icon name='star' className='colorStar'/>{rating}
    </Card.Content>
  </Card>
);

export default ArticleCard;
