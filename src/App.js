import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import List from './components/List';
// import Footer from './components/Footer';
import Detail from './components/Detail';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Switch>
        <Route exact path="/color/:hexId">
          <Detail />
        </Route>
        <Route path="/">
          <List />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
