import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
export const UPLOAD_CONTENT = "UPLOAD_CONTENT";
export const SET_WORK = "SET_WORK";
export const TASK_START = "TASK_START";
export const TASK_FAIL = "TASK_FAIL";
export const DEL_WORK = "DEL_WORK"

export const taskStart = () => dispatch => {
  dispatch({ type: TASK_START })
}

export const uploadContent = (
  props,
  formData,
  imgFormData,
  cloudinary,
  uploadWork,
  work
) => dispatch => {
  axios({
    url: cloudinary.URL,
    method: "POST",
    headers: {
      "Content-Type": "application/X-WWW-form-urlencoded"
    },
    data: formData
  })
    .then(res => {
      console.log(res)
      var submitData = {
        user_id: uploadWork.user_id,
        content_url: res.data.secure_url,
        public_id: res.data.public_id,
        title: work.title,
        description: work.description
      };
      axios({
        url: cloudinary.URL,
        method: "POST",
        data: imgFormData
      })
      .then(res => {
        console.log(res)
        var submitData = {
          ...submitData,
          img_url: res.data.secure_url,
          img_public_id: res.data.public_id
        }
        axiosWithAuth()
        .post(
          "https://bookedup-pt9.herokuapp.com/api/author-content",
          submitData
        )
        .then(res => {
          console.log(res);
          dispatch({ type: UPLOAD_CONTENT, payload: res.data.newContent });
          window.location.reload();
        })
        .catch(err => {
          dispatch({ type: TASK_FAIL, payload: err.message })
          console.log(err);
        });
      })
      .catch(err => {
        console.log(err)
      })
    })
    .catch(err => {
      console.log(err);
    });
};



export const setWork = data => dispatch => {
  console.log(data)
  dispatch({ type: SET_WORK, payload: data });
};

export const delContent = (work) => dispatch => { 
  axiosWithAuth()
    .delete(`https://bookedup-pt9.herokuapp.com/api/author-content/${work.id}`)
    .then(res => {
      dispatch({ type: DEL_WORK, payload: work.id})
        console.log(res)
        window.location.reload();
    })
    .catch(err => {
      console.log(err)
    }) 
}