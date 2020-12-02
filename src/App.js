import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import List from './components/List';
import Footer from './components/Footer';
import Detail from './components/Detail';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

const App = () => {
  // const getCode = () => {

  // }

  // exact path="/detail/:hexcode"

  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Switch>
        <List />
        <Route exact path="/detail/:hexcode">
          <Detail />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
