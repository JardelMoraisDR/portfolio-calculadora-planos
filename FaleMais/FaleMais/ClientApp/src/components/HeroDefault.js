import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import './HeroDefault.css'

export class HeroDefault extends Component {
    static displayName = HeroDefault.name;

    render() {
        return (
            <section id="heroHome">
                <Form className="container d-flex flex-column">
                    <h1>Fale mais com os nossos planos</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
                        Integer sit amet sem sit amet libero mattis vulputate.
                    </p>
                    <Button id="btnMain" variant="outline-secondary">Saiba mais</Button>
                </Form>
            </section>
        );
    }
}
