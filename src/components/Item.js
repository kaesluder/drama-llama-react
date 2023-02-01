import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Item = function (props) {
  return (
    <Paper sx={{ m: 1 }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{props.itemData['title'] ?? 'no title'}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{props.itemData['summary'] ?? 'no summary'}</Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
};

export default Item;
