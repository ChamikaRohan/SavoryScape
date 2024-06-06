import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./styles.css"
import { Button, Divider, List, ListItemText, Paper, TextField } from '@mui/material';
import Grid from 'react-loading-icons/dist/esm/components/grid';
import SendIcon from '@mui/icons-material/Send';
import "./Post.css"
import {Toaster, toast} from "react-hot-toast"

function truncateContent(content, limit) {
  if (content.length > limit) {
    return content.substring(0, limit) + '...';
  }
  return content;
}

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Post({onClick, id, name, style, description, image, comments }) {
  const apiURL = import.meta.env.VITE_API_BASE_URL;
  const truncatedName = truncateContent(description, 100);
  const [expanded, setExpanded] = React.useState(false);
  const [newcomment, setNewcomment] = React.useState("");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handlePostComment = async() =>{
    try{
      const response = await fetch(`${apiURL}/recipe/addcomment/${id}`,{
        method: "POST",
        headers : {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newcomment)
      });
      const data = await response.json();
      toast.success('Comment added succesfully!',{duration: 1500});
      setTimeout(()=>{
        window.location.reload();
    }, 1800);
    }
    catch(error)
    {
      toast.error("Comment was failed!",{duration: 1500});
      console.log(error);
    }
  }

  return (
    <Card elevation={2} sx={{ ":hover": {boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)"}, maxWidth: 220, maxHeight: "auto" }}>
      <CardHeader onClick={onClick}
        title={<Typography variant='h7' sx={{ fontFamily: "Poppins Medium" }}>{name}</Typography>}
        subheader={style}/>
      
      <CardMedia onClick={onClick}
        component="img"
        height="194"
        image={image}
        alt="memory img"
        sx={{maxHeight: "120px"}}
      />

      <CardContent onClick={onClick} sx={{paddingBottom: "0"}}>
        <Typography variant="body2" color="text.secondary">{truncatedName}</Typography>
      </CardContent>

      <CardActions disableSpacing>

      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <TextField
            value={newcomment}
            onChange={(e)=>setNewcomment(e.target.value)}
            id="outlined-required"
            label="Leave a comment"
            size="small"
            fullWidth
            multiline
            inputProps={{ 
              sx: { 
                fontFamily: "Poppins Regular", 
                fontSize: { xs: '9px', sm: '9px', md: '10px' }, 
                height: '40px', // Set consistent height
              } 
            }}
            InputLabelProps={{ 
              sx: { 
                fontFamily: "Poppins Regular", 
                fontSize: { xs: '10px', sm: '10px', md: '11px' },
                lineHeight: '40px', // Set consistent height for label
              }  
            }}
            sx={{ height: '40px' }} // Set consistent height for TextField
          />

          <Button 
            size="small" 
            variant="contained" 
            sx={{ 
              height: '40px', 
              minWidth: '40px', 
              fontSize: "10px",
              fontFamily: "Poppins Regular",
              backgroundColor: "darkcyan"
            }}
            onClick={handlePostComment}>post</Button>
      </div>

        <ExpandMore
          sx={{padding: "0"}}
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <List>
        <Typography sx={{ fontSize: { xs: "11px", sm: "12px" } }}>Comments Section</Typography>
              <Divider />
        </List>

        {Array.isArray(comments) && comments.length > 0 ? (
          comments.map((comment, index) => (
              <Typography sx={{ color: "gray" , fontSize: { xs: "9px", sm: "11px" } }}>{comment}</Typography>
          ))
        ) : (
          <Typography sx={{ color: "gray", fontSize: { xs: "9px", sm: "11px" } }}>No comments available</Typography>
        )}
      </CardContent>
    </Collapse>
    <Toaster position="top-center" reverseOrder={false}/>
    </Card>
  );
}