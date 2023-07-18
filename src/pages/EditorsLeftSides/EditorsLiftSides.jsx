import React from 'react';
import first from '../../assets/editorsInsight1.png'
import second from '../../assets/editorsInsight2.png'
import third from '../../assets/editorsInsight3.png'
import { Card, Col, Row } from 'react-bootstrap';

const EditorsLiftSides = () => {
    return (
        <div>
        <Row xs={1} md={1} className="g-4">
      
            <Col>
            <Card>
                <Card.Img variant="top" src={first} />
                <Card.Body>
                <Card.Title>Editorial</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, mollitia.
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
                <Card.Img variant="top" src={second} />
                <Card.Body>
                <Card.Title>Editorial 2</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, mollitia.
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
                <Card.Img variant="top" src={third} />
                <Card.Body>
                <Card.Title>Editorial 3</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, mollitia.
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
    </Row>
        </div>
    );
};

export default EditorsLiftSides;