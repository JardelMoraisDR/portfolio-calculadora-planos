import React, { Component } from 'react';
import { Button, Form, Select, Label } from 'react-bootstrap';
import '../../src/custom.css'

export class Calculator extends Component {
    static displayName = Calculator.name;

    render() {
        return (
            <div className="container parentDiv">

                <div className="row">
                    <section className="col-6 descriptionSection">
                        <h2 className="custom-bar">Quer reduzir custos com ligações?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br />
                            elit. Vivamus dictum a nisl sed tristique.<br />
                            Orci varius natoque penatibus et magnis dis parturient<br />
                            montes, nascetur ridiculus mus. Vestibulum<br />
                            sagittis porttitor nulla.</p>
                    </section>
                    <section className="col-6 formSection">
                        <h2 className="custom-bar">Descubra o quanto você pode economizar!</h2>

                        <Form>

                            <div className="form-group row mt-3">

                                <div className="form-group col-md-6">
                                    <Form.Label htmlFor="inputOrigin">Origem</Form.Label>
                                    <Form.Select id="inputOrigin" className="form-control">
                                        <option>11 - São Paulo</option>
                                        <option value="21">21 - Rio de Janeiro</option>
                                    </Form.Select>
                                </div>

                                <div className="form-group col-md-6">
                                    <Form.Label htmlFor="inputFate">Destino</Form.Label>
                                    <Form.Select id="inputFate" className="form-control">
                                        <option>11 - São Paulo</option>
                                        <option value="21">21 - Rio de Janeiro</option>
                                    </Form.Select>
                                </div>
                              
                            </div>

                            <div className="form-group row">

                                <div className="form-group col-md-12">
                                    <Form.Label htmlFor="inputOrigin">Tempo em minutos</Form.Label>
                                    <Form.Select id="inputOrigin" className="form-control">
                                        <option>11 - São Paulo</option>
                                        <option value="21">21 - Rio de Janeiro</option>
                                    </Form.Select>
                                </div>

                            </div>

                            <div className="form-group row">

                                <div className="form-group col-md-12">
                                    <Form.Label htmlFor="inputOrigin">Planos</Form.Label>
                                    <Form.Select id="inputOrigin" className="form-control">
                                        <option>FaleMais 30</option>
                                        <option value="1">FaleMais 60</option>
                                        <option value="1">FaleMais 120</option>
                                    </Form.Select>
                                </div>

                            </div>

                            <div className="form-group row justify-content-center">
                                <Button className="btn-calc" variant="primary">Calcular</Button>
                            </div>

                        </Form>

                    </section>
                </div>

            </div>
        );
    }
}
