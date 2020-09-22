import React from 'react';
import PasswordChangeForm from '../PasswordChange';

import { withAuthorization } from '../Session';

const Account = () => (
    <div>
        <h1>Account</h1>
        <PasswordChangeForm />
    </div>
)

const condition = authUser => !!authUser

export default withAuthorization(condition)(Account);