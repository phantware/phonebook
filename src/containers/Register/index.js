import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import register from '../../context/actions/registar'

const RegisterContainer = () => {
  useEffect(() => {
    register()
  }, [])

  return (
    <div>
      <Header />
      <h1>RegisterContainer</h1>

      <Link to='/auth/login'>Login here</Link>
    </div>
  )
}

export default RegisterContainer
