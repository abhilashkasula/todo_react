const addItem = ({items, nextId, title}, text) => {
  return {
    items: items.concat({
      id: nextId,
      text: text,
      status: 'undone',
    }),
    nextId: nextId + 1,
    title,
  };
};

const updateStatus = ({items, nextId, title}, id) => {
  const newItems = items.map((item) => Object.assign({}, item));
  const item = newItems.find((item) => item.id === id);
  item.status = {done: 'undone', undone: 'doing', doing: 'done'}[item.status];
  return {items: newItems, nextId, title};
};

const deleteItem = ({items, nextId, title}, id) => {
  const newItems = items.filter((item) => item.id !== id);
  return {items: newItems, nextId, title};
};

const initialState = {
  items: [],
  nextId: 1,
  title: 'Todo',
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return addItem(state, action.text);
    case 'UPDATE_STATUS':
      return updateStatus(state, action.id);
    case 'DELETE_ITEM':
      return deleteItem(state, action.id);
    case 'UPDATE_TITLE':
      return {items: state.items, nextId: state.nextId, title: action.text};
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export {todoReducer, initialState};
