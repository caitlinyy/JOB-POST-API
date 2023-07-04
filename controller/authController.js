import User from '../models/User.js'

const register = (req, res) => {
  res.status(201).json({ msg: 'Created Success' })
}

const login = (req, res) => {
  res.status(200).json({ msg: 'Login Success' })
}
const updateUser = (req, res) => {
  res.status(200).json({ msg: 'Update Success' })
}

export { register, login, updateUser }