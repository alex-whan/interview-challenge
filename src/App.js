import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import List from './components/List';
import Detail from './components/Detail';
import Loading from './components/Loading';
import { Route, Switch } from 'react-router-dom';
import { randomizer } from './utils/utils';
import { colors as offlineColors } from './data/colors';
import randomColor from 'randomcolor';

const App = () => {
  const [allColors, setAllColors] = useState(offlineColors);
  const [nextRandomColor, setNextRandomColor] = useState(
    randomizer(offlineColors)
  );
  const [isLoading, setIsLoading] = useState(false);

  const getRandom = async () => {
    let result = await getColors();
    let randomized = randomizer(result);
    setNextRandomColor(randomized);
  };

  // Calls the API endpoint to populate "base" color dataset from database
  // If no response from endpoint (or if server is offline), colors are populated by local dataset
  const getColors = async () => {
    try {
      const url = `http://localhost:3001/colors`;
      const res = await fetch(url);
      const colors = await res.json();
      return colors;
    } catch (e) {
      return offlineColors;
    }
  };

  // Can accept either a hue name or hex code string - utilizes randomcolor utility
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
    return filtered.length
      ? alert(`Success! Hex code ${filtered[0].code} present in set.`)
      : alert('No results found.');
  };

  // Fetches stored colors from database on page load
  // Offline color data array renders as backup if database connection fails for any reason
  useEffect(async () => {
    setIsLoading(true);
    const newColors = await getColors();
    newColors ? setAllColors(newColors) : setAllColors(offlineColors);
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
              {isLoading ? <Loading /> : <List colors={allColors} />}
            </Route>
          </Switch>
        </main>
      </div>
    </>
  );
};

export default App;
