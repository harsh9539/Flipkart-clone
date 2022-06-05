import { Box } from '@mui/system';
//Components
import Header from "./Components/Header/Header.jsx"
import Home from './Components/Home/Home';

function App() {
  return (
    <div >
      <Header/>
      <Box  style={{marginTop:54}}>
      <Home/>

      </Box>
    </div>
  );
}

export default App;
