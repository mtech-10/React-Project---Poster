import React from "react";
import $ from "jquery";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { initializePost, sendPost } from "../../../redux/features/post_reducer";
import instance from "../../../axios";

function Feed({ user, mostFollowed, mostActive }) {
  const [canPost, setCanPost] = useState(false);
  const dispatch = useDispatch();
  const [Title, setTitle] = useState("");
  const [postImage, setPostImage] = useState("");
  const [previewIMG, setPreviewIMG] = useState("");

  const Animate = () => {
    let postButton = document.querySelector("#post_button");
    let postForm = document.querySelector(".post_form");

    postButton.classList.toggle("make_post");
    postButton.classList.toggle("new_post");
    $(postForm).slideToggle(400);

    if (canPost === false) {
      postButton.textContent = "Share Post";
    } else {
      postButton.textContent = "New Post";
    }
    setCanPost(!canPost);
  };

  // const convertToBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);
  //     fileReader.onload = () => {
  //       setPreviewIMG(fileReader.result);
  //       resolve(fileReader.result);
  //     };
  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // };

  function displayImage(e) {
    if (e) {
      var reader = new FileReader();
      reader.readAsDataURL(e);
      reader.onload = function (e) {
        setPreviewIMG(reader.result);
      };
    }
  }

  const handleFileUpload = (e) => {
    e.preventDefault();
    const form_data = new FormData();
    const file = e.target.files[0];
    displayImage(file);
    form_data.append("postImage", file);
    const response = instance.post("/upload", form_data);
    // const base64 = await convertToBase64(file);
    setPostImage(response.data.Message);
  };

  const validatePost = () => {
    Animate();

    if (canPost) {
      const date = new Date();
      var left =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      var right =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      dispatch(
        initializePost({
          PostID: "",
          Title: Title,
          Image: postImage,
          UserID: user.id,
          Date: left + " " + right,
          Type: "New_Post",
        })
      );
      dispatch(sendPost());
    }
  };

  return (
    <div className="feed_bar">
      <p className="title">
        fee<span>ds</span>
      </p>
      <div className="post_form">
        <div className="post_wrapper">
          <div className="links">
            <span className="text">text</span>
            <span className="image active">image</span>
          </div>
          <textarea
            placeholder="Enter Post Title"
            className="post_title"
            onChange={(e) => setTitle(e.target.value)}
          ></textarea>
          <div className="image_post">
            <img
              src={
                previewIMG !== "" ? previewIMG : "/Images/Random/poster_1.jpg"
              }
              className="previewIMG"
              alt="iagent"
            />
            <label className="label">
              <input type="file" id="file" onChange={handleFileUpload} />
              <i className="fa fa-upload"></i>
            </label>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="new_post"
        id="post_button"
        onClick={validatePost}
      >
        new post
      </button>
      <div className="user_lists">
        <div className="head">
          <div>
            <p>top followers</p>
            <i className="fa fa-info-circle"></i>
          </div>
          <i className="fa fa-chart-line"></i>
        </div>
        <div className="body">
          {mostFollowed.map((user) => (
            <div className="user" key={user.UserID}>
              <div>
                <div className="user_image">
                  <img
                    src={
                      user.Avatar.length === 1
                        ? "/Images/Avatars/Image - " + user.Avatar + ".jpg"
                        : "Images/Uploads/" + user.Avatar
                    }
                    alt=""
                  />
                </div>
                <span className="user_name">@{user.Username}</span>
              </div>
              <div className="number">{user.followers}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="user_lists">
        <div className="head">
          <div>
            <p>most active</p>
            <i className="fa fa-info-circle"></i>
          </div>
          <i className="fa fa-chart-line"></i>
        </div>
        <div className="body">
          {mostActive.map((user) => (
            <div className="user" key={user.UserID}>
              <div>
                <div className="user_image">
                  <img
                    src={
                      user.Avatar.length === 1
                        ? "/Images/Avatars/Image - " + user.Avatar + ".jpg"
                        : "Images/Uploads/" + user.Avatar
                    }
                    alt=""
                  />
                </div>
                <span className="user_name">@{user.Username}</span>
              </div>
              <div className="number">{user.posted}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feed;
