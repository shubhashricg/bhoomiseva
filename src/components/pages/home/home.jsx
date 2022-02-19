import React from 'react';
import './home.css';
import Navbar from '../../navbar/navbar';
import Footer from '../../footer/footer';
import logo from '../../../images/logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faSchool, faHouseChimneyUser, faChevronDown, faMapMarkerAlt, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import cowDonation from '../../../images/recent-events/cowdonation.jpg';
import mealSponsor from '../../../images/recent-events/mealsponsor.jpg';
import scholarship from '../../../images/recent-events/scholarship.jpg';
import farmerTraining from '../../../images/events/farmerTraining.jpeg';

export default function home() {
  return (
    <div className="home-banner">
      <div className='banner-img'>
        <Navbar />

        <div className="home-banner-text">
          <div className="row">


            <div className="col-sm-6">
              <h1 className='home-banner-text welcome-text'> 
                Welcome to
              </h1>
              <h1 className="home-banner-text" style={{"font-size": "5.8rem", "font-weight": "700"}}>
                Bhoomi Seva
              </h1>
              <div className="home-banner-btnHolder" style={{"margin-left": "2%", "margin-top": "2%"}}>
                <button className="rounded-orangeBtn">
                  Donate
                </button>
                <button className="rounded-whiteBtn" style={{"margin-left": "1%"}}>
                  Contact
                </button>
              </div>
            </div>

            <div className="col-sm-6 mx-auto text-end">
              <img src={logo} alt="bhoomi seva logo" className='img-fluid ms-auto' style={{"width": "45%", "marginTop": "30%", "marginRight": "10%"}} />
            </div>
          </div>
          
        </div>

        </div>

        <section className="what-we-do">
          <h1 className='section-title fancy-title mx-auto text-center'>WHAT WE DO?</h1>
        <div class="row card-container" style={{"padding": "2%"}} >
                <div class="col-sm-4 card-container-ind">
                    <div class="card">
                        <div class="card-body">
                          <h5 class="card-title"><FontAwesomeIcon icon={faSeedling} size="lg" style={{"color": "rgb(11, 182, 11)"}} />  Environment</h5>
                          <p class="card-text">
                            <ul><li>Support and training to farmers to switch to agroforestry and / or natural farming<br /></li></ul>
                            <ul><li>Cow donations to marginal farmers who want to switch to agroforestry.</li></ul>
                          </p>
                          <div class="mx-auto text-center" >
                            <a href="/bhoomiseva/#/environment" class="btn mx-auto text-center redBtn" >Read more</a>
                          </div>
                        </div>
                      </div>
                </div>
                <div class="col-sm-4 card-container-ind">
                    <div class="card">
                        <div class="card-body">
                          <h5 class="card-title"><FontAwesomeIcon icon={faSchool} size="lg" style={{"color": "rgb(146, 142, 142)"}} /> Education</h5>
                          <p class="card-text" >
                            <ul><li>Scholarships for the Merit Rural Students<br /></li></ul>
                            <ul><li>Free Online coaching for 10th grade Students<br /></li></ul>
                            <ul><li>Free Online coaching for entrance exam tests for Jawahar Navodaya Vidyalaya admission for 6th grade<br /></li></ul>
                            <ul><li>External Scholarship opportunities guidance for rural merit students<br /></li></ul>
                          </p>
                          <div class="mx-auto text-center">
                            <a href="/bhoomiseva/#/education" class="btn mx-auto text-center redBtn">Read more</a>
                          </div>
                        </div>
                      </div>
                </div>
                <div class="col-sm-4 card-container-ind">
                    <div class="card">
                        <div class="card-body">
                          <h5 class="card-title"><FontAwesomeIcon icon={faHouseChimneyUser} size="lg" style={{"color": "rgb(202, 75, 36)"}} /> Orphanage Support</h5>
                          <p class="card-text">
                           <ul><li>Sponsor a meal for the orphanage kids for around Rs 6000<br /></li></ul>
                            <ul><li>School/College fees support for the kids at times<br /></li></ul>
                            <ul><li>Donation of laptops so that the kids can take online classes<br /></li></ul>
                            <ul><li>Donation of bicycles <br /></li></ul>
                            <ul><li>Donation of Used clothes, foot wear, stationary items, furniture etc.<br /></li></ul>
                            
                          </p>
                          <div class="mx-auto text-center" >
                            <a href="/bhoomiseva/#/orphanage-support" class="btn mx-auto text-center redBtn" >Read more</a>
                          </div>
                        </div>
                      </div>
                </div>
            </div>
        </section>

        <div className="recent-events">
        <h1 class="fancy-title mx-auto text-center" style={{"color": "var(--orange)"}}>Recent Events</h1>
            <h1 class='title mx-auto text-center'>AT BHOOMI SEVA</h1>

            <div class="row mx-auto text-center" style={{"margin-top": "5%"}}>
              
                <div class="col-sm-4">
                  <div class="card">
                    <img src={cowDonation} class="card-img-top"  alt="cow donation" />
                    <div class="card-body">
                      
                      <div>
                          <button id='dd1' class="dropdown-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                          <FontAwesomeIcon icon={faChevronDown} />
                          </button>
                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <p class="mx-auto text-break">Cow Donation to a Woman Farmer - Sunitha from Kabbalu, Kanakapura</p>
                          </div>
                        </div>
                      </div>


                    </div>
                </div>
                </div>

                <div class="col-sm-4">
                    <div class="card">
                        <img src={scholarship} class="card-img-top" alt="scholarship" />
                        <div class="card-body">

                          <div>
                            <button id='dd-2' class="dropdown-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <FontAwesomeIcon icon={faChevronDown} />
                            </button>
                          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              <p class="mx-auto text-break">Scholarship/School fees distribution to students </p>
                            </div>
                          </div>
                        </div>

                        </div>
                    </div>
                </div>

                <div class="col-sm-4">
                    <div class="card">
                        <img src={mealSponsor} class="card-img-top" alt="meal sponsor" />
                        <div class="card-body">

                          <div>
                            <button id='dd-3' class="dropdown-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              <FontAwesomeIcon icon={faChevronDown} />
                            </button>
                          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              <p class="mx-auto text-break">Meal Sponsored in Sri Krishnashraya orphanage during Balipadyami </p>
                            </div>
                          </div>
                        </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className="events-ongoing" style={{"marginTop": "2%"}}>
        <h1 class="fancy-title mx-auto text-center" style={{"color": "var(--orange)"}}>Initiatives Ongoing</h1>
            <h1 class='title mx-auto text-center'>AT BHOOMI SEVA</h1>

            <div class="row" style={{"padding": "2% 5%"}}>
                <div class='col-sm-4'>
                    <div class="card">
                        <img src={farmerTraining} class="card-img-top" alt="farmers training" />
                        <div class="card-body">
                          <h5 class="card-title">Farmers’ training in agroforestry and natural farming</h5>
                          <h5 class='location'><FontAwesomeIcon icon={faMapMarkerAlt} /> Chirantana School, Kabbalu, Kanakapura</h5>
                          <p class="card-text" style={{"textAlign": "left"}}>Farmers’ training in agroforestry and natural farming is organized on 16th and 17th of April in Chirantana School, Kabbalu, Kanakapura to spread awareness among farmers. </p>
                          <a href="/event-1" class="link">Learn more <FontAwesomeIcon icon={faChevronRight} size='xs' /></a>
                        </div>
                    </div>
                </div>

                <div class='col-sm-4'>

                </div>

                <div class='col-sm-4'>

                </div>
            </div>

            <div class="mx-auto text-center">
                <button class="btn redBtn">VIEW EVENTS</button>
            </div>
        </div>

        <Footer />

    </div>
  )
}
