import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from './axios'
import Coin from './Coin'
import SkeletonData from './SkeletonData'
import MonetizationOnTwoToneIcon from '@material-ui/icons/MonetizationOnTwoTone'
import NotListedLocationRoundedIcon from '@material-ui/icons/NotListedLocationRounded'
import StarsSharpIcon from '@material-ui/icons/StarsSharp'
import './WatchList.scss'

function CoinList(props) {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(true)

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
      setIsLoading(false)
      //   console.log(request.data)
      return request
    }
    fetchData()
  }, [])

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div className="app">
      <div
        onClick={() => {
          props.history.push('/watchlist')
        }}
        className="to-list-btn"
      >
        <StarsSharpIcon />
        <span>Watchlist</span>
      </div>
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
          {filteredCoins.length > 0 ? (
            <table className="coin-table">
              <thead>
                <tr>
                  <th></th>
                  <th colSpan="2">貨幣</th>
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
                    id={coin.id}
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
          ) : (
            <div className="no-result">
              <div className="t-rex">
                <NotListedLocationRoundedIcon />
                <img src="../../images/notfound.png" alt="no-result" />
              </div>
              <MonetizationOnTwoToneIcon className="no-result-coin" />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default withRouter(CoinList)
