import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import Cards from '../components/cards'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


export default class Home extends Component {

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")

        let mikhelaIsLogged = true

        if(token == null){
            mikhelaIsLogged = false
        }

        this.state = {
            mikhelaIsLogged
        }
    }

    

    render() {
        if(this.state.mikhelaIsLogged === false) {
            return <Redirect to="/login" />
        }

        return (
            <Container>
                <Row>
                    <Col lg="2"></Col>
                    <Col lg="8">
                        <div className="home-body">
                            <center>
                                <h1>Bienvenida a mi corazón amor..</h1>
                                <p> Eres la única persona a quien dejaría entrar aquí </p>
                                <p> He abierto un espacio muy especial para ti aqui, para que puedas ver todo lo que contiene...
                                    pero para que funcione, deberás contestar unas preguntas para que puedas descubrirlo... </p> <br/> <br/>

                                <Cards></Cards> <br/>
                            </center>
                        </div>
                    </Col>
                    <Col lg="2"></Col>
                </Row>
            </Container>
            
        )
    }
}
