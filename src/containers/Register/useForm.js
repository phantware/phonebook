import { useContext, useState } from 'react'
import register from '../../context/actions/auth/registar'
import { GlobalContext } from '../../context/Provider'
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => {
  const [form, setForm] = useState({})

  const { authDispatch } = useContext(GlobalContext)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const registerFormValidator =
    !form.username?.length ||
    !form.firstname?.length ||
    !form.lastname?.length ||
    !form.email?.length ||
    !form.password?.length
  return { form, onChange, registerFormValidator }

  // eslint-disable-next-line no-unreachable
  const onSubmit = (form) => {
    register()(authDispatch)
  }
}
