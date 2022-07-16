import RegisterComponent from '../containers/Register'
import LoginComponent from '../containers/Login'
import ContactsComponent from '../containers/Contact'
import CreateComponent from '../containers/CreateContact'

const routes = [
  {
    path: '/auth/register',
    component: RegisterComponent,
    title: 'Register',
  },
  {
    path: '/auth/login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: '/',
    component: ContactsComponent,
    title: 'Contacts',
  },
  {
    path: '/contacts/create',
    component: CreateComponent,
    title: 'Create Contact',
  },
]

export default routes
