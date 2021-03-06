import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/features/user_reducer";

function Nav({ user, activePage }) {
  const dispatch = useDispatch();
  const history = useHistory();

  // Logout
  const logoutUser = () => {
    dispatch(logout());

    history.push("/access");
  };

  const navigate = (name) => {
    if (name === "home") {
      history.push("/");
    } else {
      history.push("/chat");
    }
  };

  return (
    <div className="navigation__side">
      <div>
        <div className="logo">
          <img src="/Images/SVG/logo.svg" alt="Logo" />
        </div>
        <div
          className={activePage === "home" ? "icon active" : "icon"}
          onClick={() => navigate("home")}
        >
          <i className="fa fa-home"></i>
        </div>
        <div
          className={activePage === "chat" ? "icon active" : "icon"}
          onClick={() => navigate("chat")}
        >
          <i className="fa fa-comment"></i>
        </div>
      </div>
      <div>
        <div className="icon" onClick={logoutUser}>
          <i className="fas fa-power-off"></i>
        </div>
        <div className="icon">
          <i className="fa fa-cog"></i>
        </div>
        <div className="indicator">
          <div className="profile">
            <img src={user.avatar} alt="Preview" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
