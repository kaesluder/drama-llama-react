import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import MenuIcon from '@mui/icons-material/Menu';
import RefreshIcon from '@mui/icons-material/Refresh';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import Grid from '@mui/material/Grid';
import {
  getFeedData,
  getEntriesForFeed,
  requestRefresh,
  markFeedRead,
  addFeed,
} from './LlamaAPI';
import FeedList from './components/FeedList';
import ItemList from './components/ItemList';
import DialogAddFeed from './components/DialogAddFeed';

function App() {
  const [feedsStatus, setFeedsStatus] = useState([]);
  const [errorStatus, setErrorStatus] = useState();
  const [itemsStatus, setItemsStatus] = useState([]);
  const [selectedFeedStatus, setSelectedFeedStatus] = useState();
  const [addFeedOpen, setAddFeedOpen] = useState(false);

  const handleFeedSelect = function (feedID) {
    setSelectedFeedStatus(feedID);
    console.log(`handleFeedSelect ${feedID}`);
    return getEntriesForFeed(feedID)
      .then((response) => setItemsStatus(response.data))
      .catch((response) =>
        setErrorStatus(`Error fetching items for ${feedID}: ${response}`)
      );
  };

  const handleAddFeed = function (sourceURL) {
    return addFeed(sourceURL)
      .then((response) => {
        return getFeedData();
      })
      .then((response) => {
        return setFeedsStatus(response.data);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          setErrorStatus(error.response.data.message);
        }
      });
  };

  const handleRefresh = function (event) {
    console.log('handleRefresh');
    return requestRefresh()
      .then((response) => {
        console.log('getFeedData');
        return getFeedData();
      })
      .then((response) => {
        console.log('setFeedsStatus');
        return setFeedsStatus(response.data);
      })
      .then(() => {
        console.log('getEntriesForFeed');
        return getEntriesForFeed(selectedFeedStatus);
      })
      .then((response) => {
        console.log('setItemsStatus');
        setItemsStatus(response.data);
      })
      .catch((response) =>
        setErrorStatus(`Error refreshing feeds: ${response}`)
      );
  };

  const handleMarkFeedRead = function (event) {
    console.log('handleMarkFeedRead');
    return markFeedRead(selectedFeedStatus).then((response) =>
      setItemsStatus(response.data)
    );
  };

  const toggleAddFeedOpen = function (event) {
    setAddFeedOpen((curr) => !curr);
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
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="refresh"
                sx={{ mr: 2 }}
                onClick={handleRefresh}
              >
                <RefreshIcon /> <Typography>Refresh</Typography>
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="refresh"
                sx={{ mr: 2 }}
                onClick={handleMarkFeedRead}
              >
                <BeenhereIcon />
                <Typography>Mark Read</Typography>
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="refresh"
                sx={{ mr: 2 }}
                onClick={toggleAddFeedOpen}
              >
                <LibraryAddIcon />
                <Typography>Add Feed</Typography>
              </IconButton>
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
          <DialogAddFeed
            open={addFeedOpen}
            toggleAddFeedOpen={toggleAddFeedOpen}
            handleAddFeed={handleAddFeed}
          />
        </Box>
      </header>
    </div>
  );
}

export default App;
