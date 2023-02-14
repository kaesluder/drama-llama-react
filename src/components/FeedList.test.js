import { fireEvent, render, screen } from '@testing-library/react';
import FeedList from './FeedList';

// FeedList.propTypes = {
//   handlePreDelete: PropTypes.func,
//   handleSelect: PropTypes.func,
//   feedsStatus: PropTypes.array,
// };

const testFeed = { dl_feed_id: 'test1', title: 'title1' };
const testFeed2 = { dl_feed_id: 'test2', title: 'title2' };

const feedsStatus = [testFeed, testFeed2];

test('renders list of feeds', async () => {
  const handlePreDelete = jest.fn();
  const handleSelect = jest.fn();
  render(
    <FeedList
      feedsStatus={feedsStatus}
      handlePreDelete={handlePreDelete}
      handleSelect={handleSelect}
    ></FeedList>
  );
  const test1 = screen.getByText(/title1/);
  expect(test1).toBeInTheDocument();
  const test2 = screen.getByText(/title2/);
  expect(test2).toBeInTheDocument();
});
