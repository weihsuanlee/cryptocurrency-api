import React, { useState, useEffect } from 'react'
import './App.scss'
import axios from './axios'
import Coin from './Coin'
import DarkModeSwitch from './DarkModeSwitch'
import SkeletonData from './SkeletonData'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from './theme.js'

function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const [darkMode, setDarkMode] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const themeToggler = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    setIsLoading(true)
    async function fetchData() {
      const request = await axios.get('coins/markets/', {
        params: {
          vs_currency: 'twd',
          sparkline: 'true',
          per_page: 100,
        },
      })
      setCoins(request.data)
      console.log(request.data)
      return request
    }
    fetchData()
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div className="app">
        <DarkModeSwitch themeToggler={themeToggler} darkMode={darkMode} />
        <div className="coin-search">
          <h1 className="coin-text">Search a currency</h1>
          <form>
            <input
              type="text"
              value={search}
              placeholder="Search"
              className="coin-search-input"
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
        {isLoading ? (
          <SkeletonData />
        ) : (
          <div className="container">
            <table className="coin-table">
              <thead>
                <tr>
                  <th colspan="2">貨幣</th>
                  <th>匯率</th>
                  <th>24小時交易量</th>
                  <th>24小時匯率變化</th>
                  <th>總市值</th>
                  <th>最近7天</th>
                </tr>
              </thead>
              <tbody>
                {filteredCoins.map((coin) => (
                  <Coin
                    key={coin.id}
                    name={coin.name}
                    image={coin.image}
                    symbol={coin.symbol}
                    marketcap={coin.market_cap}
                    price={coin.current_price}
                    priceChange={coin.price_change_percentage_24h}
                    volume={coin.total_volume}
                    sparkline_in_7d={coin.sparkline_in_7d}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </ThemeProvider>
  )
}

export default App
