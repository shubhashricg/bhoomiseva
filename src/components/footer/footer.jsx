import React from 'react';
import './footer.css';
import { email } from '../../App';
import { phone } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function footer() {
  return (
    <div className='footer'>
        <div class="row">
                <div class="col-sm-4">
                    <h2 class="mx-auto" style={{"color": "#fff", "margin-top": "15%"}}>CONTACT US</h2>
                    

                    <div class="row footer-wrapper" style={{"margin-top": "5%"}}>
                        <div class="col-sm-6">
                            <p style={{"text-align": "left"}} class="text-muted"><FontAwesomeIcon icon={faPhone} style={{"color": "grey", "text-align": "right"}} size="2x" />&nbsp;&nbsp;&nbsp;&nbsp; {phone}</p>
                        </div>
                        <div class="col-sm-6">
                        </div>
                    </div>

                    <div class="row footer-wrapper" style={{"margin-top": "5%"}}>
                        <div class="col-sm-6">
                            <p style={{"text-align": "left"}} class="text-muted"><FontAwesomeIcon icon={faEnvelope} style={{"color": "grey", "text-align": "right"}} size="2x" />&nbsp;&nbsp;&nbsp;&nbsp; {email}</p>
                        </div>
                        <div class="col-sm-6">
                        </div>
                    </div>

                </div>
                <div class="col-sm-8">
                    <div style={{"margin-top": "8%"}}>
                        <h3 class="mx-auto text-center mobile-footer-title" style={{"color": "#fff"}}>OUR MISSION</h3>
                        <p class="text-muted text-center footer-desc" style={{"text-align": "left"}}>Bhoomi Seva mission is to reach out and help people in need in various ways esp. rural population, and rejuvenate our environment in our own capacity. </p>
                    </div>

                    <div style={{"margin-top": "5%"}}>
                        <h3 class="mx-auto text-center mobile-footer-title" style={{"color": "#fff"}}>OUR VISION</h3>
                        <p class="text-muted text-center footer-desc" style={{"text-align": "left"}}>To uplift rural population and improve fertility of soil by encouraging farmers to take up agroforestry and/or natural farming(in Kanakapura area to start with).
                        </p>
                    </div>
                </div>
            </div>

            <div className="row" style={{"margin-top": "5%"}}>
                <div className="col-sm-6">
                    <p className='text-muted credit'>&copy; Copyright 2022 Bhoomi Seva.</p>
                </div>
                <div className="col-sm-6" style={{"textAlign": "right"}}>
                    <p className="text-muted credit">Website Development by <a href="#!" class="dev-link">Manav Mehta</a> and <a href="#!" class="dev-link">Shubhashri. C.G</a></p>
                </div>
            </div>
    </div>
  )
}
