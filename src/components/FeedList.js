import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import RssFeed from '@mui/icons-material/RssFeed';
import DraftsIcon from '@mui/icons-material/Drafts';

const FeedItem = function (props) {
  return (
    <ListItemButton
      onClick={(e) => props.handleSelect(props.feed['dl_feed_id'])}
    >
      <ListItem disablePadding>
        <ListItemIcon>
          <RssFeed />
        </ListItemIcon>
        <ListItemText primary={props.feed['title']} />
      </ListItem>
    </ListItemButton>
  );
};

const FeedList = function (props) {
  const feeds = props.feedsStatus.map((f) => {
    return (
      <FeedItem
        feed={f}
        handleSelect={props.handleFeedSelect}
        key={f.dl_feed_id}
      ></FeedItem>
    );
  });

  return <List>{feeds}</List>;
};

export default FeedList;
