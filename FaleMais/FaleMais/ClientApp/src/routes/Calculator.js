import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import NumericInput from 'react-numeric-input';
import '../../src/custom.css';
import Popup from '../../src/components/Popup';

export class Calculator extends Component {
    static displayName = Calculator.name;

    constructor() {
        super();

        this.state = {
            show: false,
            showCost: false,
            minuteCost: null,
            withProduct: "",
            withOutProduct: ""
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);

        this.setMinuteCost = this.setMinuteCost.bind(this);
    }

    setMinuteCost = (cost) => {
        this.setState({
            minuteCost: cost.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
        });
    }

    async calcMinCost(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        const response = await fetch('api/CostRelation/', { method: 'POST', body: data }).then((resp) => resp.json());

        //console.log(response);
        this.setMinuteCost(response);
    }

    async showModal(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        const response = await fetch('api/CostCall/', { method: 'POST', body: data }).then((resp) => resp.json());
        //console.log(response);

        this.setState({
            withProduct: response.WithProduct.toLocaleString('pt-br', {style: 'currency', currency:'BRL'}),
            withOutProduct: response.WithoutProduct.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
            show: true
        });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {

        const renderMinuteCost = () => {
            if (this.state.minuteCost != null) {
                return <p>Custo por minuto de <strong id="minCost">{this.state.minuteCost}</strong></p>;
            } else {
                return <p>Calcule o custo por minuto e veja o resultado aqui</p>;
            }
        }

        return (
            <div className="container parentDiv">

                <div className="row">
                    <section className="col-md-6 col-sm-12 descriptionSection">
                        <h2 className="custom-bar">Quer reduzir custos com ligações?</h2>
                        <p>Conheça os nossos planos e <strong>economize mais</strong> com ligações móveis!<br />
                            Com os nossos planos FaleMais 30, FaleMais 60 e FaleMais 120<br />
                            você poderá falar até 30, 60 e 120 minutos sem pagar <br />
                            nada além do plano!<br />
                            <br />
                            Confira abaixo o custo por minuto de cada relação<br />
                            entre origem e destino:</p>

                        <Form onSubmit={this.calcMinCost.bind(this)}>

                            <div className="form-group row mt-3">

                                <div className="form-group col-md-6">
                                    <Form.Label htmlFor="inputOrigin">Origem</Form.Label>
                                    <Form.Select name="CodeOrigin" id="inputOrigin" className="form-control">
                                        <option value="11">DDD 011</option>
                                        <option value="16">DDD 016</option>
                                        <option value="17">DDD 017</option>
                                        <option value="18">DDD 018</option>
                                    </Form.Select>
                                </div>

                                <div className="form-group col-md-6">
                                    <Form.Label htmlFor="inputFate">Destino</Form.Label>
                                    <Form.Select name="CodeFate" id="inputFate" className="form-control">
                                        <option value="11">DDD 011</option>
                                        <option value="16">DDD 016</option>
                                        <option value="17">DDD 017</option>
                                        <option value="18">DDD 018</option>
                                    </Form.Select>
                                </div>

                                <Form.Control name="MinuteCost" type="hidden" value="0" />

                            </div>

                            <div className="form-group row justify-content-center">
                                <Button type="submit" className="btn-calc" variant="primary">Calcular custo</Button>
                            </div>

                        </Form>

                        <div className="form-group row justify-content-center">
                            {renderMinuteCost()}
                        </div>

                    </section>
                    <section className="col-md-6 col-sm-12 formSection">
                        <h2 className="custom-bar">Descubra o quanto você pode economizar!</h2>

                        <Form onSubmit={this.showModal.bind(this)}>

                            <div className="form-group row mt-3">

                                <div className="form-group col-md-6">
                                    <Form.Label htmlFor="inputOrigin">Origem</Form.Label>
                                    <Form.Select name="CodeOrigin" id="inputOrigin" className="form-control">
                                        <option value="11">DDD 011</option>
                                        <option value="16">DDD 016</option>
                                        <option value="17">DDD 017</option>
                                        <option value="18">DDD 018</option>
                                    </Form.Select>
                                </div>

                                <div className="form-group col-md-6">
                                    <Form.Label htmlFor="inputFate">Destino</Form.Label>
                                    <Form.Select name="CodeFate" id="inputFate" className="form-control">
                                        <option value="11">DDD 011</option>
                                        <option value="16">DDD 016</option>
                                        <option value="17">DDD 017</option>
                                        <option value="18">DDD 018</option>
                                    </Form.Select>
                                </div>

                            </div>

                            <div className="form-group row">

                                <div className="form-group col-md-12">
                                    <Form.Label htmlFor="inputMinutes">Tempo em minutos</Form.Label>
                                    <NumericInput name="TotalMinute" id="inputMinutes"
                                        className="form-control"
                                        value="01"
                                        min={1}
                                        step={1}
                                        precision={0}
                                        size={5}
                                        required
                                    />
                                </div>

                            </div>

                            <div className="form-group row">

                                <div className="form-group col-md-12">
                                    <Form.Label htmlFor="inputPlans">Planos</Form.Label>
                                    <Form.Select name="Product" id="inputPlans" className="form-control">
                                        <option value="30">FaleMais 30</option>
                                        <option value="60">FaleMais 60</option>
                                        <option value="120">FaleMais 120</option>
                                    </Form.Select>
                                </div>

                            </div>

                            <div className="form-group row justify-content-center">
                                <Button type="submit" className="btn-calc" variant="primary">Calcular</Button>
                            </div>

                        </Form>

                    </section>
                </div>

                <Popup show={this.state.show} handleClose={this.hideModal}>

                    <div className="row">
                        <p className="col-12 text-center">
                            Confira a diferença que faz no bolso:
                        </p>
                    </div>

                    <div className="row">
                        <p className="col-6 font-weight-bold text-center">
                            Com <br />
                            FaleMais
                        </p>
                        <p className="col-6 font-weight-bold text-center">
                            Sem <br />
                            FaleMais
                        </p>
                    </div>

                    <div className="row">
                        <p className="col-6 text-center">
                            {this.state.withProduct}
                        </p>
                        <p className="col-6 text-center">
                            {this.state.withOutProduct}
                        </p>
                    </div>

                    <div className="row">
                        <p className="col-12 text-center">
                            Ficou interessado? Clique no botão abaixo e entre <br />
                            em contato com um dos nossos representantes:
                        </p>
                    </div>

                    <div className="form-group row justify-content-center">
                        <Button className="btn-calc" variant="primary">Entrar em contato</Button>
                    </div>

                </Popup>

            </div>
        );
    }
}
