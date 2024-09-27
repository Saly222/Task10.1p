import React from 'react';
import Header from './Header';
import 'semantic-ui-css/semantic.min.css';
import Image from './introductionIMG';
import './App.css';
import ArticlesList from './ArticlesList';
import TutorialsList from './TutorialsList';
import Signup from './Signup';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header text="DEV@Deakin" />
      <Image />
      <ArticlesList />
      <TutorialsList />
      <br></br>
      <br></br>
      <br></br>
      <Signup />
      <br></br>
      <Footer/>
    </div>
  );
}

export default App;