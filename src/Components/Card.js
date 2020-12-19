import React, { Component } from 'react';
import { FaGithub } from 'react-icons/fa';


class Card extends Component {
    state = { 

     }

    render() { 

        const {avatar , name , bio , link} = this.props;

        return ( 
         <div class="card mt-3">
            <div>
                <img class="avatar" src={avatar} alt={name} />
            </div>
            <div class="user-info">
                <h2>{name}</h2>
                <p>{bio}</p> <br/>  
                <p>Visit Profile:</p>
                <a href={link}><FaGithub size={43} color="black"/></a>                          
            </div>
        </div>
         );
    }
}
 
export default Card;