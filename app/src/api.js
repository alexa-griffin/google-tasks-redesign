/* eslint-disable no-undef */
// gapi defined in html
// all other files should not have to access gapi directly

const SCOPE = ['https://www.googleapis.com/auth/tasks']

const api = {
  async init() {
    await gapi.load("client", {
      callback: () => gapi.client.load("tasks")
    })
  },

  auth() {
    return gapi.auth.authorize({ client_id: process.env.VUE_APP_CLIENT_ID, scope: SCOPE })
  },

  authed() {
    return gapi.auth.getToken() && gapi.auth.getToken().status.signed_in
  },

  getTaskLists() {
    return new Promise((res, rej) => {
      gapi.client.tasks.tasklists.list().execute(responce => {
        if(responce.error) rej(responce.error)
        else res(responce.result)
      })
    })
  },

  getTasks(key) {
    return new Promise((res, rej) => {
      gapi.client.tasks.tasks.list({ 
        tasklist: key,
        showHidden: true,
        maxResults: 100
      }).execute(responce => {
        if(responce.error) rej(responce.error)
        else res(responce.result)
      })
    })
  },

  createTask(list, params) {
    return new Promise((res, rej) => {
      gapi.client.tasks.tasks.insert({
        tasklist: list,
        ...params
      }).execute(responce => {
        if(responce.error) rej(responce.error)
        else res(responce.result)
      })
    })
  },

  createTaskList(params) {
    return new Promise((res, rej) => {
      gapi.client.tasks.tasklists.insert({
        ...params
      }).execute(responce => {
        if(responce.error) rej(responce.error)
        else res(responce.result)
      })
    })
  },
  
  updateTaskList(id, params) {
    return new Promise((res, rej) => {
      gapi.client.tasks.tasklists.update({
        tasklist: id,
        id,
        ...params
      }).execute(responce => {
        if(responce.error) rej(responce.error)
        else res(responce.result)
      })
    })
  },

  renameTaskList(id, name) {
    return this.updateTaskList(id, { title: name })
  },

  deleteTaskList(id) {
    return new Promise((res, rej) => {
      gapi.client.tasks.tasklists.delete({
        tasklist: id
      }).execute(responce => {
        if(responce.error) rej(responce.error)
        else res(responce.result)
      })
    })
  },

  updateTask(taskID, tasklistID, params) {
    return new Promise((res, rej) => {
      gapi.client.tasks.tasks.update({
        task: taskID,
        id: taskID,
        tasklist: tasklistID,
        ...params
      }).execute(responce => {
        if(responce.error) rej(responce.error)
        else res(responce.result)
      })
    })
  }
}

export default api