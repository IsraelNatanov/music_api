
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import './App.css'
import Index from './screens/home';
import namePlaylistSlice from './features/createPlaylistUser';
import editingPlaylistSlice from './features/editingPolaylsitUser';
const myStore = configureStore({
  reducer:{
    "name":namePlaylistSlice,
    "editing":editingPlaylistSlice,
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
