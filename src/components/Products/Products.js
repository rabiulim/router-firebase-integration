import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)

const Products = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <div>
                <h2>Knock Knock ! who is there</h2>
                <h5>{user ? user.displayName : 'voooooooot'}</h5>
            </div>
        </div>
    );
};

export default Products;