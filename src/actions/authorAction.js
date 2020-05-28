import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
export const UPLOAD_CONTENT = "UPLOAD_CONTENT";
export const SET_WORK = "SET_WORK";

export const uploadContent = (
  props,
  formData,
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
      var submitData = {
        user_id: uploadWork.user_id,
        content_url: res.data.secure_url,
        title: work.title
      };
      axiosWithAuth()
        .post(
          "https://bookedup-pt9.herokuapp.com/api/author-content",
          submitData
        )
        .then(res => {
          console.log(res);
          dispatch({ type: UPLOAD_CONTENT, payload: res.data });
          props.history.push("/dashboard/my-works");
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      console.log(err);
    });
};

export const setWork = data => dispatch => {
  console.log(data)
  dispatch({ type: SET_WORK, payload: data });
};
