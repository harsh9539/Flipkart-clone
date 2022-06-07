import { Box } from '@mui/system';
//Components
import Header from "./Components/Header/Header.jsx"
import Home from './Components/Home/Home';
import DataProvider from './context/DataProvider.jsx';
function App() {
  return (
    <DataProvider >
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Home />
      </Box>
    </DataProvider>
  );
}

export default App;
