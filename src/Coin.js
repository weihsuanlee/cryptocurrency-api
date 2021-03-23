import React from 'react'
import './Coin.scss'
import Sparkline from './Sparkline'

function Coin(props) {
  const {
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
      <td className="coin">
        <img src={image} alt={symbol} />
        <h1>{name}</h1>
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
        <span className={`coin-percent ` + (priceChange < 0 ? `red` : `green`)}>
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
