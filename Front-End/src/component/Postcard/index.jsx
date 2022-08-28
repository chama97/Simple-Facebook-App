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
import PostService from "../../services/PostService";


export default class PostCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],  
        }
    }

    loadData = async () => {
        let res = await PostService.fetchPost();
        if (res.status === 200) {
            this.setState({
                data: res.data,
            });
        } else {
            console.log("fetching error: " + res)
        }
    };

    componentDidMount() {
        this.loadData();
    }

    render() {
        return (
            <>
            {
                this.state.data.map((card) => (
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
                            title={card.userId}
                            subheader={card.date}
                        />
                        <CardMedia
                            component="img"
                            height="300"
                            src={card.body}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {card.title}
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

                ))
            } 
            </>
        );
    }
}