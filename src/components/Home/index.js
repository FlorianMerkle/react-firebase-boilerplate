import React from 'react';
import { withAuthorization } from '../Session';

const HomePage = () => (
    <div>
        <h1>Home</h1>
        <p>This Page is accessible by every signed in User</p>
    </div>
)

const condition = authUser => !!authUser
//function condition (authUser) { return(!!authUser)}
export default withAuthorization(condition)(HomePage);