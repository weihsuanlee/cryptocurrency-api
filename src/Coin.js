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
        <p>{symbol}</p>
      </td>
      <td className="text-end">
        <span>NT$ {price}</span>
      </td>
      <td className="text-end">
        <p>NT$ {volume.toLocaleString()}</p>
      </td>
      <td className="text-center">
        <p className={`coin-percent ` + (priceChange < 0 ? `red` : `green`)}>
          {priceChange.toFixed(2)}%
        </p>
      </td>
      <td className="text-end">
        <p>NT$ {marketcap.toLocaleString()}</p>
      </td>
      <td>
        <Sparkline data={sparkline_in_7d.price} />
      </td>
    </tr>
  )
}

export default Coin
