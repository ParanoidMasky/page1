import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export default class Mind extends Component {
    render() {
        return (
            <div>
                <center>
                    <h3>Mi amor...</h3>
                    <a className="sentimientos-1">
                        Hay tantas cosas que quisiera decirte. Por eso he hecho todo esto para que puedas leer cada cosa que pienso, cada sentimiento y cada poema o pensamiento. Podría comenzar diciendo la razón de este regalo...
                        Han sido 6 meses hermosos, tanto que he querido plasmar y convertir todos mis sentimientos en algo físico que esté conectado a mi corazón, conectado a cada palpitar de el y a cada neurona, cada sentimiento que
                        sea capaz de generar y plasmar, he hecho esto por ti, para que todo lo hermoso se convierta en un recuerdo que quede con nosotros, un recuerdo que quede escrito en alguna parte. Y que, dependiendo de todo lo que me
                        puedas hacer sentir este crezca más y más para poder albergar más cosas... <br></br> <br></br>

                        Lo que más deseo es que mi corazón cada día crezca más por ti, por tus palabras, por nuestro amor, por nuestro futuro, y que todo en el puedas verlo y sentirlo, todo lo puedas ver y percibir como tanto quise, todo lo que tu
                        belleza, perfección y existencia ocasionan en mi corazón de una forma tan bella y positiva, todo eso quiero que se quede aquí en mi corazón así como tu lo estarás siempre. <br></br><br></br>

                        Te amo Mikhela Huapaya Valdivia, gracias por tanto y perdón por tan poco, gracias por estar conmigo, gracias por hacerme palpitar, funcionar y por hacerme valer la pena... Eres el milagro más hermoso que le ha pasado a mi vida y a mi universo..
                        <br></br>
                        <br></br>

                        Por favor... nunca cambies, nunca me dejes, nunca me abandones...

                        <br></br><br></br>

                        <Link to="/home-main"><Button className="send-btn">Ir a pagina principal</Button></Link>

                    </a>
                </center>
            </div>
        )
    }
}
