import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ComboBox from './comboBox';
import { useNavigate } from 'react-router-dom';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };


// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }
export default function FilterSearch(props) {
  
  const navigate = useNavigate();


  const [open, setOpen] = React.useState(true);
  
 

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
      if(location.pathname == "/editingPlaylist"){
       navigate.goBack(null)
      }
      else navigate(-1)
    }
  };
  return (
    <div className="screen-container">
     
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose} >
        <DialogTitle > חפש זמר</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <ComboBox  />
       
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
         
        </DialogActions>
      </Dialog>
      
      
    </div>
  )
}

