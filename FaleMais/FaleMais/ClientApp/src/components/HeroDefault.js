import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import './HeroStyle.css'

export class HeroDefault extends Component {
    static displayName = HeroDefault.name;

    render() {
        return (
            <section id="heroSimple">
                <Form className="alignVertical d-flex flex-column">
                    <h1>Compare e encontre o melhor plano!</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p><a href="" className="firstBreadcrumb">Home</a> / Comparar planos</p>
                </Form>
            </section>
        );
    }
}
