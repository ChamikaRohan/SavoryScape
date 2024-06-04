import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import {Toaster, toast} from "react-hot-toast"
import "./styles.css"

function truncateContent(content, limit) {
  if (content.length > limit) {
    return content.substring(0, limit) + '...';
  }
  return content;
}

export default function Post({onClick,_id, likes, name, style, description, image }) {
  const apiURL = import.meta.env.VITE_API_BASE_URL;

  const truncatedName = truncateContent(description, 100);
  const [likeCount, setLikeCount] = React.useState(likes);

  // const handleDelete = async()=>{
  //   try{
  //     const response = await fetch(`${apiURL}/posts/delete-pmessage`,{
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({_id})
  //     });
  
  //     const data = await response.json();
  //     toast.success('Post-memory deletion successful!',{duration: 1500});
  //     setTimeout(()=>{
  //       window.location.reload();
  //     }, 1800);
  
  //   }
  //   catch(error)
  //   {
  //     toast.error('Post-memory deletion failed!',{duration: 1500});
  //     toast.error(`${error}`,{duration: 1500});
  //     console.log("There was a problem with the fetch operation: ", error);
  //   }
  // }

  // const handleLike = async () => {
  //   const newLikesCount = likeCount + 1;
  //   setLikeCount(newLikesCount); 
  
  //   try {
  //     const response = await fetch(`${apiURL}/posts/update-pmessage`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({ _id, likeCount: newLikesCount }) // Use newLikesCount here
  //     });
  //     const data = await response.json();
  //     console.log(data.message);
  //   } catch (error) {
  //     console.error("There was a problem with the fetch operation:", error);
  //   }
  // }
  // const handleClick = (event) => {
  //   const element = event.currentTarget;
  //   element.style.animation = 'heartBeat 0.6s ease-in-out';
  //   element.addEventListener('animationend', () => {
  //     element.style.animation = '';
  //   }, { once: true });
  // };
  return (
    <Card onClick={onClick} elevation={2} sx={{ ":hover": {boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)"}, maxWidth: 220 }}>
      <CardHeader
        title={<Typography variant='h7' sx={{ fontFamily: "Poppins Medium" }}>{name}</Typography>}
        subheader={style}/>
      
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="memory img"
        sx={{maxHeight: "120px"}}
      />

      <CardContent sx={{paddingBottom: "0"}}>
        <Typography variant="body2" color="text.secondary">{truncatedName}</Typography>
      </CardContent>

      <CardActions sx={{ padding: "0" ,display: "flex", flexDirection: "row", justifyContent: "space-between"}} disableSpacing>
        {/* <IconButton aria-label="delete">
          <DeleteForeverIcon/>
        </IconButton> */}
        <IconButton aria-label="like" sx={{color:'red'}}>
          <FavoriteIcon style={{ fontSize: '25px', display: 'inline-block' }} />
          <Typography sx={{color: "red", fontSize: "20px"}}>{likeCount}</Typography>
        </IconButton>
      </CardActions>
      {/* <Toaster/> */}
    </Card>
  );
}