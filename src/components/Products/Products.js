import React from 'react';
import useFirebase from '../../hooks/useFirebase';
const Products = () => {
    const { user } = useFirebase();
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