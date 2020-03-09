import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export default class Songs extends Component {
    render() {
        return (
            <div className="login-container">
                <h1>Canciones para dedicarle a mi universo...</h1>
                <p> Todas las canciones que una vez te dediqué y significan mucho para mi por lo que me hacen pensar se encuentran aqui, eres libre de oirlas todas a cualquier momento.
                    Te amo mi amor hermoso... </p>

                    <center> <Button className="send-btn" href="https://www.youtube.com/playlist?list=PLboh1AmEnsnmusupwVgrs0m_McUVjrV8Z">Ir a las canciones</Button> <br/><br/><br/>
                    <Link to="/home-main"><Button className="send-btn">Ir a pagina principal</Button></Link> </center>
                
            </div>
        )
    }
}
