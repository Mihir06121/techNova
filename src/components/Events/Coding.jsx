import React, { useState} from 'react'

import { Collapse, Button, CardBody, Card, Table } from 'reactstrap';

const Technical = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(

        <div className="pt-5 pb-5">
            <h2 align="center">
                Coding Event
            </h2>
            <div>
                About this event
            </div>
            <Button color="primary" onClick={toggle} style={{ margin: '5%' }}>Know More</Button>
                <Collapse isOpen={isOpen} align="center">
                    <Card className="bg-dark">
                        <CardBody style={{textAlign:"left"}}>
                        </CardBody>
                    </Card>
                        <Button color="outline-primary" onClick={toggle} style={{ margin: '5%' }}>Close</Button>
            </Collapse> 
        </div>
    )
}

export default Technical