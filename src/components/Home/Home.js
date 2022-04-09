import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h1>this is home</h1>
            <p>Current user: {user ? user.displayName : 'no body'}</p>
        </div>
    );
};

export default Home;