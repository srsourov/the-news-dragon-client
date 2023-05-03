import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat exercitationem similique nihil, earum sed a alias perferendis consequuntur. Aliquid vitae tenetur voluptate temporibus ea dolor sunt, blanditiis necessitatibus veniam beatae?</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;