import { Outlet } from 'react-router-dom';
import './App.less';
import React from 'react'

function App() {
  return (
    <div className="App">
      {/* App children: */}
      <Outlet />
    </div>
  );
}

export default App;
