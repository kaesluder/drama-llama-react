import Box from '@mui/material/Box';
import Item from './Item';

const ItemList = function (props) {
  const renderedList = props.itemsStatus.map((item) => {
    return <Item itemData={item} key={item.id}></Item>;
  });

  return <Box>{renderedList}</Box>;
};

export default ItemList;
