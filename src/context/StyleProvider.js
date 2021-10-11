import React, { createContext, useState } from 'react'

const StyleContext = createContext()

export const StyleProvider = ({ children }) => {
  const [colorWhite, setColorWhite] = useState(1)


  return (
    <StyleContext.Provider
      value={{
        colorWhite,
        setColorWhite,
      }}
    >
      {children}
    </StyleContext.Provider>
  )
}

export default StyleContext
