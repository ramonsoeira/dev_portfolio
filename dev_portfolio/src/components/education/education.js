import React from "react";

const Education = (props) => (
  <div className='card-panel'>
      <div className='row'>
        <div className='col s2 m2'>
          <img src={props.avatar} className="circle responsive-img" alt='school1' />
          { props.name }
        </div>

        <div className='col s10 '>
          <p><b>{props.title} na <span className="grey darken-2 white-text" style={{paddingLeft:'5px', paddingRight: '5px'}}>{props.company}</span></b></p>
          <p>{props.description}</p>
        </div>
      </div>
  </div>
);

export default Education;