import React, { createContext } from 'react'
import i18n from '../../config/i18n'

const LocaleContext = createContext()

export const LocaleProvider = ({ children, locale }) => {

  return (
    <LocaleContext.Provider value={{ locale, i18n }}>
      {children}
    </LocaleContext.Provider>
  )
}

export default LocaleContext
