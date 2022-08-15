import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import { useTheme } from '@mui/material/styles';
import First from './first';
import Two from './two';
import ComboBox from './comboBox';
import { Navigate, useNavigate } from 'react-router-dom';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
export default function FilterSearch(props) {
  
  // const refArtists = useRef();
  // const refAlbum = useRef();
  // const refSong = useRef();
  const navigate = useNavigate();
  const theme = useTheme();
  const [aritsts, setAritsts] = React.useState([]);
  const [personId, setPersonId] = React.useState([]);

  const [value, setValue] = React.useState('');
  let [inputAlbum, setInputAlbum] = React.useState([]);
  // let [album, setAlbum] = useState([]);
   let [song, setSong] = React.useState([]);
 

  

  let cc= (name)=>{
    setAritsts(name)
  }

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    // props.setInputAlbum(refArtists.current.value)
    
    
    
    
    
  };
  let inputAritsts = async(item)=>{
    await setAritsts(item)

  }
  

  const [open, setOpen] = React.useState(true);
  
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
      navigate("/artists")
    }
  };
  return (
    <div className="screen-container">
      {/* <Button onClick={handleClickOpen}>Open select dialog</Button> */}
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose} >
        <DialogTitle > חפש זמר</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <ComboBox  />
          {/* <First setAritsts={setAritsts} /> */}
          {/* {aritsts.name}<Two aritsts = {aritsts}/> */}
          
          {/* <First index={2} setSong = {setSong} inputAlbum={inputAlbum}/> */}
          
          
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {/* <Button onClick={handleClose}>Ok</Button> */}
        </DialogActions>
      </Dialog>
      
      
    </div>
  )
}

