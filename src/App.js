import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import List from './components/List';
import Detail from './components/Detail';
import { Route, Switch } from 'react-router-dom';
import { randomizer } from './utils/utils';
import { colors } from './data/colors';

const App = () => {
  const [allColors, setAllColors] = useState(colors);
  const [randomColor, setRandomColor] = useState(randomizer(colors));

  const getRandom = () => {
    let result = randomizer(allColors);
    setRandomColor(result);
  };

  return (
    <>
      <div className="App">
        <Header />
        <main className="grid-container">
          <Sidebar getRandom={getRandom} randomColor={randomColor} />
          <Switch>
            <Route exact path="/color/:hexId">
              <Detail />
            </Route>
            <Route path="/">
              <List colors={allColors} />
            </Route>
          </Switch>
        </main>
      </div>
    </>
  );
};

export default App;
