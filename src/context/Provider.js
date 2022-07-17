import { createContext, useReducer } from 'react'
import authInitialState from './initialstates/authInitialState'
import contactsInitialState from './initialstates/contactsInitialState'
import auth from './reducers/auth'
import contacts from './reducers/contacts'

export const GlobalContext = createContext({})
export const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState)
  const [contactsState, contactDispatch] = useReducer(
    contacts,
    contactsInitialState
  )

  return (
    <GlobalContext.Provider
      value={{ authState, authDispatch, contactsState, contactDispatch }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
