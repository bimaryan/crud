import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './layout/main';
import Create from './layout/create';
import Update from './layout/update';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/update/:id' element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
