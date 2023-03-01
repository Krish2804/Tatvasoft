import React from 'react';
import Title from './Title';

const Home = () => {

    const t = ['Project 1','First project','Begining project'];

    return (
        <div>
            <Title t0={t[0]} t1={t[1]} t2={t[2]}/>
            <Title t0={t[0]} t1={t[1]} t2={t[2]}/>
            <Title t0={t[0]} t1={t[1]} t2={t[2]}/>
            <div>This is home page.</div>
        </div>
    );
}

export default Home;