import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import Todos from './components/Todos';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todos/>
      </div>
    </Provider>
  );
}

export default App;
