import React from 'react'
import { Card } from 'react-bootstrap'

const Comments = () => {
    return (
        <div>
            <h2>Opiniones de clientes</h2>
            <>
            <br></br>
                <Card style={{ width: '28rem' }}>
                    <Card.Header>3 weeks ago</Card.Header>
                    <Card.Body>
                    <img src="https://i.ibb.co/tHkJzHV/Ellipse-15.png" alt="Ellipse-15" width="100" />
                        <Card.Title>Jimmy Robinson</Card.Title>
                        
                        <Card.Text>
                             Bought this for my daughter January 2017. (Wisconsin). She loves it. However it broke after 18 months. She wants another and I’ll be ordering the newest version for her. She uses it with an iPhone 8 Plus with a case that holds 4-5 credit card-type cards. So it’s bulky, yet I t held the phone securely. So I think it is
                                   
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />


                <Card  style={{ width: '28rem' }}>
                    <Card.Header>1 week ago</Card.Header>
                    <Card.Body>
                    <img src="https://i.ibb.co/pfTG0Gq/Ellipse-15-1.png" alt="Ellipse-15-1" width="100"/>
                        <Card.Title>Jerry Springfield</Card.Title>
                        <Card.Text>
                        Works as it should. It was fairly easy to install, just make sure the dashboard is clean. I have a curved dashboard so I was worried about it coming off when the car started moving about. But I’m happy to report that I’ve been driving around with my phone in it for around a month and no movement. Very useful, and feels super sturdy
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
           </>
        </div>
    )
}

export default Comments