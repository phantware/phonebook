import React, { useContext } from 'react'
import Header from '../../components/Header'
import { GlobalContext } from '../../context/Provider'
const ContactsContainer = () => {
  const test = useContext(GlobalContext)
  console.log('test', test)
  return (
    <div>
      <Header />
      <h1>ContactsContainer</h1>
    </div>
  )
}

export default ContactsContainer
