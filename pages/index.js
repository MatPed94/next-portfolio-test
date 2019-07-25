import { Container, Grid, Header , Segment } from 'semantic-ui-react';

const Index = () => (
    <Segment id='masthead' vertical>
      <Grid container>
        <Grid.Column only="computer tablet" width={2}></Grid.Column>
        <Grid.Column computer={10} tablet={10} mobile={16}>
          <Header id='sideHeader' as='h1'>
            {'ASPIRERENDE PRODUCT MANAGER LOKALISERET i aalborg'.toUpperCase()}
            <Header.Subheader><strong>Scroll ned for at se udvalgte projekter.</strong></Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column width={4}></Grid.Column>
      </Grid>
      <Container>
      </Container>
    </Segment>
  );
  
  export default Index;