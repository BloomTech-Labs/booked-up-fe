import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
export const SET_CONTENT = "SET_CONTENT";

export const setContent = (user, work) => dispatch => {
  let data = {
    user_id: user,
    author_content_id: work
  }
  console.log(data)
  axiosWithAuth()
    .post(`https://bookedup-pt9.herokuapp.com/api/content-library`, data)
    .then(res => {
      console.log(res)
      axiosWithAuth()
        .get(`https://bookedup-pt9.herokuapp.com/api/content-library/${user}`)
        .then(res => {
          console.log(res)
          dispatch({
            type: SET_CONTENT,
            payload: res.data.ContentLibrary
          })
        })
        .catch(err => {
          console.log(err)
        })
    })
    .catch(err => {
      console.log(err)
    })
}