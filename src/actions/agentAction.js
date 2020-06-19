import { axiosWithAuth } from "../utils/axiosWithAuth";

export const GET_USER = "GET_USER";
export const SEND_MESSAGE = "SEND_MESSAGE"

export const getUser = data => dispatch => {
  axiosWithAuth()
    .get(`https://bookedup.net/api/users/${data.user_id}`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
};

export const sendMessage = data => dispatch => {
  let submitData = {
    subject: data.subject,
    body: data.body,
    sender_id: data.sender_id,
    recipient_id: data.recipient_id
}
  axiosWithAuth()
    .post(`https://bookedup.net/api/message/${data.sender_id}`, submitData)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}
