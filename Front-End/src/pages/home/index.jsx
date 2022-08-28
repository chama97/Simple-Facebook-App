import {Component, Fragment} from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Appbar from "../../component/Appbar";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import Postcard from '../../component/Postcard';
import localStorageService from "../../services/StorageService";
import jwt_decode from "jwt-decode";
import PostService from "../../services/PostService";


class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            _id: "",
            name: {
                firstname: "",
                lastname: ""
            },
            gender: "",
            dateOfBirth : "",
            email: "",
            password: "",
            contact: "",

            formData: {
                userId: 'aaa',
                date: '',
                time: '',
                title: '',
                body: []
            },

            alert: false,
            message: '',
            severity: '', 
        }
    }

    componentDidMount = async () =>{
      const token = await localStorageService.getItem("token");
      if (token){
        console.log(token);
        const decode = jwt_decode(token.data);
        console.log(decode._id);
        this.setState({
            _id: decode._id,
            name: {
                firstname: decode.name.firstname,
                lastname: decode.name.lastname
            },
            gender: decode.gender,
            dateOfBirth : decode.dateOfBirth,
            email: decode.email,
            password: decode.password,
            contact: decode.contact
        })
      }
    }

    clearFields = () => {
        this.setState({
            formData: {
                userId: this.state._id,
                date: '',
                time: '',
                title: '',
                body: []
            },
        });
    };

    submitPost = async () => {
        let formData = this.state.formData;
        let res = await PostService.postPost(formData);
  
        console.log(res)
    
        if (res.status === 200) {
            this.setState({
                alert: true,
                message: 'done',
                severity: 'success'
            });
            this.clearFields();
        } else {
            this.setState({
                alert: true,
                message: 'error try again',
                severity: 'error'
            });
        }
    }

   
    render(){
        let { classes } = this.props

        return(
            <Fragment >
                <div><Appbar /></div>
                <div className={classes.container}>
                    <div className={classes.menuSide}>
                        <div className={classes.profileImg}>
                            <AccountCircle style={{fontSize:'150px', color:'#88bbdd'}}/>
                            <span style={{fontSize:'25px', fontWeight:'bold', color:'#1f2323' }}> {this.state.name.firstname} { this.state.name.lastname}</span>
                           
                        </div>
                        <div className={classes.profileDetail}>
                            <Grid container style={{ paddingLeft:'30px'}} spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                            <Grid item lg={6} md={6} sm={6} xm={6}  style={{ marginTop:'20px'}} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="First Name :" InputProps={{readOnly: true,}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6}  style={{ marginTop:'20px'}} >
                                <TextField id="outlined-basic"  variant="outlined" value= {this.state.name.firstname}/>
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="Last Name :" InputProps={{readOnly: true,}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" value= {this.state.name.lastname}/>
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="Gender :" InputProps={{readOnly: true,}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" value= {this.state.gender}/>
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="Date of Birth :" InputProps={{readOnly: true,}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" value= {this.state.dateOfBirth}/>
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="Email :" InputProps={{readOnly: true,}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" value= {this.state.email}/>
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="Password :" InputProps={{readOnly: true,}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" value={this.state.password}/>
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" defaultValue="Contact :" InputProps={{readOnly: true,}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic"  variant="outlined" value={this.state.contact}/>
                            </Grid>
                            </Grid> 
                        </div>
                    </div>
                    <div className={classes.postSide}>
                        <div className={classes.post}>
                            <div className={classes.postTitle}><span>Create post</span></div>
                            <ValidatorForm
                                ref="form"
                                 onSubmit={this.submitPost}
                                onError={errors => console.log(errors)}
                                className={classes.form__container}>
                                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ padding:'20px'}} >
                                    <Grid item lg={12} md={12} sm={12} xm={12}  style={{ marginTop:'20px'}} >
                                        <TextValidator
                                            id="outlined-basic"
                                            label="What's on your mind ?"
                                            variant="outlined"
                                            value={this.state.formData.title}
                                            onChange={(e) => {
                                                console.log(e.target.value)
                                                let formData = this.state.formData
                                                formData.title = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required']}
                                        />
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xm={12}>
                                        <Button variant="outlined" component="label" size="large" endIcon={<CameraAltIcon />}>
                                            Add to your post
                                            <input hidden accept="image/*" multiple type="file" 
                                                onChange={(e) => {
                                                    let formData = this.state.formData
                                                    formData.interiorView = e.target.files[0]
                                                    this.setState({ formData })
                                                }}
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
                            <Postcard />
                        </div>
                    </div>
                </div>

            </Fragment>  
        )
    }
}

export default withStyles(styleSheet)(Home) 
