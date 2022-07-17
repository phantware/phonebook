import React, { useEffect } from 'react'

import register from '../../context/actions/registar'
import RegisterUI from '../../layout/Register'

const RegisterContainer = () => {
  useEffect(() => {
    register()
  }, [])

  return (
    <div>
      <RegisterUI />
    </div>
  )
}

export default RegisterContainer
