// src/components/HomePage.js
import React from 'react';
import { Header, Button } from 'semantic-ui-react';
import CardList from './CardList';

const articles = [
  {
    title: "React OR Vue",
    description: "A detailed comparison of React and Vue.",
    author: "John Doe",
    rating: 5,
    image: "https://picsum.photos/200/300"
  },
  {
    title: "NodeJS",
    description: "An introduction to NodeJS and its uses.",
    author: "Jane Doe",
    rating: 5,
    image: "https://picsum.photos/200/300"
  },
  {
    title: "React Hooks",
    description: "Understanding React Hooks and their benefits.",
    author: "Jim Doe",
    rating: 5,
    image: "https://picsum.photos/200/300"
  }
];

const ArticlesList = () => (
  <div>
    <Header as='h2' textAlign='center'>Featured Articles</Header>
    <CardList articles={articles} />
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Button color='grey'>See all articles</Button>
    </div>
  </div>
);

export default ArticlesList;
