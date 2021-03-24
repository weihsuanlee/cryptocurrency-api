import React, { createContext, useState, useEffect } from 'react'

export const WatchListContext = createContext()

export const WatchListContextProvider = (props) => {
  //   localStorage.getItem('crypto-watchlist').split(',')
  console.log(localStorage.getItem('crypto-watchlist'))
  const list = localStorage.getItem('crypto-watchlist')
    ? localStorage.getItem('crypto-watchlist').split(',')
    : []
  const [watchList, setWatchList] = useState(list)

  useEffect(() => {
    localStorage.setItem('crypto-watchlist', watchList)
  }, [watchList])

  const addCoin = (id) => {
    // console.log(id)
    if (watchList.indexOf(id) === -1) {
      setWatchList([...watchList, id])
    } else {
      deleteCoin(id)
    }
  }
  const deleteCoin = (id) => {
    setWatchList(
      watchList.filter((el) => {
        return el !== id
      })
    )
    // console.log(watchList)
  }

  return (
    <WatchListContext.Provider value={{ watchList, deleteCoin, addCoin }}>
      {props.children}
    </WatchListContext.Provider>
  )
}
