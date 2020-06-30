import { axiosWithAuth } from "../utils/axiosWithAuth";

export const GET_USER = "GET_USER";
export const SEND_MESSAGE = "SEND_MESSAGE"

export const getUser = data => dispatch => {
  /*sets selectedUser for cases that you need to retrieve display names and other user data for DOM*/
  axiosWithAuth()
    .get(`https://bookedup-pt9.herokuapp.com/api/users/${data}`)
    .then(res => {
      console.log(res)
      dispatch({type: GET_USER, payload: res.data.user})
    })
    .catch(err => {
      console.log(err.message)
    })
};

export const sendMessage = data => dispatch => {
  /*data includes subject, body, sender_id, recipient_id, recipient, and linking_id(optional) */
  axiosWithAuth()
    .post(`https://bookedup-pt9.herokuapp.com/api/message/${data.sender_id}`, data)
    .then(res => {
      dispatch({type: SEND_MESSAGE});
      window.location.replace('/messages');
    })
    .catch(err => {
      console.log(err)
    })
}
