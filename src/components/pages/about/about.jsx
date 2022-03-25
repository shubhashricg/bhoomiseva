import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../navbar/navbar';
import './about.css';
import lakshmi from '../../../images/about/LakshmiKarle.jpeg';
import divider from '../../../images/divider.svg';

export default function about() {
  return (
    <div>
        <Helmet>
            <title>Bhoomi Seva | About us</title>
        </Helmet>

        <div className="about-bg">
        <div class="overlay" style={{"background": "rgba(0, 0, 0, 0.04)", "height": "75vh"}}>
          <Navbar />

          <h1 className='banner-section-title' style={{"font-size": "6rem", "margin-top": "15%"}}>
            About us.
          </h1>

        </div>
      </div>

      <h1 className='page-title text-center' style={{"font-size": '4rem'}}><img src={divider} class="img-fluid" alt='flower stick' /> About us <img src={divider} class="img-fluid" alt='flower stick' /> </h1>

      <div className="row" style={{"padding": "5%"}}>
            <div className="col-sm-4 ms-auto">
              <div className='outer-photoframe'>
                <div className="photoframe">
                  <img src={lakshmi} alt="Lakshmi Karle" className='img-fluid lakshmi' />
                </div>
              </div>
            </div>
            <div className="col-sm-6 me-auto">
              <div style={{"backgroundColor": "rgb(212 184 149)", "padding": "4%"}}>
                  <h1 class="name">Lakshmi C Karle</h1>
                  <p className='about-detail'>
                  I am a social worker working towards rural development by helping them in education and training them in natural farming/agroforestry, and also help revive our environment in our own capacity along with my team.
                  I am a mother of a 9 year old boy and also working as a Software Engineer at an IT company.
                  </p>
              </div>
            </div>
          </div>

    </div>
  )
}
