import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../navbar/navbar';
import './getInvolved.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Support from '../../support/support';

export default function getInvolved() {
  return (
    <div>

        <Helmet>
            <title>Bhoomi Seva | Get Involved</title>
        </Helmet>

        <div className="getInvolved-bg">
        <div>
          <Navbar />

          <h1 className='banner-section-title' style={{"fontSize": "5rem", "margin-top": "15%"}}>
            Get Involved <br />
            with Bhoomi Seva.
          </h1>
        </div>
      </div>

      <h1 className='page-title' style={{"fontSize": "3.6rem"}}>Join the Initiative</h1>

    <div className="row">
        <div className="col-sm-6">
        <form style={{"padding": "10% 7%"}}>
            <div class="input-group mb-3">
                <span class="input-group-text" style={{"background-color":"rgb(255, 51, 0)"}} id="basic-addon1"> <FontAwesomeIcon icon={faPhone} style={{"color": "white"}} />  </span>
                <input type="text" class="form-control" placeholder="Enter your whatsapp number" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <br />

            <div class="form-check" style={{"text-align": "left"}}>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                    Select All
                </label>
            </div>
            <div class="form-check" style={{"text-align": "left"}}>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                    Farmer's support / Cow donation
                </label>
            </div>
            <div class="form-check" style={{"text-align": "left"}}>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                    Education
                </label>
            </div>
            <div class="form-check" style={{"text-align": "left"}}>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                    Orphanage Support
                </label>
            </div>
            <br />
            <div className='mx-auto text-center'>
                <button class="submit" id="subscribe" type="submit">SUBMIT</button>
            </div>
            
            <hr style={{"margin-top": "10%"}} />

        </form>

        <div style={{"padding": "0% 7%"}} className="mx-auto text-center">
            <button className='unsubscribe' data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                UNSUBSCRIBE
            </button>
        </div>

        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header" style={{"border": "none !important"}}>
                                        <h5 class="modal-title title mx-auto text-center" style={{"font-size": "1.8rem"}} id="staticBackdropLabel">Unsubscribe to Bhoomi Seva Initiatives.</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body" style={{"padding": "1% 15%"}}>
                                            <form style={{"padding": "10% 7%"}}>
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" style={{"background-color":"rgb(255, 51, 0)", "color": "white"}} id="basic-addon1"><FontAwesomeIcon icon={faPhone} /></span>
                                                    <input type="text" class="form-control" placeholder="Enter your whatsapp number" aria-label="Username" aria-describedby="basic-addon1" />
                                                </div>
                                                <div class="form-check" style={{"text-align": "left"}}>
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                      Select All
                                                    </label>
                                                </div>
                                                <div class="form-check" style={{"text-align": "left"}}>
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                      Farmer's support / Cow donation
                                                    </label>
                                                </div>
                                                <div class="form-check" style={{"text-align": "left"}}>
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Education
                                                    </label>
                                                </div>
                                                <div class="form-check" style={{"text-align": "left"}}>
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Orphanage Support
                                                    </label>
                                                </div>
                                                <div class="mx-auto text-center">
                                                    <button class="submit" id="unsubscribe" type="submit">UNSUBSCRIBE</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    </div>
                                </div>

            

        </div>

        <div className="col-sm-6" style={{"margin-top": "-10%", "padding": "2% 8%"}}>
            <Support />
        </div>
    </div>

    </div>
  )
}
