import React from 'react';
import Imagen from '../img/box_brand.png';
import '../css/index.css';
import '../css/estilos.css';
import '../css/paypal.css';

import {Link} from 'react-router-dom';

class Error extends React.Component{
render(){
    return(
        <div className="contentPaypal">
            <img src={Imagen}/>
            <h3>¡Ouch! Tu compra no se pudo realizar.</h3>
            <p>Haz <Link className="link" to='./'>click aqu&iacute;</Link> para ir al home</p>
        </div>    
    )
}


}

export default Error;