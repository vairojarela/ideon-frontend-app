import axios from 'axios';

class UserService {

  constructor() {
    this.userData = axios.create({
      baseURL: 'http://localhost:4000',
      withCredentials: true,
    })
  }

  getAllUsers() {
    return this.userData.get('/users')
    .then(response => response)
  }

  createOneUser(newUser) {
    return this.userData.post('/users/new', newUser)
    .then(response => response)
  }

  updateOneUser(id, updatedUser) {
    console.log(updatedUser)
    return this.userData.put(`/users/${ id}/update`, updatedUser)
    .then(response => response)
  }

  deleteOneUser(id) {
    return this.userData.delete(`/users/${id}/delete`)
    .then(response => response)
  }

}

const userService = new UserService()

export default userService