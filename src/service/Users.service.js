const Users = require('../models/Users.model');
const BaseService = require('./Base.service');

class UserService extends BaseService {
  constructor() {
    super(Users)
  }

  searchUserFollowers = async (userId) => {
    try {
      return (await this.searchByUser(userId)).followers;
    } catch (error) {
      console.log('BaseService.searchFollowers - error ', error)
    }
  }

  searchUserFollowing = async (userId) => {
    try {
      return (await this.searchByUser(userId)).following;
    } catch (error) {
      console.log('BaseService.searchUserFollowing - error ', error)
    }
  }
}

module.exports = new UserService();
