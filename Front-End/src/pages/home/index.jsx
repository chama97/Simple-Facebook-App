import {Component, Fragment} from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Appbar from "../../component/Appbar";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import ImgOne from '../../assets/img/86853.jpg';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { color } from "@mui/system";
import TextField from '@mui/material/TextField';


class Home extends Component{

   

    render(){
        let { classes } = this.props

        return(
            <Fragment >
                <div><Appbar /></div>
                <div className={classes.container}>
                    <div className={classes.menuSide}>
                        <div className={classes.profileImg}>
                            <AccountCircle style={{fontSize:'150px', color:'#88bbdd'}}/>
                            <span style={{fontSize:'25px', fontWeight:'bold', color:'#1f2323' }}>Chamath Manchanayake</span>
                        </div>
                        <div className={classes.profileDetail}>
                        <Grid container style={{ paddingLeft:'30px'}} spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                            <Grid item lg={6} md={6} sm={6} xm={6}  style={{ marginTop:'20px'}} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="First Name :" InputProps={{readOnly: true,}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6}  style={{ marginTop:'20px'}} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="Chamath"/>
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="Last Name :" InputProps={{readOnly: true,}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="Manchanayake"/>
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="Gender :" InputProps={{readOnly: true,}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="Male"/>
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="Date of Birth :" InputProps={{readOnly: true,}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="1997-12-09"/>
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="Email :" InputProps={{readOnly: true,}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="Chama@gmail.com"/>
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="Password :" InputProps={{readOnly: true,}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="1234"/>
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="Contact :" InputProps={{readOnly: true,}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="0928374637"/>
                            </Grid>
                    </Grid> 

                        </div>
    
                    </div>
                    <div className={classes.postSide}>
                        <div className={classes.post}>
                            <div className={classes.postTitle}><span>Create post</span></div>
                            <ValidatorForm
                                ref="form"
                                // onSubmit={this.submitCustomer}
                                onError={errors => console.log(errors)}
                                className={classes.form__container}>
                                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ padding:'20px'}} >
                                    <Grid item lg={12} md={12} sm={12} xm={12}  style={{ marginTop:'20px'}} >
                                        <TextValidator
                                            id="outlined-basic"
                                            label="What's on your mind ?"
                                            variant="outlined"
                                            // value={this.state.formData.userName}
                                            // onChange={(e) => {
                                            //     console.log(e.target.value)
                                            //     let formData = this.state.formData
                                            //     formData.userName = e.target.value
                                            //     this.setState({ formData })
                                            // }}
                                            style={{ width: '100%' }}
                                            validators={['required']}
                                        />
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xm={12}>
                                        <Button variant="outlined" component="label" size="large" endIcon={<CameraAltIcon />}>
                                            Add to your post
                                            <input hidden accept="image/*" multiple type="file" 
                                                // onChange={(e) => {
                                                //     let formData = this.state.formData
                                                //     formData.interiorView = e.target.files[0]
                                                //     this.setState({ formData })
                                                // }}
                                            />
                                        </Button>
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xm={12} >
                                        <button className={classes.btnPost}
                                            variant="contained"
                                            label="Log In"
                                            type="submit"
                                        > Post
                                        </button>
                                    </Grid>
                                </Grid>
                            </ValidatorForm>
                        </div>
                        <div className={classes.postWidge}>
                            <Card sx={{ maxWidth: '100%' }}>
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
                        </div>
                    </div>
                    {/* <div className={classes.userSide}>

                    </div> */}
                    
                </div>

               
            </Fragment>  
        )
    }
}

export default withStyles(styleSheet)(Home) 
