import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Myvisaapp = () => {
    const loadedVisa = useLoaderData();
    // const hand
    return (
        <div>
            <h1>Hello I am from my Visas application</h1>
        </div>
    );
};

export default Myvisaapp;