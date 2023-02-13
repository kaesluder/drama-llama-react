import { fireEvent, render, screen } from '@testing-library/react';
import DialogPreDelete from './DialogPreDelete';

// DialogPreDelete.propTypes = {
//   handleDelete: PropTypes.func,
//   toggleDeleteFeedOpen: PropTypes.func,
//   open: PropTypes.bool,
//   deleteFeedID: PropTypes.string,
//   deleteCount: PropTypes.number,
// };

const open = true;
const deleteFeedID = 'test1';
const deleteCount = 42;

test('renders buttons and description', async () => {
  const handleDelete = jest.fn();
  const toggleDeleteFeedOpen = jest.fn();
  render(
    <DialogPreDelete
      handleDelete={handleDelete}
      toggleDeleteFeedOpen={toggleDeleteFeedOpen}
      open={open}
      deleteFeedID={deleteFeedID}
      deleteCount={deleteCount}
    ></DialogPreDelete>
  );
  const test1 = screen.getByText(/test1/);
  expect(test1).toBeInTheDocument();
  const tag1 = screen.getByText(/42/i);
  expect(tag1).toBeInTheDocument();
});

test('cancel calls toggle function', async () => {
  const handleDelete = jest.fn();
  const toggleDeleteFeedOpen = jest.fn();
  render(
    <DialogPreDelete
      handleAddFilter={handleDelete}
      toggleDeleteFeedOpen={toggleDeleteFeedOpen}
      open={open}
      deleteFeedID={deleteFeedID}
      deleteCount={deleteCount}
    ></DialogPreDelete>
  );
  const cancel = screen.getByText(/Cancel/i);
  fireEvent.click(cancel);

  expect(toggleDeleteFeedOpen).toBeCalledTimes(1);
});

test('submit calls handler function', async () => {
  const handleDelete = jest.fn();
  const toggleDeleteFeedOpen = jest.fn();
  render(
    <DialogPreDelete
      handleDelete={handleDelete}
      toggleDeleteFeedOpen={toggleDeleteFeedOpen}
      open={open}
      deleteFeedID={deleteFeedID}
      deleteCount={deleteCount}
    ></DialogPreDelete>
  );
  const deleteFeed = screen.getByText(/Delete Feed/i);
  fireEvent.click(deleteFeed);

  expect(handleDelete).toBeCalledTimes(1);
});
