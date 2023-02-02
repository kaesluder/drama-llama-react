import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import * as R from 'ramda';

import { DateTime } from 'luxon';

const Item = function (props) {
  const convertParsedDate = (parsedDate) =>
    DateTime.fromSeconds(parsedDate).toLocaleString();

  const tagList = props.itemData['filter_results'].map((result) => {
    return <Chip label={result['tag']} key={result['tag']}></Chip>;
  });

  return (
    <Paper sx={{ m: 1 }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Stack>
            <div>
              <Typography>{props.itemData['title'] ?? 'no title'}</Typography>
            </div>
            <div>
              <Chip
                label={convertParsedDate(props.itemData['published_parsed'])}
              ></Chip>
              {tagList}
            </div>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{props.itemData['summary'] ?? 'no summary'}</Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
};

export default Item;
