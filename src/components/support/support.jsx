import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { email } from '../../App'
import { phone } from '../../App';

export default function support() {
  return (
    <div style={{"marginTop": "60%", "padding-right": "4%"}}>
      <h3 className='page-title' style={{"font-size": "2.4rem"}}> Support us</h3>

      <div style={{"boxShadow": "var(--hover)", "padding": "5% 8%"}}>
        <p>Join our whatsapp group or support us on our facebook page.</p> <br />

        <div className='mx-auto text-center'>
          <button className="whatsappBtn">
            <FontAwesomeIcon icon={faWhatsapp} size="lg" /> Bhoomi Seva Whatsapp
          </button>
          <br />
          <br />
          <button className="facebookBtn">
            <FontAwesomeIcon icon={faFacebook} size="lg" /> Bhoomi Seva Facebook
          </button>
        </div>

        <br />
        <hr />
        <br />

        <p className='text-break'><FontAwesomeIcon icon={faEnvelope} size="lg" style={{"color": "var(--red)"}} /> &nbsp; {email}</p>
        <p className='text-break'><FontAwesomeIcon icon={faPhone} size="lg" style={{"color": "var(--red)"}} /> &nbsp; {phone}</p>

        <br />

        <div className='text-center mx-auto'>
          <button className='donateBtn'>
              Donate 
          </button>
        </div>

      </div>
    </div>
  )
}
