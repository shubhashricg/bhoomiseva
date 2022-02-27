import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../navbar/navbar';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { email } from '../../../App'
import { phone } from '../../../App';

export default function contact() {
  return (
    <div>
        <Helmet>
            <title>Bhoomi Seva | Contact</title>
        </Helmet>

        <div className="contact-bg">
          <div>
            <Navbar />

            <h1 className='banner-section-title' style={{"font-size": "6rem", "margin-top": "14%"}}>
              Contact <br />
              Bhoomi Seva.
            </h1>
          </div>
        </div>

        <div>
          <h1 className='page-title' style={{"font-size": '4rem'}}>Our Contact Details.</h1>
          <div className="row">
            <div className="col-sm-7" style={{"padding": "2% 5%"}}>
            <div className="details" style={{"margin-top": "5%", "padding": "4% 5%", "box-shadow": "var(--hover)"}}>
            <FontAwesomeIcon icon={faEnvelope} size="2x" style={{"color": "var(--red)"}} /> <h5>{email}</h5>
            <br />
            <FontAwesomeIcon icon={faPhone} size="2x" style={{"color": "var(--red)"}} /> <h5>{phone}</h5>
            <br />
            <br />
            <br />

            <button className="whatsappBtn" style={{"padding": "1% 4%"}}>
            <FontAwesomeIcon icon={faWhatsapp} size="lg" /> Bhoomi Seva Whatsapp
            </button>

          </div>
            </div>
            <div className="col-sm-5">
              
            </div>
          </div>


        </div>

    </div>
  )
}
