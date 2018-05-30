//This file has the Appbar and menu drawer
import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
// import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import black from '@material-ui/core/colors/black';
// import Todolist from './Todolist2';
// import Calendar from './Calendar';
import Header from './Header.js';
import Hidden from '@material-ui/core/Hidden';
// import Home from './Homepage.js';
// import Landing from './Landing.js';
// import { createMuiTheme } from '@material-ui/core/styles';
// import About from './About';
// import FormGroup from '@material-ui/core/FormGroup';
// import black from '@material-ui/core/colors/black';
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// import ListItemText from '@material-ui/core/ListItemText/ListItemText';

const drawerWidth = 125;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 110,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%', 
    type: 'dark',
    flexWrap: 'wrap', disableGutters: 'true',
    margin: '0'
    
  },
  appBar: {
    position: 'absolute',
    padding:'0px,0px,0px,0px',
    backgroundColor: "#000000", theme: 'dark',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      // direction: 'row',
      // justify: 'center',
      // alignItems: 'center',
    }, 
    width: '100%',
    // display: 'flex',
    // flexWrap: 'wrap',
    disableGutters: 'true',
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar, 
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
    color: 'inherit',
    backgroundColor: 'inherit'
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    margin:'0'
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },

});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
      <div>
        <div className={classes.toolbar} />
        </div>
        <Divider />
        <List><a href="/" >Home</a></List>
        <Divider />
        <List><a href="/dashboard">Create New Task</a></List>
        <Divider />
        <List><a href="/lists">Your Lists</a></List>
        <Divider />
        <List><a href="/calendar">Calendar</a></List>
        <Divider />
        <List><a href="/complete">Completed Chart</a></List>
        <Divider />
        <List><a href="/about">About</a></List>
        <Divider />
      </div>
    );

    return (

      <div className={classes.root} >
        <AppBar className={classes.appBar} >
          <Toolbar>
          <Grid container spacing ={24} direction="row" justify="center" alignItems="center">
            <Grid item xs>
            <IconButton
              color='primary'
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
              >
              <MenuIcon color='primary'/>
            </IconButton>
            </Grid>
            <Grid item xs={6}>
            <Typography align="center" color="secondary" variant='display1' padding='20px 20px' align='center' color="inherit" wrap>
            BLACK List             
            </Typography>
            </Grid>
            <Grid item xs>
              <Header align="right"/>
              </Grid>
            </Grid>
          </Toolbar>
          
        </AppBar>


        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
              color: 'inherit'
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
              color: 'inherit'
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);