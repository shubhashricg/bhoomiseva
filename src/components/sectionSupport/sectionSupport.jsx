import React from 'react';
import extendBG from '../../images/contact/extendBG.png';
import {IoIosArrowRoundForward} from 'react-icons/io';

export default function support() {
  return (
    <div>
        <section style={{"marginTop": "5%", "marginBottom": "5%"}}>
          <div>
            <img src={extendBG} className="img-fluid" alt="mountains"/>
            <div className="row" style={{"marginTop": "-8%"}}>
              <div className="col-sm-3">

              </div>
              <div className="col-sm-6 text-center" style={{"backgroundColor": "white", "padding-top": "2%"}}>
                <h1 className='text-center' style={{"color": "var(--wood)", "fontFamily": "var(--font-noto)", "fontSize": "3rem"}}>Support us.</h1>
                <a href="/bhoomiseva/#/donate" class="about-link text-center">DONATE <IoIosArrowRoundForward style={{"fontSize": "1.4rem"}} /></a>
                <br />
                <br />
                <p class="text-center" style={{"textAlign": "justify", "color": "var(--wood)", "padding": "1% 2%", "fontFamily": "var(--font-mono)", "fontSize": "1.2rem"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                </p>
                <br />
                <br />
              </div>
              <div className="col-sm-3">

              </div>
            </div>

            <div className="row" style={{"marginTop": "2%", "padding": "0% 5%"}}>
              <div className="col-sm-4 sectionSupportTitle">
                <h3 style={{"textAlign": "center", "color": "#968b6a", "fontFamily": "var(--font-noto)"}}>ENVIRONMENTAL <br /> CARE</h3>
                <hr className="hr-sec mx-auto" />
              </div>
              <div className="col-sm-4 sectionSupportTitle">
                <h3 style={{"textAlign": "center", "color": "#968b6a", "fontFamily": "var(--font-noto)"}}>EDUCATIONAL <br /> SERVICE</h3>
                <hr className="hr-sec mx-auto" />
              </div>
              <div className="col-sm-4 sectionSupportTitle">
                <h3 style={{"textAlign": "center", "color": "#968b6a", "fontFamily": "var(--font-noto)"}}>ORPHANAGE <br /> SUPPORT</h3>  
                <hr className="hr-sec mx-auto" />
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
