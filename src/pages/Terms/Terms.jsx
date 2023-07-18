import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <div>
            <h1>Terms and conditions </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fuga perspiciatis laboriosam voluptatibus assumenda error facilis quod cumque sed laudantium?
            </p>
            </div>
            <div>
                <Link to="/register">Go to Register</Link>
            </div>
        </div>

    );
};

export default Terms;