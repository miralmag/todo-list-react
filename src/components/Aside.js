import React from 'react';
import '../styles/App.css';
import Fox from '../images/foxpc.png'

function Aside () {
    return (
    <aside className='aside'>
      <h1><span>get</span><span>shit</span><span>done</span></h1>
      <img alt='fox' src={Fox} />
    </aside>
    );
}

export {Aside}