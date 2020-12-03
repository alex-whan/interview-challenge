import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import List from './components/List';
import Detail from './components/Detail';
import { Route, Switch } from 'react-router-dom';
// import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div className="App">
        <Header />
        <main className="grid-container">
          <Sidebar />
          <Switch>
            <Route exact path="/color/:hexId">
              <Detail />
            </Route>
            <Route path="/">
              <List />
            </Route>
          </Switch>
        </main>
      </div>
    </>
  );
};

export default App;
