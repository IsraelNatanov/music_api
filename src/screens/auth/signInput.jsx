import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SignIn from './signIn';
import Signup from './signup';
import { Dialog, Paper } from '@mui/material';
import { useState } from 'react';
import SuccessApi from '../../components/alert/successApi';
import { Margin } from '@mui/icons-material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function SignInput() {
  const [success, setSuccess] = useState(false);
  const [value, setValue] = useState(0)
  const [open, setOpen] = React.useState(true);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  const handleButtonClick = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 1000);
  }

  
 
  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
      if(location.pathname == "/editingPlaylist"){
       navigate.goBack(null)
      }
      else navigate(-1)
    }
  };

  return success ? (
    <SuccessApi />) : (
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}  >

    <Paper elevation={20} >
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        variant="fullWidth"

      >
        <Tab label="Sign In" />

        <Tab label="Sign Up" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SignIn
          handleChange={handleChange}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Signup handleChange={handleChange} handleButtonClick={handleButtonClick} />
      </TabPanel>
    </Paper>
    </Dialog>

  );
}
