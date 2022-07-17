import React, { useEffect } from 'react'

import register from '../../context/actions/registar'
import RegisterUI from '../../layout/Register'
import useForm from './useForm'

const RegisterContainer = () => {
  useEffect(() => {
    register()
  }, [])

  return (
    <div>
      <RegisterUI form={useForm()} />
    </div>
  )
}

export default RegisterContainer
