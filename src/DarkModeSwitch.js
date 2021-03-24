import React, { useState } from 'react'
import Switch from '@material-ui/core/Switch'
import WbSunnyTwoToneIcon from '@material-ui/icons/WbSunnyTwoTone'
import Brightness2TwoToneIcon from '@material-ui/icons/Brightness2TwoTone'
import './DarkModeSwitch.scss'

export default function DarkModeSwitch(props) {
  const { darkMode, themeToggler } = props

  return (
    <div className="darkmode-switch">
      <WbSunnyTwoToneIcon />
      <Switch
        checked={darkMode}
        onChange={themeToggler}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Brightness2TwoToneIcon />
    </div>
  )
}
