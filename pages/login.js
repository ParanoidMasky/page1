import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Redirect } from 'react-router-dom'

export default class Login extends Component {

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")

        let mikhelaIsLogged = true

        if(token == null){
            mikhelaIsLogged = false
        }

        this.state = {
            username: '',
            password: '',
            mikhelaIsLogged
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
        const { username, password } = this.state
        
        console.log(username)
        console.log(password)

        //login
        if( username=="Mikhela" && password=="0809") {
            localStorage.setItem("token", "mikhelaestaaqui11launicapersonaquepuede11tenermicorazon")
            this.setState({
                mikhelaIsLogged: true
            })

        }

    }

    render() {

        if(this.state.mikhelaIsLogged) {
            return <Redirect to="/home-main" />
        }

        return (
            <div className="login-container">
                <h4>Para entrar a esta parte de mi corazón, necesito saber que eres la persona correcta...</h4>
                <br/>
                <Form onSubmit={this.submitForm}>
                    <Form.Control type="text" placeholder="Solo hay una persona que puede ver esto..." name="username" value={this.state.username} onChange={this.onChange} /> <br/>
                    <Form.Control type="password" placeholder="¿Qué fecha comenzó todo?..." name="password" value={this.state.password} onChange={this.onChange} /> <br/>
                    <center> <Button className="send-btn" variant="primary" type="submit">Acceder</Button> </center>
                </Form>
            </div>
        )
    }
}
