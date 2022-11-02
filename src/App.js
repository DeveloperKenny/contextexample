import React from 'react';

import { peopleContext, jobs} from './datasheet';
import  Police  from './Police';
import Teacher from './Teacher';
import './App.css';

function App() {
  return (
          <div>
            <peopleContext.Provider value={jobs} >
            <Police />
            <Teacher />
            </peopleContext.Provider>


          </div>
  );
}

export default App;
