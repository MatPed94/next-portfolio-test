import React from 'react';
import Link from 'next/link';
import { Accordion, Container, Divider, Grid, Header, Menu, Responsive } from 'semantic-ui-react'

const NavHeader = (props) => {

    const { size } = props;
    const { noWrap } = props;
    
    return (
        <Header
            id='navHeader'
            style={{fontSize: size, whiteSpace: noWrap ? 'nowrap' : 'normal'}} 
            content={<span>Mathias Pedersen</span>} 
            subheader='Digital Product Manager'
        />
    );
}

const DesktopContainer = (props) => {
    const { route } = props;  

    return (
        <Responsive 
            as={Grid} 
            minWidth={Responsive.onlyTablet.minWidth}
            maxWidth={Responsive.onlyWidescreen.maxWidth}
            container 
            columns={2}
        >
            <Grid.Row>
                <Grid.Column>
                    <NavHeader size='2.5rem' noWrap={true} />
                </Grid.Column>
                <Grid.Column>
                    <Menu 
                        as='nav' 
                        size='large' 
                        text
                    >
                        <Menu.Menu position='right'>
                            <Link href="/">
                                <Menu.Item
                                    name=''
                                    active={route === '/'}
                                    content='VÆRKER'
                                />
                            </Link>
                            <Link href="/about">
                                <Menu.Item
                                    name='about'
                                    active={route === '/about'}
                                    content='OM MIG'
                                />
                            </Link>
                            <Link href="/contact">
                                <Menu.Item
                                    name='contact'
                                    active={route === '/contact'}
                                    content='KONTAKT'
                                />
                            </Link>
                        </Menu.Menu>
                    </Menu>
                </Grid.Column>
            </Grid.Row>
        </Responsive>
    );
}

class MobileContainer extends React.Component  {
    state = { activeIndex: -1 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state;
        const { route } = this.props;

        return (
                <Responsive 
                    as={Container} 
                    {...Responsive.onlyMobile}
                    textAlign='center'
                >
                    <Accordion>
                        <Accordion.Title 
                            active={activeIndex === -1} 
                            index={0} 
                            onClick={this.handleClick}
                            style={{color: activeIndex === -1 ? 'rgba(0,0,0,.6)' : 'rgba(0,0,0,.95)'}}
                        >
                            MENU
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 0}>
                            <Menu 
                            as='nav' 
                            size='large' 
                            text
                            vertical
                            fluid
                            >
                                <Divider />
                                <Link href="/">
                                    <Menu.Item
                                        name=''
                                        active={route === '/'}
                                        content='VÆRKER'
                                    />
                                </Link>
                                <Link href="/about">
                                    <Menu.Item
                                        name='about'
                                        active={route === '/about'}
                                        content='OM MIG'
                                    />
                                </Link>
                                <Link href="/contact">
                                    <Menu.Item
                                        name='contact'
                                        active={route === '/contact'}
                                        content='KONTAKT'
                                    />
                                </Link>
                            </Menu> 
                        </Accordion.Content>
                    </Accordion>
                    <NavHeader size='2rem' />
                </Responsive>
        );
    }
}

const Navbar = (props) =>  {
    const { route } = props;     
    
    return (
        <div>
            <DesktopContainer route={route}/>
            <MobileContainer route={route}/>
        </div>
    );
}

export default Navbar;