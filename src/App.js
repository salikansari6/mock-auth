import './App.css';
import Login from './Login'
import DashBoard from './DashBoard';
import LoginCallback from './LoginCallback';
import Route from './Route';


function App() {
  return (
      <div className="App">
          <Route  path="/">
            <Login/>
          </Route>  
          <Route  path='/dashboard'>
            <DashBoard/>
          </Route>
          <Route path="/login/callback">
            <LoginCallback/>
          </Route>
      </div>
  );
}

export default App;
