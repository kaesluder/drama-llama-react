import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import { getFeedData, getEntriesForFeed } from './LlamaAPI';
import FeedList from './components/FeedList';
import ItemList from './components/ItemList';

function App() {
  const [feedsStatus, setFeedsStatus] = useState([]);
  const [errorStatus, setErrorStatus] = useState();
  const [itemsStatus, setItemsStatus] = useState([]);
  const [selectedFeedStatus, setSelectedFeedStatus] = useState();

  const handleFeedSelect = function (feedID) {
    setSelectedFeedStatus(feedID);
    console.log(`handleFeedSelect ${feedID}`);
    getEntriesForFeed(feedID)
      .then((response) => setItemsStatus(response.data))
      .catch((response) =>
        setErrorStatus(`Error fetching items for ${feedID}: ${response}`)
      );
  };

  useEffect(() => {
    getFeedData()
      .then((response) => {
        setFeedsStatus(response.data);
      })
      .catch((response) => setErrorStatus(`Error fetching feeds: ${response}`));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
            </Toolbar>
          </AppBar>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <FeedList
                feedsStatus={feedsStatus}
                handleFeedSelect={handleFeedSelect}
              ></FeedList>
            </Grid>
            <Grid item xs={8}>
              <ItemList itemsStatus={itemsStatus}></ItemList>
            </Grid>
          </Grid>
        </Box>
      </header>
    </div>
  );
}

export default App;
