import './App.css';
import SignUpModal from './SignUpModal';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();
function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <SignUpModal />
      </div>
    </Provider>
  );
}

export default App;
