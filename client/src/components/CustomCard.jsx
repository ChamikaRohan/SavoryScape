import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";

const CustomCard = ({ url, onClick }) => {
  return (
    <Card >
      <CardMedia component="img" image={url} />
    </Card>
  );
};

export default CustomCard;
