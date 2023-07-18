import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBookmark, FaShareAlt, FaEye, FaRegStar, FaStar} from "react-icons/fa";
import Rating from 'react-rating';


const NewsCard = ({news}) => {
    const {_id,title,author,details,image_url,rating,total_view} = news;
    
    return (
    <Card className=" mb-5">
        <Card.Header className='d-flex align-items-center'>
        <Image className='me-2' style={{height:'40px'}} src={author.img} roundedCircle />
        <div className='flex-grow-1'>
            <h6 className='m-0' >{author.name}</h6>
            <p  className='m-0'><small>{moment(author.published_date).format('yyy-MM-DD')}</small></p>
        </div>
        <div className='d-flex align-items-center'>
            <p className='me-2'>< FaBookmark/></p>
            <p><FaShareAlt/></p>
        </div>
        </Card.Header>
        <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {details.length < 250 ? <p>{details}</p>: <p>{details.slice(0,250)}<Link to={`/news/${_id}`}>...see more</Link></p>}
                </Card.Text>
            </Card.Body>

      <Card.Footer className="text-muted d-flex align-items-center">
        <div className='flex-grow-1'>
            <Rating
                placeholderRating={rating?.number}
                readonly
                emptySymbol={<FaRegStar></FaRegStar>}
                placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                fullSymbol={<FaStar></FaStar>}
            ></Rating>
        
            <span>{rating?.number}</span>
        </div>
        <div>
            <p><FaEye></FaEye><span className='ms-2'>{total_view}</span></p>
        </div>
      </Card.Footer>
    </Card>
    );
};

export default NewsCard;