import React from 'react';
import { Helmet } from 'react-helmet';
import './environment.css';
import Navbar from '../../navbar/navbar';
import Support from '../../support/support';

export default function environment() {
  return (
    <div>

      <Helmet>
        <title>Bhoomi Seva | Environment</title>
      </Helmet>

      <div className="env-bg">
        <div style={{"background": "rgba(0, 0, 0, 0.1)", "height": "75vh"}}>
          <Navbar />

          <h1 className='banner-section-title'>
            Bhoomi Seva for <br />
            Environment.
          </h1>
          <div style={{"margin-left": "2%", "margin-top": "1.5%"}}>
            <button className="rounded-orangeBtn" style={{"padding": "0.8% 2.5%"}}>
              Donate
            </button>
            <button className="rounded-whiteBtn" style={{"padding": "0.8% 2.5%", "margin-left": "1%"}}>
              Join Initiative
            </button>
          </div>
        </div>
      </div>

      <div className="row">


        <div className="col-sm-8">
          <h1 className='page-title'>Environment</h1>
          <h1 class="text-content" style={{"font-size": "1.2rem", "text-align": "justify", "padding": "2% 4%", "marginTop": "5%"}}>
                            Today, fertility of soil has depleted due to the use of chemical fertilizers all over the world. <br /><br /><br />
                            <ul><li> By 2050, 90% of the Earth’s Soils could be degraded  unless we act now(UNCCD, 2020)</li></ul><br />
                            <ul><li>Food production could fall by 30% in 20 years if soil extinction is not prevented(World Economic Forum)</li></ul><br />
                            <ul><li>We only have 60 years of Soil Left(UN Food & Agriculture Organization)</li></ul><br />
                            <ul><li>52% of World’s Agricultural Soils already degraded (UN Food & Agriculture Organization)</li></ul><br /><br />

                            The occupation of farming is the most noble occupation in the world. We get food on our table everyday, because some farmers have grown these crops in their fields. We should not take it lightly. Such farmers in my opinion should lead a good life. But, it is not so. Today, farmers are in distress and many have committed suicide not able to sustain livelihood.<br /><br />

                            Bhoomi Seva intends to improve the livelihood of farmers by helping them switch to agroforestry and organic farming which has proven to be more lucrative. In an attempt to encourage farmers to switch to agroforestry or natural farming, Bhoomi Seva provides training to the farmers, and also donates cows to the marginal farmers.<br />
          </h1>
        </div>

        <div className="col-sm-4">
          <Support />
        </div>


      </div>

    </div>
  )
}
