import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import List from './components/List';
import Detail from './components/Detail';
import { Route, Switch } from 'react-router-dom';
import { randomizer } from './utils/utils';
import { colors } from './data/colors';
import randomColor from 'randomcolor';

const App = () => {
  const [allColors, setAllColors] = useState(colors);
  const [nextRandomColor, setNextRandomColor] = useState(randomizer(colors));
  const [isLoading, setIsLoading] = useState(false);

  const getRandom = () => {
    let result = randomizer(allColors);
    setNextRandomColor(result);
  };

  const getColors = async () => {
    const randoms = await randomColor({ count: 120 });
    const randomColors = randoms.map(color => {
      return { code: color };
    });
    return randomColors;
  };

  const filterColor = async color => {
    color === 'gray' ? (color = 'monochrome') : color;
    color === 'brown' ? (color = '#964b00') : color;
    const choice = await randomColor({ count: 120, hue: `${color}` });
    const hues = choice.map(color => {
      return { code: color };
    });
    setAllColors(hues);
  };

  // Script to generate random colors on page load
  // Offline color data array renders as backup
  useEffect(async () => {
    setIsLoading(true);
    const newColors = await getColors();
    newColors ? setAllColors(newColors) : setAllColors(colors);
    setIsLoading(false);
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <main className="grid-container">
          <Sidebar
            filterColor={filterColor}
            getRandom={getRandom}
            nextRandomColor={nextRandomColor}
          />
          <Switch>
            <Route exact path="/color/:hexId">
              <Detail />
            </Route>
            <Route path="/">
              {isLoading ? (
                'Loading.... please wait'
              ) : (
                <List colors={allColors} />
              )}
            </Route>
          </Switch>
        </main>
      </div>
    </>
  );
};

export default App;
