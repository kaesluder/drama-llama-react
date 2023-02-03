import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import ArticleIcon from '@mui/icons-material/Article';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import * as DOMPurify from 'dompurify';
import * as R from 'ramda';
import { DateTime } from 'luxon';
import './Item.css';

const Item = function (props) {
  const convertParsedDate = (parsedDate) =>
    DateTime.fromSeconds(parsedDate).toLocaleString();

  const tagList = props.itemData['filter_results'].map((result) => {
    return <Chip label={result['tag']} key={result['tag']}></Chip>;
  });

  const readStyle = props.itemData['dl_read'] ? { color: 'text.disabled' } : {};

  const clean_summary = DOMPurify.sanitize(
    props.itemData['summary'] ?? 'no summary'
  );

  const readIcon = function () {
    if (props.itemData['dl_read']) {
      return <BeenhereIcon sx={{ mr: 1 }} />;
    } else {
      return <ArticleIcon sx={{ mr: 1 }} />;
    }
  };

  return (
    <Paper sx={{ m: 1 }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={readStyle}
        >
          {readIcon()}
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
          <Box>
            <div
              sx={{ width: 1 }}
              className="itemSummary"
              dangerouslySetInnerHTML={{ __html: clean_summary }}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
};

export default Item;
