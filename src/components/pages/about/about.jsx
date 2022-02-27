import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../navbar/navbar';
import './about.css'

export default function about() {
  return (
    <div>
        <Helmet>
            <title>Bhoomi Seva | About us</title>
        </Helmet>

        <div className="about-bg">
        <div style={{"background": "rgba(0, 0, 0, 0.04)", "height": "75vh"}}>
          <Navbar />

          <h1 className='banner-section-title' style={{"font-size": "6rem", "margin-top": "15%"}}>
            About us.
          </h1>
          <div style={{"margin-left": "2%", "margin-top": "1.5%"}}>
            <button className="rounded-orangeBtn" style={{"padding": "0.8% 2.5%"}} onClick={event =>  window.location.href='/bhoomiseva/#/donate'}>
              Donate
            </button>
            <button className="rounded-whiteBtn" style={{"padding": "0.8% 2.5%", "margin-left": "1%"}} onClick={event =>  window.location.href='/bhoomiseva/#/get-involved'}>
              Join Initiative
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
