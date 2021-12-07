import React from "react";
import $ from "jquery";
import { useState } from "react";
import instance from "../../../axios";
import { useDispatch } from "react-redux";
import { initializePost, sendPost } from "../../../redux/features/post_reducer";

function Feed() {
  const [canPost, setCanPost] = useState(false);
  const dispatch = useDispatch();
  const [Title, setTitle] = useState("");
  const [postImage, setPostImage] = useState("");

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

  // function displayImage(fileIMG) {
  //   if (fileIMG.files[0]) {
  //     var reader = new FileReader();
  //     reader.onload = function (fileIMG) {
  //       var previewImage = document.querySelector(".image_post .previewIMG");
  //       previewImage.setAttribute("src", fileIMG.target.result);
  //     };
  //   }
  // }

  // const uploadImage = () => {
  //   const formdata = new FormData();
  //   const fileImg = document.getElementById("file");
  //   formdata.append("postImage", fileImg.files[0]);
  //   // displayImage(fileImg);
  //   instance.post("/upload", formdata).then((resposne) => {
  //     // resposne.data.Error === null
  //     //   ? setPostImage(fileImg.name) && displayImage(e)
  //     //   : setPostImage("");
  //   });
  // };

  const validatePost = () => {
    // e.preventDefault();
    // Animate or Toggle
    Animate();

    if (canPost) {
      dispatch(
        initializePost({
          Title: Title,
          Image: postImage,
          UserID: JSON.parse(sessionStorage.getItem("loggedStatus")).data.id,
          Date: Date.now(),
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
          {/* <div className="image_post">
            <img
              src="/Images/Random/poster_1.jpg"
              className="previewIMG"
              alt="iagent"
            />
            <label className="label">
              <input type="file" id="file" onChange={uploadImage} />
              <i className="fa fa-upload"></i>
            </label>
          </div> */}
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
          <div className="user">
            <div>
              <div className="user_image">
                <img src="/Images/Random/four.jpg" alt="" />
              </div>
              <span className="user_name">@deiron-10</span>
            </div>
            <div className="number">23.5K</div>
          </div>
          <div className="user">
            <div>
              <div className="user_image">
                <img src="/Images/Random/one.jpg" alt="" />
              </div>
              <span className="user_name">@aftaab67</span>
            </div>
            <div className="number">23.5K</div>
          </div>
          <div className="user">
            <div>
              <div className="user_image">
                <img src="/Images/Random/two.jpg" alt="" />
              </div>
              <span className="user_name">@mathews</span>
            </div>
            <div className="number">23.5K</div>
          </div>
          <div className="user">
            <div>
              <div className="user_image">
                <img src="/Images/Random/man_1.jpg" alt="" />
              </div>
              <span className="user_name">@vegas</span>
            </div>
            <div className="number">23.5K</div>
          </div>
          <div className="user">
            <div>
              <div className="user_image">
                <img src="/Images/Random/three.jpg" alt="" />
              </div>
              <span className="user_name">@grand</span>
            </div>
            <div className="number">23.5K</div>
          </div>
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
          <div className="user">
            <div>
              <div className="user_image">
                <img src="/Images/Random/four.jpg" alt="" />
              </div>
              <span className="user_name">@deiron-10</span>
            </div>
            <div className="number">23%</div>
          </div>
          <div className="user">
            <div>
              <div className="user_image">
                <img src="/Images/Random/one.jpg" alt="" />
              </div>
              <span className="user_name">@aftaab67</span>
            </div>
            <div className="number">23%</div>
          </div>
          <div className="user">
            <div>
              <div className="user_image">
                <img src="/Images/Random/two.jpg" alt="" />
              </div>
              <span className="user_name">@mathews</span>
            </div>
            <div className="number">23%</div>
          </div>
          <div className="user">
            <div>
              <div className="user_image">
                <img src="/Images/Random/man_1.jpg" alt="" />
              </div>
              <span className="user_name">@vegas</span>
            </div>
            <div className="number">23%</div>
          </div>
          <div className="user">
            <div>
              <div className="user_image">
                <img src="/Images/Random/three.jpg" alt="" />
              </div>
              <span className="user_name">@grand</span>
            </div>
            <div className="number">23%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
