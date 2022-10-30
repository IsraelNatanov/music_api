
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import './App.css'
import Index from './screens/home'
import Home from './screens/home'
import {TodoContext} from "./context/todoContext"
import namePlaylistSlice from './features/createPlaylistUser'
const myStore = configureStore({
  reducer:{
    namePlaylistSlice
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
