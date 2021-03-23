import React, { useState } from 'react'
import Switch from '@material-ui/core/Switch'

export default function DarkModeSwitch(props) {
  const { darkMode, themeToggler } = props
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  return (
    <div>
      <Switch
        checked={darkMode}
        onChange={themeToggler}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </div>
  )
}
