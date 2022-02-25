import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../../src/custom.css'

export class Calculator extends Component {
    static displayName = Calculator.name;

    render() {
        return (
            <div>
                <section className="infoSection d-flex flex-column">
                    <h3>Planos especiais para a sua empresa</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt metus...</p>
                </section>

                <div className="d-flex justify-content-between">
                    <section className="d-flex flex-column contentSection">
                        <span>NOSSA COBERTURA</span>
                        <p>Disponibilidade em todo <br />
                            território nacional.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br />
                            elit. Vivamus dictum a nisl sed tristique.<br />
                            Orci varius natoque penatibus et magnis dis parturient<br />
                            montes, nascetur ridiculus mus. Vestibulum<br />
                            sagittis porttitor nulla.</p>
                        <Button id="btnMain" variant="outline-secondary">Saiba mais</Button>
                    </section>
                    <section className="imagesSection">
                        <div></div>
                        <div></div>
                    </section>
                </div>

            </div>
        );
    }
}
