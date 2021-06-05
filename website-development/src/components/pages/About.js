import React from 'react';
import Vmc from './inc/Vmc';

function About(){
    return(
        <div>
          <section className="py-4 bg-info">
            <div className="container">
              <div className="row">
                <div className="col-md-8 my-auto"> 
                  <h4>About Us</h4>
                </div>

                <div className="col-md-8 my-auto">
                  <h6 className="float-end">
                    Home / About Us
                  </h6>
                </div>
              </div>
            </div>
          </section>


          <section className="section bg-c-light border-bottom">
            <div className="container">
              <h5 className="main-heading">Our Company</h5>
              <div className="underline"> </div>
                <p>
                Lorem Ipsum has been the industry's standard dummy text 
                          ever since the 1500s,Lorem Ipsum has been the industry's standard dummy text 
                          ever since the 1500s,
                </p>
             
            </div>
          </section>
          <Vmc />
        </div>
    )
}
export default About;