import React, { useContext } from 'react'
import './Coin.scss'
import Sparkline from './Sparkline'
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded'
import StarRoundedIcon from '@material-ui/icons/StarRounded'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded'
import { WatchListContext } from './WatchListContext'

function Coin(props) {
  const { watchList } = useContext(WatchListContext)
  const { addCoin, deleteCoin } = useContext(WatchListContext)
  const {
    isWatchList,
    id,
    image,
    name,
    symbol,
    price,
    volume,
    priceChange,
    marketcap,
    sparkline_in_7d,
  } = props

  return (
    <tr className="coin-row">
      {isWatchList ? (
        <td>
          <div
            className="coin-add-list"
            onClick={() => {
              deleteCoin(id)
            }}
          >
            <DeleteRoundedIcon />
          </div>
        </td>
      ) : (
        <td>
          <div
            className="coin-add-list"
            onClick={() => {
              addCoin(id)
            }}
          >
            {watchList.indexOf(id) === -1 ? (
              <StarOutlineRoundedIcon />
            ) : (
              <StarRoundedIcon className="coin-added" />
            )}
          </div>
        </td>
      )}

      <td>
        <div className="coin-name">
          <img src={image} alt={symbol} />
          <h1>{name}</h1>
        </div>
      </td>
      <td>
        <span className="coin-symbol">{symbol}</span>
      </td>
      <td className="text-end">
        <span>NT$ {price}</span>
      </td>
      <td className="text-end">
        <span>NT$ {volume.toLocaleString()}</span>
      </td>
      <td className="text-center">
        <span className={`coin-percent ` + (priceChange < 0 ? `green` : `red`)}>
          {priceChange.toFixed(2)}%
        </span>
      </td>
      <td className="text-end">
        <span>NT$ {marketcap.toLocaleString()}</span>
      </td>
      <td>
        <Sparkline data={sparkline_in_7d.price} />
      </td>
    </tr>
  )
}

export default Coin
