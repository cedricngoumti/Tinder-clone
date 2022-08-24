import React from "react";
import "./styles.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { IconButton } from "@mui/material";
const SwipeButtons = () => {
  return (
    <div className="swipe__footer">
      <IconButton>
        <ArrowBackIcon className="footer_icon" fontSize="large" />
      </IconButton>

      <IconButton>
        <ArrowForwardIcon className="footer_icon" fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
