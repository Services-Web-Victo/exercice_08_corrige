/**
 * Il resque quelques bugs d'affichage quand on regénère un nouvel utilisateur, mais l'essentiel est là
 */

import React from 'react';
import './Information.css'


class Information extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const iconSelect = document.querySelector('[data-label="name"]');
        this.modificationTexte(iconSelect);
    }

    handleIconChange = (event) => {
        const iconSelect = event.target;
        this.modificationTexte(iconSelect);
    }

    modificationTexte = (iconSelect) => {
        const listeIcons = document.querySelectorAll('.liste_bouton li');
        const userTitle = document.getElementById('user_title');
        const userValue = document.getElementById('user_value');

        listeIcons.forEach(icone => {
            const activateIcon = icone.getAttribute('data-label') === iconSelect.getAttribute('data-label');
            icone.classList.toggle('active', activateIcon);
        })

        userTitle.innerText = iconSelect.getAttribute('data-title')
        userValue.innerText = iconSelect.getAttribute('data-value')
    }

    render() {
        return (
            <div>
                <p id="user_title"></p>
                <p id="user_value" className='user_info'>{this.props.nom}</p>      

                <ul className="liste_bouton">
                    <li data-label="name" data-title="Salut, je m'appelle" data-value={this.props.nom} className="active" onMouseOver={this.handleIconChange}></li>
                    <li data-label="email" data-title="Mon adresse courriel est " data-value={this.props.courriel} onMouseOver={this.handleIconChange}></li>
                    <li data-label="birthday" data-title="Ma date de naissance est le" data-value={this.props.dateNaissance} onMouseOver={this.handleIconChange}></li>
                    <li data-label="location" data-title="Mon adresse est" data-value={this.props.adresse} onMouseOver={this.handleIconChange}></li>
                    <li data-label="phone" data-title="Mon numéro de téléphone est" data-value={this.props.telephone} onMouseOver={this.handleIconChange}></li>
                    <li data-label="pass" data-title="Mon mot de passe est" data-value={this.props.password} onMouseOver={this.handleIconChange}></li>
                </ul>
            </div>


        );
    }
}

export default Information;