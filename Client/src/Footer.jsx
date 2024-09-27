import React from 'react';
import { Grid, Segment, List, Header, Icon } from 'semantic-ui-react';
import './Footer.css'
const Footer = () => (

  <Segment inverted vertical style={{ padding: '2em 0em', backgroundColor: '#286B74'}}>
    <Grid divided inverted stackable>
      <Grid.Row>
      
        <Grid.Column width={4}>
          <Header inverted as='h4' size = 'large' content='Explore' />
          <List link inverted>
            <List.Item as='a'>Home</List.Item>
            <List.Item as='a'>Questions</List.Item>
            <List.Item as='a'>Articles</List.Item>
            <List.Item as='a'>Tutorials</List.Item>
          </List>
        </Grid.Column>
        
        
        <Grid.Column width={4}>
          <Header inverted as='h4' size = 'large' content='Support' />
          <List link inverted>
            <List.Item as='a'>FAQs</List.Item>
            <List.Item as='a'>Help</List.Item>
            <List.Item as='a'>Contact Us</List.Item>
          </List>
        </Grid.Column>


        <Grid.Column width={4}>
          <Header inverted as='h4' size = 'large' content='Stay Connected' />
          <List horizontal>
            <List.Item>
              <Icon name='facebook' size='large' link />
            </List.Item>
            <List.Item>
              <Icon name='twitter' size='large' link />
            </List.Item>
            <List.Item>
              <Icon name='instagram' size='large' link />
            </List.Item>
          </List>
        </Grid.Column>
      </Grid.Row>
      
      <Grid.Row>
        <Grid.Column textAlign='center'>
          <p style={{ fontWeight: 'bold' }}>DEV@Deakin 2022</p>
          <List horizontal divided link size='small'>
            <List.Item as='a' href='#'>Privacy Policy</List.Item>
            <List.Item as='a' href='#'>Terms</List.Item>
            <List.Item as='a' href='#'>Code of Conduct</List.Item>
          </List>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>

);

export default Footer;