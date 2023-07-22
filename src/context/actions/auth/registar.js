import axiosInstance from '../../../helpers/axios'

const register = () => {
  axiosInstance
    .post('/auth/post', {})
    .then((post) => console.log('post', post))
    .catch((err) => console.log('err', err))
}

export default register
