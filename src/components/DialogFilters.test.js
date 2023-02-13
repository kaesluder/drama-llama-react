import { fireEvent, render, screen } from '@testing-library/react';
import DialogFilters from './DialogFilters';

/** DialogFilters.propTypes = {
  open: PropTypes.bool,
  filterList: PropTypes.array,
  toggleFilterDialogOpen: PropTypes.func,
  handleAddFilter: PropTypes.func,
};
};
 */

const filterDialogOpen = true;
const testFilter = { id: 'test1', tag: 'tag1' };
const filterList = [testFilter];

test('renders buttons and description', async () => {
  const handleAddFilter = jest.fn();
  const toggleFilterDialogOpen = jest.fn();
  render(
    <DialogFilters
      handleAddFilter={handleAddFilter}
      toggleFilterDialogOpen={toggleFilterDialogOpen}
      filterDialogOpen={true}
      filterList={filterList}
    ></DialogFilters>
  );
  const test1 = screen.getByText(/test1/);
  expect(test1).toBeInTheDocument();
  const tag1 = screen.getByText(/tag1/i);
  expect(tag1).toBeInTheDocument();
});

test('cancel calls toggle function', async () => {
  const handleAddFilter = jest.fn();
  const toggleFilterDialogOpen = jest.fn();
  render(
    <DialogFilters
      handleAddFilter={handleAddFilter}
      toggleFilterDialogOpen={toggleFilterDialogOpen}
      filterDialogOpen={true}
      filterList={filterList}
    ></DialogFilters>
  );
  const cancel = screen.getByText(/Cancel/);
  fireEvent.click(cancel);

  expect(toggleFilterDialogOpen).toBeCalledTimes(1);
});

test('Submit should be disabled on load.', async () => {
  const handleAddFilter = jest.fn();
  const toggleFilterDialogOpen = jest.fn();
  render(
    <DialogFilters
      handleAddFilter={handleAddFilter}
      toggleFilterDialogOpen={toggleFilterDialogOpen}
      filterDialogOpen={true}
      filterList={filterList}
    ></DialogFilters>
  );
  const submit = screen.getByText(/Submit/i);
  expect(submit).toBeDisabled();
});
