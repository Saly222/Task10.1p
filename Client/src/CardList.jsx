import React from 'react';
import { Card } from 'semantic-ui-react';
import ArticleCard from './Card';

const CardList = ({ articles }) => (
  <Card.Group itemsPerRow={3}>
    {articles.map((article, index) => (
      <ArticleCard key={index} {...article} />
    ))}
  </Card.Group>
);

export default CardList;
