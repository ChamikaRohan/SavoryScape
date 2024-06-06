import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Theme from "../../utils/Theme.js";
import { ThemeProvider } from '@emotion/react';

export default function CategoryCard({ onClick, category, img }) {
  return (
    <ThemeProvider theme={Theme}>
      <Card 
        onClick={onClick} 
        elevation={4} 
        sx={{ 
          maxWidth: 200,
          minWidth: 200, 
          backgroundColor: Theme.palette.third.main,
          transition: "transform 0.3s, box-shadow 0.3s",
          '&:hover': {
            transform: "scale(1.05)",
            boxShadow: "0 8px 16px rgba(0,0,0,0.2)"
          }
        }}
      >
        <CardActions sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 16px 0 16px" }}>
          <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: "Poppins Regular" }}>
            {category}
          </Typography>
          <Button sx={{ minWidth: 0, padding: 0 }} size="small" color="primary">
            <MoreVertIcon sx={{ fontSize: "1rem" }} />
          </Button>
        </CardActions>
        <CardActionArea>
          <CardMedia
            component="img"
            height="160"
            image={img}
            alt="category"
          />
        </CardActionArea>
      </Card>
    </ThemeProvider>
  );
}
