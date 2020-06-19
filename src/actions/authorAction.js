import axios from "axios";
import {
  axiosWithAuth
} from "../utils/axiosWithAuth";
export const UPLOAD_CONTENT = "UPLOAD_CONTENT";
export const SET_WORK = "SET_WORK";
export const TASK_START = "TASK_START";
export const TASK_FAIL = "TASK_FAIL";
export const DEL_WORK = "DEL_WORK"
export const GET_MESSAGES = "GET_MESSAGES"

export const taskStart = () => dispatch => {
  dispatch({
    type: TASK_START
  })
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
            // user_id: uploadWork.user_id,
            content_url: res.data.secure_url,
            public_id: res.data.public_id,
            title: work.title,
            description: work.description,
          };
          if (work.image[0]) {
            axios({
                url: cloudinary.URL,
                method: "POST",
                data: imgFormData
              })
              .then(res => {
                console.log(res)
                submitData = {
                  ...submitData,
                  img_url: res.data.secure_url,
                  img_public_id: res.data.public_id
                }
                console.log(submitData)
                axiosWithAuth()
                  .post(
                    `https://bookedup-pt9.herokuapp.com/api/author-content/${uploadWork.user_id}`,
                    submitData
                  )
                  .then(res => {
                    console.log(res);
                    dispatch({
                      type: UPLOAD_CONTENT,
                      payload: res.data.content[0]
                    });
                    window.location.reload();
                  })
                  .catch(err => {
                    dispatch({
                      type: TASK_FAIL,
                      payload: err.message
                    })
                    console.log(err);
                  });
              })
              .catch(err => {
                console.log(err)
              })
          }
    else {
      axiosWithAuth()
        .post(
          `https://bookedup-pt9.herokuapp.com/api/author-content/${uploadWork.user_id}`,
          submitData
        )
        .then(res => {
          console.log(res);
          dispatch({
            type: UPLOAD_CONTENT,
            payload: res.data.content[0]
          });
          window.location.reload();
        })
        .catch(err => {
          dispatch({
            type: TASK_FAIL,
            payload: err.message
          })
          console.log(err);
        });
      }
    })
.catch(err => {
  console.log(err);
});
};



export const setWork = data => dispatch => {
  console.log(data)
  dispatch({
    type: SET_WORK,
    payload: data
  });
};

export const delContent = (work) => dispatch => {
  axiosWithAuth()
    .delete(`https://bookedup-pt9.herokuapp.com/api/author-content/${work.id}/${work.public_id}/${work.img_public_id}`)
        .then(res => {
          dispatch({
            type: DEL_WORK,
            payload: work.id
          })
          console.log(res)
          window.location.reload();
        })
        .catch(err => {
          console.log(err.message)
        })
  }
  export const getMessages = (data) => dispatch => {
    axiosWithAuth()
      .get(`https://bookedup-pt9.herokuapp.com/api/message/${data}/inbox`)
      .then(res => {
        console.log(res)
        dispatch({type: GET_MESSAGES, payload: res.data.Messages})
      })
      .catch(err => {
        console.log(err)
      })
  }

