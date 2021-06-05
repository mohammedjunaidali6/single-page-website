import React from 'react';

function Contact(){
    return(

          <div>
              <section className="py-4 bg-info">
            <div className="container">
              <div className="row">
                <div className="col-md-8 my-auto"> 
                  <h4>Contact Us</h4>
                </div>

                <div className="col-md-8 my-auto">
                  <h6 className="float-end">
                    Home / Contact Us
                  </h6>
                </div>
              </div>
            </div>
          </section>


        <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                      <h6>Contact Form</h6>
                      <hr/>
                      <div className="form-group"> 
                        <label className="mb-1" for="">Full Name</label>
                        <input type="text" className="form-control" placeholder="Enter Full Name" />
                      </div>
                      <div className="form-group"> 
                        <label className="mb-1" for="">Phone Number</label>
                        <input type="text" className="form-control" placeholder="Enter Your Number" />
                      </div>
                      <div className="form-group"> 
                        <label className="mb-1" for="">Email Number</label>
                        <input type="text" className="form-control" placeholder="Enter Your Email" />
                      </div>
                      <div className="form-group"> 
                        <label className="mb-1" for="">Message</label>
                        <textarea rows="3" className="form-control" placeholder="Type your message..."></textarea>
                      </div>
                      <div className="form-group py-3"> 
                        <button type="button" className="btn btn-primary w-100">Send Message</button>
                      </div>
                  </div>
                  <div className="col-md-6 border-start">

                  <div className="main-heading">Address Information</div>
                  <div className="underline"></div>
                  <p>
                    #xx, Hyderabad Telangana - 500016, India
                  </p>
                  <p>
                    phone: +91 9701303201
                  </p>
                  <p>
                    Email: junaidali1507@gmail.com
                  </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
        </section>
        </div>
    )
}
export default Contact;