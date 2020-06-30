import axios from "axios";
import {
  axiosWithAuth
} from "../utils/axiosWithAuth";
export const UPLOAD_CONTENT = "UPLOAD_CONTENT";
export const EDIT_CONTENT = "EDIT_CONTENT"
export const SET_WORK = "SET_WORK";
export const TASK_START = "TASK_START";
export const TASK_FAIL = "TASK_FAIL";
export const DEL_WORK = "DEL_WORK"
export const GET_MESSAGES = "GET_MESSAGES"
export const REMOVE_DATA = "REMOVE_DATA"

export const taskStart = () => dispatch => {
  //sets state to loading for spinners
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
    /*data includes secure_url, public_id, title, description (optional), img_url(optional), and img_public_id(optional). Action posts to cloudinary and then checks if there's a cover image and if so also posts that to cloudinary before posting the data to backend. */
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


export const editContent = data => dispatch => {
  /*data includes title and description. Currently just posts fantasy as true as genres haven't been made functional on front end yet. */
  let submitData = {
    title: data.title,
    description: data.description,
    fantasy: true
  }
  axiosWithAuth()
    .patch(`https://bookedup-pt9.herokuapp.com/api/author-content/${data.user_id}/${data.id}`, submitData)
    .then(res => {
      dispatch({
        type: REMOVE_DATA,
        payload: data.id
      });
      console.log(res)
      dispatch({
        type: EDIT_CONTENT,
        payload: res.data
      });
      window.location.reload();
    })
    .catch(err => {
      dispatch({
        type: TASK_FAIL,
        payload: err.message
      })
      console.log(err)
    })
}
export const setWork = data => dispatch => {
  //sets work as currentWork which is used both for reading works and messaging.
  dispatch({
    type: SET_WORK,
    payload: data
  });
};

export const delContent = (work) => dispatch => {
  /*data includes author_content_id, public_id, and img_public_id. This action is used for deleting works that have cover images */
  axiosWithAuth()
    .delete(`https://bookedup-pt9.herokuapp.com/api/author-content/${work.author_content_id}/${work.public_id}/${work.img_public_id}`)
        .then(res => {
          dispatch({
            type: DEL_WORK,
            payload: work.author_content_id
          })
          console.log(res)
          window.location.reload();
        })
        .catch(err => {
          console.log(err.message)
        })
  }

  export const delContentNoImg = (work) => dispatch => {
    /*data includes author_content_id and public_id. This action is used for deleting works that have no cover images */
    axiosWithAuth()
      .delete(`https://bookedup-pt9.herokuapp.com/api/author-content/${work.id}/${work.public_id}`)
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
    //data is user.id
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

  

