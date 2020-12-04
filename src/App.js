import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import List from './components/List';
import Detail from './components/Detail';
import { Redirect, Route, Switch } from 'react-router-dom';
import { randomizer } from './utils/utils';
import { colors } from './data/colors';
import randomColor from 'randomcolor';

const App = () => {
  const [allColors, setAllColors] = useState(colors);
  const [nextRandomColor, setNextRandomColor] = useState(randomizer(colors));
  const [isLoading, setIsLoading] = useState(false);

  const getRandom = async () => {
    let result = await getColors();
    let randomized = randomizer(result);
    setNextRandomColor(randomized);
  };

  const getColors = async () => {
    const randoms = await randomColor({ count: 120 });
    const randomColors = randoms.map(color => {
      return { code: color };
    });
    return randomColors;
  };

  // Can accept either a hue name or hex code string
  const filterColor = async color => {
    color === 'gray' ? (color = 'monochrome') : color; // gray hues
    color === 'brown' ? (color = '#964b00') : color; // brown hues
    const choice = await randomColor({ count: 120, hue: `${color}` });
    const hues = choice.map(color => {
      return { code: color };
    });
    setAllColors(hues);
  };

  const formHandler = value => {
    value[0] !== '#' ? (value = `#${value}`) : value;
    const filtered = allColors.filter(
      color => value.toLowerCase() === color.code
    );

    // Cannot currently "force" a redirect when finding the correct hex code
    return filtered.length ? (
      <Redirect to={`/color/${filtered[0].code}`} />
    ) : (
      alert('No results found.')
    );
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
        <Header formHandler={formHandler} />
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
                <h2>Loading.... please wait</h2>
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
