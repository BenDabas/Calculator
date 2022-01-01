import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';
import ApplicationRoutes from './components/ApplicationRoutes';
import MenuPage from './components/menuPage/MenuPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <MenuPage />
        <ApplicationRoutes />
    </div>
    </BrowserRouter>
  );
}

export default App;
