import React from 'react';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import withStyles from 'material-ui/styles/withStyles';
import PropTypes from 'prop-types';
import logo from 'assets/logo.png';

const style = {
  root: {
    padding: 20,
    margin: 'auto',
    'max-width': '800px',
    'text-align': 'center',
    height: '300px',
  },
  logo: {
    marginBottom: '50px',
  },
};

const Welcome = props => (
  <Paper className={props.classes.root}>
    <img src={logo} alt="" height="100px" className={props.classes.logo} />
    <Typography type="headline" component="h3">
      {props.title}
    </Typography>
    <Button onClick={props.onClick} raised>
      {props.btnText}
    </Button>
  </Paper>
);

Welcome.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};

export default withStyles(style)(Welcome);
