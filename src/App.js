import React, { useState } from 'react'
import './App.scss'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from './theme.js'
import CoinList from './CoinList'
import WatchList from './WatchList'
import DarkModeSwitch from './DarkModeSwitch'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { WatchListContextProvider } from './WatchListContext'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const themeToggler = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <WatchListContextProvider>
        <GlobalStyles />
        <DarkModeSwitch themeToggler={themeToggler} darkMode={darkMode} />
        <Router>
          <Switch>
            <Route exact path="/">
              <CoinList />
            </Route>
            <Route exact path="/watchlist">
              <WatchList />
            </Route>
          </Switch>
        </Router>
      </WatchListContextProvider>
    </ThemeProvider>
  )
}

export default App
