import React from 'react';
import axios from 'axios';
import Avatar from './Avatar';
import './Card.css';
import Information from './Information';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            user: null,
        }
    }

    componentDidMount() {
        this.genereUsager();
    }

    genereUsager = () => {
        axios.get('https://randomuser.me/api/')
        .then((response) => {
            const user = response.data.results[0];
            // On récupère les données reçues et on modifie le tableau dans l'état
            this.setState({user : user, isLoaded: true})
        })
    }

    render() {

        if(!this.state.isLoaded) {
            return (
                <div className='conteneur'>
                    {/* <h1>En chargement ...</h1> */}
                </div>
            )
        }

        const user = this.state.user;
        const nom = user.name.first + ' ' + user.name.last;
        const imageSrc = user.picture.large;
        const courriel = user.email;
        const dateNaissance = new Date(user.dob.date);
        const dateNaissanceFormat = [
            dateNaissance.getMonth() + 1, 
            dateNaissance.getDay(), 
            dateNaissance.getFullYear()
        ].join('/');
        const adresse = user.location.street.number + ' ' + user.location.street.name;
        const telephone = user.cell;
        const password = user.login.password;

        return (

            <div id='card'>
                <Avatar image={imageSrc} regenereUsager={this.genereUsager}/>

                <Information
                    nom={nom} 
                    courriel={courriel}
                    dateNaissance={dateNaissanceFormat}
                    adresse={adresse}
                    telephone={telephone}
                    password={password}
                    />
            </div>
        );
    }
}

export default Card;