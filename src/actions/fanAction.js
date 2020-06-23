import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
export const SET_CONTENT = "SET_CONTENT";
export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_CONTENT = "REMOVE_CONTENT"

export const setContent = (user, work) => dispatch => {
  let data = {
    user_id: user,
    author_content_id: work
  }
  console.log(data)
  axiosWithAuth()
    .post(`https://bookedup-pt9.herokuapp.com/api/content-library/${user}`, data)
    .then(res => {
      console.log(res)
      axiosWithAuth()
        .get(`https://bookedup-pt9.herokuapp.com/api/content-library/${user}`)
        .then(res => {
          console.log(res)
          dispatch({
            type: SET_CONTENT,
            payload: res.data.contentGenre
          })
          window.location.reload();
        })
        .catch(err => {
          console.log(err)
        })
    })
    .catch(err => {
      console.log(err)
    })
}

export const removeContent = data => dispatch => {
  axiosWithAuth()
    .delete(`https://bookedup-pt9.herokuapp.com/api/content-library/${data.id}/${data.contentId}`)
    .then(res => {
      console.log(res)
      dispatch({type: REMOVE_CONTENT, payload: data.contentId })
      window.location.reload();
    })
    .catch(err => {
      console.log(err)
    })
}

export const addComment = (data) => dispatch => {
  axiosWithAuth()
    .post("https://bookedup-pt9.herokuapp.com/api/comments/", data)
    .then(res => {
      console.log(res)
      dispatch({ type: ADD_COMMENT, payload: res.data.newComments})
    })
    .catch(err => {
      console.log(err)
    })
}

export const getComments = (data) => dispatch => {
  axiosWithAuth()
    .get(`https://bookedup-pt9.herokuapp.com/api/comments/${data}`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}