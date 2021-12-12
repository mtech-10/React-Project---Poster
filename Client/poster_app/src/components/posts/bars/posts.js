import React from "react";
import getElapsedTime from "../../../timing";

function Posts({ posts }) {
  return (
    <div className="posts">
      <div className="wrapper">
        {posts.length !== 0 ? (
          posts.map((post) => (
            <div className="post_box" key={post.PostID} postid={post.PostID}>
              <div className="top__bar">
                <div>
                  <div className="image">
                    <img
                      src={
                        post.Avatar.length === 1
                          ? "/Images/Avatars/Image - " + post.Avatar + ".jpg"
                          : "Images/Uploads/" + post.Avatar
                      }
                      alt=""
                    />
                  </div>
                  <div>
                    <span className="name">{post.Name}</span>
                    <span className="date">
                      {getElapsedTime(post.Date.toString()).Date_String}
                    </span>
                  </div>
                </div>
                <i className="fa fa-bars"></i>
              </div>
              <div className="postTitle">{post.Title}</div>
              {post.Image !== "" && (
                <div className="middle_bar">
                  <img src={"/Images/Uploads/" + post.Image} alt="" />
                </div>
              )}
              <div className="last__bar">
                <div>
                  <i className="fa fa-heart"></i>
                  <p>23.7K</p>
                </div>
                <div>
                  <i className="fa fa-comment"></i>
                  <p>12.3K</p>
                </div>
                <div>
                  <i className="fa fa-share"></i>
                  <p>234.4K</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>Empty Posts</h1>
        )}
      </div>
    </div>
  );
}

export default Posts;
