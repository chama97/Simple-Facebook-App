import {Component} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';


class Appsbar extends Component{

  
    render(){
  
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#2c2c6d' }}>
      <AppBar position="static" sx={{backgroundImage: 'linear-gradient(to right top, #b1c5eb, #c1d2f0, #d2e0f5, #e3edfa, #f6faff)'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 0 }}
          >
            <FacebookRoundedIcon  style={{fontSize:'50px', color:'#0073e6'}} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' ,fontSize:'31px', fontWeight:'bold', color:'#0073e6' } }}
          >
            facebook
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <MessageRoundedIcon style={{fontSize:'50px', color:'#0073e6'}}/>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={2} color="error">
                <NotificationsIcon style={{fontSize:'50px', color:'#0073e6'}}/>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle style={{fontSize:'50px', color:'#0073e6'}}/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
}
export default  Appsbar