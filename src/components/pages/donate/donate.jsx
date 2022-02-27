import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../navbar/navbar';
import './donate.css';
import { email, phone } from '../../../App';
import qr from '../../../images/donate/QR.jpeg';
import upi from '../../../images/donate/upi.png';
import gpay from '../../../images/donate/gpay.png';
import paytm from '../../../images/donate/paytm.png';

export default function donate() {
  return (
    <div>
        <Helmet>
            <title>Bhoomi Seva | Donate</title>
        </Helmet>

        <div className="donate-bg">
        <div style={{"background": "rgba(0, 0, 0, 0.02)", "height": "75vh"}}>
          <Navbar />

          <h1 className='banner-section-title' style={{"font-size": "5.5rem"}}>
            Donate to <br />
            Bhoomi Seva.
          </h1>
        </div>
      </div>

      <div>
        <h1 className='page-title' style={{"fontSize": "4rem"}}>Donate</h1>
        <div className="row" style={{"padding": "2% 5%"}}>
            <div className="col-sm-8">
                <p style={{"font-size": "1.4rem"}}>
                If you want a donation to be used for a specific purpose, Kindly add (CowDonation/Education/FarmersSupport/OrphanageMeal/Any) in the comment while transferring the amount.
                </p>
                <br />
                <p style={{"font-size": "1.4rem"}}>
                You can get confirmation of transferred amount by sending whatsApp message to Bhoomi Seva({phone}) or send mail to {email}
                </p>

                <div style={{"padding": "2% 4%", "marginTop": "5%"}}>
                    <div style={{"box-shadow": "var(--hover)", "padding": "2% 5%"}}>

                        <div className="row">
                            <div className="col-sm-7">
                                <img src={qr} alt="qr code" className='img-fluid' />
                            </div>
                            <div className="col-sm-5 my-auto">
                                <h1 style={{"line-height": "60px"}}>Pay to <mark>lkarle@fbl</mark> using this QR code</h1>
                            </div>
                        </div>

                        <div className="row" style={{"margin-top": "15%"}}>
                            <div className="col-sm-7 mx-auto text-center">
                                <img src={upi} alt="qr code" className='img-fluid' style={{"width": "50%"}} />
                            </div>
                            <div className="col-sm-5 my-auto">
                                <h3>9900103178@ybl</h3>
                            </div>
                        </div>

                        <div className="row" style={{"margin-top": "8%"}}>
                            <div className="col-sm-7 mx-auto text-center">
                                <img src={paytm} alt="qr code" className='img-fluid' style={{"width": "50%"}} />
                            </div>
                            <div className="col-sm-5 my-auto">
                                <h3>{phone}</h3>
                            </div>
                        </div>

                        <div className="row" style={{"margin-top": "8%"}}>
                            <div className="col-sm-7 mx-auto text-center">
                                <img src={gpay} alt="qr code" className='img-fluid' style={{"width": "100%"}} />
                            </div>
                            <div className="col-sm-5 my-auto">
                                <h3>{phone}</h3>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className="col-sm-4">

            </div>
        </div>
      </div>

    </div>
  )
}
