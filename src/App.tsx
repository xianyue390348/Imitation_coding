import { Outlet } from 'react-router-dom';
import './App.less';

function App() {
  return (
    <div className="App">
      {/* App children: */}
      <Outlet />
    </div>
  );
}

export default App;
