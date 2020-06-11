import React from 'react';
import './App.css'
import Dinner from './Dinner';
import Head from './head';

function App() {
    return ( 
        <div className='App'>
            <Head day='MONDAY'/>
            <Dinner dishName='Biryani' sweetName='Kheer'/>
            <hr/>
            <Head day='TUESDAY'/>
            <Dinner dishName='Kharhai' sweetName='Rabri'/>
            {/* <Dinner></Dinner> */}
        </div>
    )

}
// PARENT COMPONENT

export default App