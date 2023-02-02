import Box from '@mui/material/Box';
import Item from './Item';
import * as R from 'ramda';

const sortByDate = R.compose(R.reverse, R.sortBy(R.prop('published_parsed')));

const ItemList = function (props) {
  const renderedList = sortByDate(props.itemsStatus).map((item) => {
    return <Item itemData={item} key={item.id}></Item>;
  });

  return <Box>{renderedList}</Box>;
};

export default ItemList;
