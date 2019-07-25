import { Container, Header, Icon, Item, Segment } from 'semantic-ui-react';


const Timeline = () => (
    <Segment style={{marginTop: '3em'}}>
    </Segment>
)

const About = () => (
    <Segment id='masthead' vertical>
        <Container>
            <h1>Hello from about!</h1>
            <Timeline />
        </Container>
    </Segment>
);

export default About;