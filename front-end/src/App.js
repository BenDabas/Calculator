import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';
import ApplicationRoutes from './components/ApplicationRoutes';

function App() {
  return (
    <div className="App">
        <ApplicationRoutes />
    </div>
  );
}

export default App;
