import { Container, Divider, Form, Grid, Header, List, Segment } from 'semantic-ui-react';

const Contact = () => (
    
    <Segment id='masthead' vertical>
        <Container textAlign="center">
            <Header as="h1" style={{textTransform: 'uppercase', marginTop: '3em'}}>Kontakt information</Header>
            <List style={{marginTop: '2em'}}>
                <List.Item>
                    <List.Header>Mathias Kjær Pedersen</List.Header>
                </List.Item>
                <List.Item>mathias.k.pedersen94@gmail.com</List.Item>
                <List.Item>(+45) 41824061</List.Item>                
            </List>
            <br />
            <Divider horizontal>Eller</Divider>
        </Container>
        <Grid container>
            <Grid.Column width={4} only='computer' />
            <Grid.Column computer={8} mobile={16}>
            <Form style={{marginTop: '3em'}}>
                <Form.Field required>
                <label>First Name</label>
                    <input placeholder='Navn' />
                    </Form.Field>
                <Form.Field required>
                    <label>Email</label>
                    <input type="email" placeholder='Email' />
                </Form.Field>
            </Form>
            </Grid.Column>
            <Grid.Column width={4} only='computer' />
        </Grid>
    </Segment>
);

export default Contact;