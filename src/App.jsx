
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import './App.css'
import Index from './screens/home';
import namePlaylistSlice from './features/createPlaylistUser';
import editingPlaylistSlice from './features/editingPolaylsitUser';
import tokenDataSlice from './features/tokenData';
const myStore = configureStore({
  reducer:{
    "name":namePlaylistSlice,
    "editing":editingPlaylistSlice,
    "token":tokenDataSlice,
  }
})
function App() {
  

  return (
    <Provider store={myStore}>
      < Index />
      
    </Provider>
  )
}

export default App
