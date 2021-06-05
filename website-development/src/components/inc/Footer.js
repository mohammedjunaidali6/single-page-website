import React from 'react'
import { Link } from 'react-router-dom'

function Footer(){
    return(
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company Information</h6>
                        < hr/>
                        <p className="text-white">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        It has roots in a piece of classical Latin literature from 45 BC, 
                        making it over 2000 years old.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        < hr/>
                        <div><Link to ="/">Home</Link></div>
                        <div><Link to ="/about">About</Link></div>
                        <div><Link to ="/">Contact</Link></div>
                        <div><Link to ="/">Blog</Link></div>
                    </div>
                    <div className="col-md-4 ">
                    <h6> Contact Information</h6>
                    < hr/>
                    <div><p className="text-white-mb-1 text-white">#64, Hyderabad Telangana India.</p></div>
                    <div><p className="text-white-mb-1 text-white">+91 9701303201</p></div>
                    <div><p className="text-white-mb-1 text-white">+91 9701303201</p></div>
                    <div><p className="text-white-mb-1 text-white">junaidali1507@gmail.com</p></div>
                    
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer;