import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const CustomCard = ({ url }) => {
  return (
    <Card>
      <CardMedia component="img" image={url} />
    </Card>
  );
};

export default CustomCard;
