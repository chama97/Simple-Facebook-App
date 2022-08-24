import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import ImgOne from '../../assets/img/86853.jpg';


export default class PostCard extends Component {
    

    render() {
        return (
            <>
                    <Card sx={{ maxWidth: '100%', marginTop: '20px' }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    C
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                    </IconButton>
                            }
                            title="Chamath Manchanayake"
                            subheader="August 24, 2022"
                        />
                        <CardMedia
                            component="img"
                            height="300"
                            imag src={ImgOne}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography>
                        </CardContent>
                        <CardActions style={{display: 'flex', justifyContent: 'space-around'}}>
                            <IconButton aria-label="add to favorites">
                                <ThumbUpOutlinedIcon sx={{ mr: 1 }}/>
                                <span style={{fontSize:'18px', fontWeight:'bold'}}>Like</span>

                            </IconButton>
                            <IconButton aria-label="add to favorites">
                                <InsertCommentOutlinedIcon sx={{ mr: 1 }}/>
                                <span style={{fontSize:'18px', fontWeight:'bold'}}>Comment</span>
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon sx={{ mr: 1 }}/>
                                <span style={{fontSize:'18px', fontWeight:'bold'}}>Share</span>
                            </IconButton>
                        </CardActions>
                    </Card>
                
            </>
        );
    }
}