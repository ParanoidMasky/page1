import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Redirect, Link } from 'react-router-dom'

export default class Cards extends Component {

    constructor(props){
        super(props)

        this.state = {
            answer1: '',
            answer2: '',
            answer3: '',
            answer4: '',
            toPhotos: false,
            toGifts: false,
            toMind: false,
            toSongs: false,

        }

        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })

    }

    submitForm(e) {
        e.preventDefault()
        const { answer1, answer2, answer3, answer4 } = this.state

        if( this.state.answer1 == "Cuervo") {
            console.log("a fotos")
            this.setState({
                toPhotos: true
            })
        } if( this.state.answer2 === "Ariel") {
            console.log("a regalos")
            this.setState({
                toGifts: true
            })
            
        } if(this.state.answer3 === "Mavis") {
            console.log("a pensamientos")
            this.setState({
                toMind: true
            })
        } if(this.state.answer4 === "Fran") {
            console.log("a canciones")
            this.setState({
                toSongs: true
            })
        }

    }

    render() {

        if( this.state.toPhotos ) {
            return <Redirect to="/photos" />
        } if( this.state.toGifts) {
            return <Redirect to="/gifts" />
        } if( this.state.toMind) {
            return <Redirect to="/mind" />
        } if( this.state.toSongs) {
            return <Redirect to="/songs" />
        }

        return (
            <div className="card-container">
                <center>
                    <Container>
                        <Row>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Fotos de mi amor...</Card.Title>
                                    <Card.Text>
                                    Todas las fotos que mi corazón ha anhelado por tu belleza y perfección...
                                    </Card.Text>
                                    <Form onSubmit={this.submitForm}>
                                    <Form.Control type="text" placeholder="Mi animal favorito..." name="answer1" value={this.state.answer1} onChange={this.onChange} /> <br/>
                                    <Button className="send-btn" variant="primary" type="submit" >Ir a fotos</Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                                <Card style={{ width: '18rem' }}>
                                        <Card.Body>
                                        <Card.Title>Los regalos que atesoro en mi corazón...</Card.Title>
                                        <Card.Text>
                                        Los regalos tan hermosos que me hacen muy feliz...
                                        </Card.Text>
                                        <Form onSubmit={this.submitForm}>
                                            <Form.Control type="text" placeholder="Nombre de nuestra futura hija..." name="answer2" value={this.state.answer2} onChange={this.onChange} /> <br/>
                                            <Button className="send-btn" variant="primary" type="submit">Ir a regalos</Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>Mis pensamientos...</Card.Title>
                                        <Card.Text>
                                        Todo lo que hay dentro de mi mente para ti...
                                        </Card.Text>
                                        <Form onSubmit={this.submitForm}>
                                            <Form.Control type="text" placeholder="Personaje a la que más te pareces..." name="answer3" value={this.state.answer3} onChange={this.onChange} /> <br/>
                                            <Button className="send-btn" variant="primary" type="submit">Ir a pensamientos</Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '18rem' }}>
                                        <Card.Body>
                                            <Card.Title>Canciones que me hacen pensar en ti ...</Card.Title>
                                                <Card.Text>
                                                Quisiera cantartelas al oído...
                                                </Card.Text>
                                            <Form onSubmit={this.submitForm}>
                                                <Form.Control type="text" placeholder="Personaje que más amo que rolees..." name="answer4" value={this.state.answer4} onChange={this.onChange} /> <br/>
                                                <Button className="send-btn" variant="primary" type="submit">Ir a canciones</Button>
                                            </Form>
                                    </Card.Body>
                                </Card>
                        </Row>
                    </Container>
                    <br/><br/>
                    <Link to="/logout"><Button className="send-btn">Salir</Button></Link>
                </center>
                
            </div>
        )
    }
}
