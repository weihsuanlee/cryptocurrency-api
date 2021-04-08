import React, { useContext, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import SkeletonData from './SkeletonData'
import KeyboardBackspaceSharpIcon from '@material-ui/icons/KeyboardBackspaceSharp'
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone'
import { WatchListContext } from './WatchListContext'
import axios from './axios'
import Coin from './Coin'

function WatchList(props) {
  const { watchList } = useContext(WatchListContext)
  const [watchListCoins, setWatchListCoins] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  //   console.log(localStorage.getItem('crypto-watchlist'))
  useEffect(() => {
    setIsLoading(true)
    async function fetchData() {
      const request = await axios.get('coins/markets/', {
        params: {
          vs_currency: 'twd',
          ids: watchList.join(','),
          sparkline: 'true',
        },
      })
      //   console.log(request.data)
      setWatchListCoins(request.data)
      setIsLoading(false)
      return request
    }
    if (watchList.length > 0) {
      fetchData()
    } else {
      setWatchListCoins([])
      setIsLoading(false)
    }
  }, [watchList])
  return (
    <div className="app">
      <div
        onClick={() => {
          props.history.push('/')
        }}
        className="to-list-btn"
      >
        <KeyboardBackspaceSharpIcon />
        <span>Main Page</span>
      </div>
      {isLoading ? (
        <SkeletonData length={watchListCoins.length} />
      ) : (
        <div className="container">
          {watchListCoins.length > 0 ? (
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
                {watchListCoins.map((coin) => (
                  <Coin
                    isWatchList
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
                <FavoriteTwoToneIcon className="no-result-coin" />
                <img src="../../images/notfound.png" alt="no-result" />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default withRouter(WatchList)
