import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../navbar/navbar';
import './getInvolved.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Support from '../../support/support';
import Button from '@mui/material/Button';
import divider from '../../../images/divider.svg';
import extendBG from '../../../images/contact/extendBG.png';
import SecctionSupport from '../../sectionSupport/sectionSupport';

/*added by shubhashree*/

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class app extends React.Component{
	
	
	constructor(props)
	
	{
		super(props);
		this.state= { Phno:'',Emailid:'',category:'',category1:'',category2:'',category3:'', /*initiliazing all the required inputs*/
					  Phno1:'',Emailid1:'',ct1:'',ct2:'',ct3:''};
	
		
		this.addFormData = this.addFormData.bind(this);
				
	}
	onSubmit(event)
	{
			this.onSubmit = this.onSubmit.bind(this);
    }

onChange (event)

{ 
		/* to set phone number and emailid for subsrcibers*/
  		if( !(event.target.type == "number")) 
		{if(typeof event.target.value === 'string')
		{
			
		 this.setState({Emailid: event.target.value});
		 
		}
		}
		else 
		{	 this.setState({Phno: event.target.value});
			 
		}
 		
}

handleChange (event)

{ 		/* to set phone number and emailid for unsubsrcibers*/
       
  		if( !(event.target.type == "number"))
		{if(typeof event.target.value === 'string')
		{
			
		 this.setState({Emailid1: event.target.value});
	
		}
		}
		else 
		{	 this.setState({Phno1: event.target.value});
			 
		}
 		
}
onClick(event)
{  
		
				  this.setState({category: "all"});

  
}
/* to set category values */
setFS(event)
{  
 this.setState({category1:"FS"});
 this.setState({ct1:event.target.checked});

 
}
setED(event)
{ this.setState({category2:"ED"});
  this.setState({ct2:2});

    
}
setOS(event)
{ this.setState({category3:"OS"});
  this.setState({ct3:3});

    
}


	addFormData(evt)
	{ 
	
	 const fd = new FormData();
	
	fd.append('Ph_no',this.state.Phno);
	fd.append('Emailid',this.state.Emailid);
	fd.append('category',this.state.category);
	fd.append('category1',this.state.category1);
	fd.append('category2',this.state.category2);
	fd.append('category3',this.state.category3);
	 const testurl='http://localhost/getinvolvedphp/test.php';
	
	 axios.post(testurl,fd) 
	 .then((response)=>{
		alert("Thanks for subscribing to Bhoomi Seva");
	 })
	 .catch((error)=>{alert(error.request);
	 
	 });
	
	}

	deleteFormData(evt)
	{
		
		const fd1= new FormData();
		fd1.append('Ph_no',this.state.Phno1);
	   fd1.append('Emailid',this.state.Emailid1);
	  
	   fd1.append('ct1', this.state.ct1);
	   fd1.append('ct2', this.state.ct2);
	   fd1.append('ct3', this.state.ct3);
	   fd1.append('ct_type',this.state.ct_type);
	   
	   
		const deleteurl = "http://localhost/getinvolvedphp/delete.php";
		axios.post( deleteurl,fd1)
		.then((response)=>{
			alert( " Thanks for supporting BhoomiSeva");
		})
		.catch((error)=> {alert(error.request);
		});
	}
 

//export default function getInvolved() { //Commenting this as export is done at the end 
render(){
  return (
    <div className="app">

        <Helmet>
            <title>Bhoomi Seva | Get Involved</title>
        </Helmet>

        <div className="getInvolved-bg">
        <div style={{"background": "rgba(0, 0, 0, 0.2)", "height": "75vh"}}>
        <div>
          <Navbar />

          <h1 className='banner-section-title' style={{"fontSize": "5rem", "margin-top": "15%"}}>
            Get Involved <br />
            with Bhoomi Seva.
          </h1>
        </div>
        </div>
      </div>

      <h1 className='page-title' style={{"fontSize": "3.6rem"}}>Join the Initiative</h1>
      <img src={divider} className="img-fluid page-title-hr" alt="flower stick" />

    <div className="row" style={{"padding": "4%"}}>
        <div className="col-sm-7 form-bg" style={{"backgroundColor": "var(--lighter-bg)", "border-radius": "1rem", "padding": "4% 2%"}}>
            <h1 style={{"fontFamily": "var(--font-noto)", "color": "var(--wood)", "marginBottom": "8%"}}>Subscribe to Bhoomi Seva</h1>
        <form style={{"padding": "1% 7%"}} onSubmit={this.addFormData.bind(this)}>
            <div class="input-group mb-3">
                <span class="input-group-text" style={{"background-color":"var(--red-alphaBtn)"}} id="basic-addon1"> <FontAwesomeIcon icon={faPhone} style={{"color": "white"}} />  </span>
                <input type="number" class="form-control whatsappNumberInput" placeholder="Enter your whatsapp number" aria-label="Username" aria-describedby="basic-addon1" name="Phno"  onChange={this.onChange.bind(this)} />
            </div>
            <br />
			 <div class="input-group mb-3">
                <span class="input-group-text" style={{"background-color":"var(--red-alphaBtn)"}} id="basic-addon1"> <FontAwesomeIcon icon={faEnvelope} style={{"color": "white"}} />  </span>
                <input type="text" class="form-control whatsappNumberInput" placeholder="Enter your Email Id" aria-label="Username" aria-describedby="basic-addon1" name="Emailid"  onChange={this.onChange.bind(this)} />
            </div>
            <br />

            
            <div class="form-check" style={{"text-align": "left"}}>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" name="category1" id="category1" onClick={this.setFS.bind(this)}  />
                <label class="form-check-label" for="flexCheckDefault">
                    Farmer's support / Cow donation
                </label>
            </div>
            <div class="form-check" style={{"text-align": "left"}}>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" name="category2" id="category2" onClick={this.setED.bind(this)}  />
                <label class="form-check-label" for="flexCheckDefault">
                    Education
                </label>
            </div>
            <div class="form-check" style={{"text-align": "left"}}>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" name="category3" id="category3" onClick={this.setOS.bind(this)}  />
                <label class="form-check-label" for="flexCheckDefault">
                    Orphanage Support
                </label>
            </div>
            <br />
            <div className='mx-auto text-center'>
                <button variant="contained" size="medium" className="submitBtn" disableElevation>
                 Subscribe
                </button>
                <hr style={{"margin-top": "5%"}} />
                
                
            </div>
            
            

        </form>
		<div className='mx-auto text-center'>
               
                <hr style={{"margin-top": "5%"}} />
                
                <button style={{"margin-top": "5%"}} variant="outlined" className='learn-more-outline' size="medium" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Unsubscribe</button>
            </div>
		
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header" style={{"border": "none !important"}}>
                                        <h5 class="modal-title title mx-auto text-center" style={{"font-size": "1.8rem"}} id="staticBackdropLabel">Unsubscribe to Bhoomi Seva Initiatives.</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body" style={{"padding": "1% 15%"}}>
                                            <form style={{"padding": "10% 7%"}} onSubmit={this.deleteFormData.bind(this)}>
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" style={{"background-color":"var(--red-alphaBtn)", "color": "white"}} id="basic-addon1"><FontAwesomeIcon icon={faPhone} /></span>
                                                    <input type="number" class="form-control" placeholder="Enter your whatsapp number" aria-label="Username" aria-describedby="basic-addon1" name="Phno1"  onChange={this.handleChange.bind(this)} />
                                                </div>
												<div class="input-group mb-3">
                                                    <span class="input-group-text" style={{"background-color":"var(--red-alphaBtn)", "color": "white"}} id="basic-addon1"><FontAwesomeIcon icon={faEnvelope} /></span>
                                                    <input type="text" class="form-control" placeholder="Enter your Email ID " aria-label="Username" aria-describedby="basic-addon1" name="Emailid1"  onChange={this.handleChange.bind(this)} />
                                                </div>
                                                
                                                <div class="form-check" style={{"text-align": "left"}}>
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" name ='ct1' value="FS" onClick={this.setFS.bind(this)} />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                      Farmer's support / Cow donation
                                                    </label>
                                                </div>
                                                <div class="form-check" style={{"text-align": "left"}}>
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" name ='ct2' value="ED" onClick={this.setED.bind(this)} />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Education
                                                    </label>
                                                </div>
                                                <div class="form-check" style={{"text-align": "left"}}>
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" name ='ct2' value="OS" onClick={this.setOS.bind(this)}/>
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Orphanage Support
                                                    </label>
                                                </div>
                                                <div class="mx-auto text-center">
                                                    <button variant="contained" id="unsubscribe" type="submit" size="medium" className="submitBtn submit" disableElevation >
                                                        Unsubscribe
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    </div>
                                </div>

            

        </div>

        <div className="col-sm-5 mx-auto" style={{"margin-top": "-10%"}}>
            <Support />
        </div>
    </div>

    <SecctionSupport />

    </div>
  )
}


}


export default app ;

