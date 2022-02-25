import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { MyHeader } from './MyHeader';


export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <MyHeader />
                <Container>
                    {this.props.children}
                </Container>
            </div>
        );
    }
}