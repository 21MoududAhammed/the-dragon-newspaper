import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import {FaArrowLeft } from "react-icons/fa";
import EditorsInsides from '../EditorsInsides/EditorsInsides';

const News = () => {
    const news = useLoaderData();
    const {_id,title,author,details,image_url,rating,total_view,category_id} = news;
    return (
        <div>
            <Card >
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                <Link to={`/category/${category_id}`}><Button variant="danger"><FaArrowLeft></FaArrowLeft>All News In This Category</Button></Link>
                </Card.Body>
        </Card>
        <EditorsInsides></EditorsInsides>
        </div>
       
    );
};

export default News;