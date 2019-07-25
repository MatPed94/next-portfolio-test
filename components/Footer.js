import React from 'react'
import { Grid, Icon, List, Segment } from 'semantic-ui-react'

const Footer = () => (
  <Segment id='footer' vertical>
      <Grid container columns={2}>
        <Grid.Column>
            <List>
                <List.Item>
                    <List.Header>Mathias Kjær Pedersen</List.Header>
                </List.Item>
                <List.Item>mathias.k.pedersen94@gmail.com</List.Item>
                <List.Item>(+45) 41824061</List.Item>                
            </List>
        </Grid.Column>
        <Grid.Column textAlign='right'>
            <a href="https://www.linkedin.com/in/mathias-k-pedersen/" target="_blank" rel="noopener noreferrer">
                <Icon link size='large' name='linkedin' color='black' />
            </a>
            <a href="https://www.instagram.com/matped94/" target="_blank" rel="noopener noreferrer">
                <Icon link size='large' name='instagram' color='black' />
            </a>
        </Grid.Column>
      </Grid>
  </Segment>
);

export default Footer;
