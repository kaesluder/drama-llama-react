import * as React from 'react';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import RssFeed from '@mui/icons-material/RssFeed';
import DraftsIcon from '@mui/icons-material/Drafts';

const FeedItem = function (props) {
  const handleDeleteClick = function (e) {
    props.handlePreDelete(props.feed['dl_feed_id']);
  };

  return (
    <div>
      <ListItem disablePadding>
        <ListItemButton
          onClick={(e) => props.handleSelect(props.feed['dl_feed_id'])}
        >
          <ListItemIcon>
            <RssFeed />
          </ListItemIcon>
          <ListItemText primary={props.feed['title']} />
        </ListItemButton>
        <Tooltip title="remove feed">
          <DeleteIcon
            color="secondary"
            fontSize="small"
            onClick={handleDeleteClick}
          />
        </Tooltip>
      </ListItem>
    </div>
  );
};

const FeedList = function (props) {
  const feeds = props.feedsStatus.map((f) => {
    return (
      <FeedItem
        feed={f}
        handleSelect={props.handleFeedSelect}
        handlePreDelete={props.handlePreDelete}
        key={f.dl_feed_id}
      ></FeedItem>
    );
  });

  return <List>{feeds}</List>;
};

export default FeedList;
