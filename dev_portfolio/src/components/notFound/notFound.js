import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadCry} from '@fortawesome/free-solid-svg-icons'

const NotFound = () =>{
    return(
        <div className='row grey-text text-darken-2 center-align'>
            <div className='col s12'  style={{'marginTop': '50px'}}>
                <FontAwesomeIcon icon={faSadCry} style={{'fontSize': '260px'}} />
                <h1>Página não encontrada</h1>
            </div>
        </div>
    )
}

export default NotFound;