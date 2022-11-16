import React from "react";
import mail from '../images/email.svg';
import linkedin from '../images/linkedin.svg';

export default function Buttons() {
  return (
    <div className='buttons'>
      <button className='mail-button'>
        <img src={mail} />
        Mail
      </button>
      <button className='linkedin-button'>
        <img src={linkedin} />
        LinkedIn
      </button>
    </div>
  );
}
