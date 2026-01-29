import React from 'react'
import ThemeContext from './ThemeContext'

const ThemeProvider = ({children}) => {
    const theme = "dark"
  return (
    
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
  )
}

export default ThemeProvider