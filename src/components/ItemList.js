import Box from '@mui/material/Box';
import Item from './Item';
import * as R from 'ramda';
import { useEffect } from 'react';

const sortByDate = R.compose(R.reverse, R.sortBy(R.prop('published_parsed')));

const ItemList = function (props) {
  useEffect(() => {
    /* Unorthodox for React, but ensure that clicked links open 
  in a browser window rather than the app window. */
    document.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && !e.target.hasAttribute('target')) {
        e.target.setAttribute('target', '_blank');
      }
    });
  }, []);

  const renderedList = sortByDate(props.itemsStatus).map((item) => {
    return <Item itemData={item} key={item.id}></Item>;
  });

  return <Box>{renderedList}</Box>;
};

export default ItemList;
