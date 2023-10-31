
import './App.css';
import MainComponet from './components/MainComponet';
import {BrowserRouter} from 'react-router-dom'
import myStore from './redux/store';
import {Provider} from 'react-redux'
function App() {
  return (
    <div className="App">
     <Provider store={myStore}>
     <BrowserRouter>
      <MainComponet/>
     </BrowserRouter>
     </Provider>
    </div>
  );
}

export default App;
