import React from 'react'
import { Link } from 'react-router-dom';
import { CardBody, Card } from 'reactstrap';

const Webinar = () => {

    return(

        <div className="pt-5 pb-5" data-aos="fade-up" data-aos-delay="600" >
            <h2 align="center">
                Webinar Event
            </h2>
            <Card className="bg-dark">
                <CardBody style={{textAlign:"left"}}>
            <p><h3>PYTHON WITH <br/> ARTIFICAL INTELLIGENCE</h3>
                <br/><br/>
                Date: 12th March 2020<br/>
                Timing: 11:00 am
                <br/><br/>
                Note: Participants will be awarded with Certificate
                </p>
                </CardBody>
                <div align="center" className="pt-4 pb-4">
                    <Link className="btn btn-primary" to="/registerwebinar/">Register YourSelf</Link>
                </div>
            </Card>
        </div>
    )
}

export default Webinar