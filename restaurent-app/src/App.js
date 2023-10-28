
import './App.css';
import MainComponet from './components/MainComponet';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <MainComponet/>
     </BrowserRouter>
    </div>
  );
}

export default App;
