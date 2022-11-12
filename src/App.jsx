
import './App.css';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login'
import PasswordRecreate from './components/Password-recreate/ReacreatePassword'
import { Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
<Route path='/signup'>
<Signup/>
</Route>
<Route path='/signin'>
  <Login/>
</Route>
<Route path='/password-forgot'>
  <PasswordRecreate/>
</Route>

    </div>
  );
}

export default App;
