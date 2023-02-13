import { fireEvent, render, screen } from '@testing-library/react';
import DialogAddFeed from './DialogAddFeed';

/** DialogAddFeed proptypes
 * DialogAddFeed.propTypes = {
  handleAddFeed: PropTypes.func,
  toggleAddFeedOpen: PropTypes.func,
};
 */

test('renders buttons and description', async () => {
  const handleAddFeed = jest.fn();
  const toggleAddFeedOpen = jest.fn();
  render(
    <DialogAddFeed
      handleAddFeed={handleAddFeed}
      toggleAddFeedOpen={toggleAddFeedOpen}
      open={true}
    ></DialogAddFeed>
  );
  const subscribe = screen.getAllByText(/subscribe/i);
  expect(subscribe.length).toBe(2);
  const cancel = screen.getByText(/Cancel/);
  expect(cancel).toBeInTheDocument();
  const add_feed = screen.getByText(/Add Feed/i);
  expect(add_feed).toBeInTheDocument();
});

test('cancel calls toggle function', async () => {
  const handleAddFeed = jest.fn();
  const toggleAddFeedOpen = jest.fn();
  render(
    <DialogAddFeed
      handleAddFeed={handleAddFeed}
      toggleAddFeedOpen={toggleAddFeedOpen}
      open={true}
    ></DialogAddFeed>
  );
  const cancel = screen.getByText(/Cancel/);
  fireEvent.click(cancel);

  expect(toggleAddFeedOpen).toBeCalledTimes(1);
});

test('Add feed calls handleAddFeed function', async () => {
  const handleAddFeed = jest.fn();
  const toggleAddFeedOpen = jest.fn();
  render(
    <DialogAddFeed
      handleAddFeed={handleAddFeed}
      toggleAddFeedOpen={toggleAddFeedOpen}
      open={true}
    ></DialogAddFeed>
  );
  const addFeed = screen.getByText(/Add Feed/i);
  fireEvent.click(addFeed);

  expect(handleAddFeed).toBeCalledTimes(1);
});
