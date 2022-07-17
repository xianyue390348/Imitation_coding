import { Outlet } from 'react-router-dom';
import './App.less';

function App(props) {
  return (
    <div className="App">
      {/* App children: */}
      <Outlet />
    </div>
  );
}

export default App;
