import React from "react";
import "./styles.css";
import Person3Icon from "@mui/icons-material/Person3";
import MessageIcon from "@mui/icons-material/Message";
import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <Person3Icon fontSize="large" className="header__icon" />
      </IconButton>

      <img
        className="header__logo"
        srcc="https://1000logos.net/wp-content/uploads/2019/06/tinder-logo.jpg"
        alt="logo brand"
      />
      <IconButton>
        <MessageIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
};

export default Header;
