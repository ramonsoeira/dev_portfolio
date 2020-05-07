import React from "react";

const Experience = (props) => (
  <div className='card-panel'>
      <div className='row'>
        <div className='col s2 m2'>
          <img src={props.avatar} className="circle responsive-img" alt='job1' />
          { props.name }
        </div>

        <div className='col s10 '>
          <p><b>{props.title} na empresa <span className="grey darken-2 white-text" style={{paddingLeft:'5px', paddingRight: '5px'}}>{props.company}</span></b></p>
          <p>{props.description}</p>
        </div>
      </div>
  </div>
);

export default Experience;