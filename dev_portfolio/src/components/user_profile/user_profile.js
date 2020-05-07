import React from 'react';
import avatar from '../../images/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const UserProfile = () =>(
      <div className="card-panel" style={{padding: '11px'}}>
        <div className='row'>
            <div className='col s12'>
                <img src={avatar} className="circle responsive-img" alt='avatar' />
            </div>
        </div>
        <div className="row">
            <h5 className='center-align'>Emilly Moura</h5>
            <p className="grey darken-2 white-text center-align"><b>Desenv. Front-End</b></p>
            <p style={{marginLeft: '6px'}}><FontAwesomeIcon icon={faPhone} className='grey-text text-darken-2'/><span style={{'fontSize': '15px'}}> +55 011 96194-0994</span></p>
            <p style={{marginLeft: '6px'}}><FontAwesomeIcon icon={faEnvelope} className='grey-text text-darken-2'/><span style={{'fontSize': '15px'}}> emydl.moura@gmail.com</span></p>
            <p style={{marginLeft: '6px'}}><FontAwesomeIcon icon={faMapMarkerAlt} className='grey-text text-darken-2'/><span style={{'fontSize': '15px'}}> Vila Alpina, São Paulo - Brasil</span></p>
      </div>
      </div>
)

export default UserProfile;