import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'

const LoginContainer = () => {
  return (
    <div>
      <Header />
      <h1>LoginContainer</h1>
      <Link to='/auth/register'>Register here</Link>
    </div>
  )
}

export default LoginContainer
