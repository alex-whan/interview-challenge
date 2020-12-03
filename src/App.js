import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import List from './components/List';
import Footer from './components/Footer';
import Detail from './components/Detail';
import { Route, Switch } from 'react-router-dom';
import { randomizer } from './utils/utils';
import { colors } from './data/colors';

const App = () => {
  console.log('randomizer in app', randomizer);

  return (
    <div className="App">
      <Header />
      <Sidebar handler={randomizer} />
      <Switch>
        <Route exact path="/color/:hexId">
          <Detail />
        </Route>
        <Route path="/">
          <List />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
