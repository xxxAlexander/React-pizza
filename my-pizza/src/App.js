
import { Route } from 'react-router-dom';
import {Main} from './pages/Main'
function App() {
  return (
    <div className="App">
      <Route path="/" component={Main} exact />
    </div>
  );
}

export default App;
