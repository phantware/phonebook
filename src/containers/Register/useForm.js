import { useState } from 'react'
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => {
  const [form, setForm] = useState({})

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
}
