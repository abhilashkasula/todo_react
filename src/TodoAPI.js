const post = (body) => ({
  headers: {'content-type': 'application/json'},
  body: JSON.stringify(body),
  method: 'POST',
});

const TodoAPI = {};

TodoAPI.addItem = (item) =>
  fetch('/api/add', post({item})).then((res) => res.json());

TodoAPI.updateTitle = (title) =>
  fetch('/api/updateTitle', post({title})).then((res) => res.json());

TodoAPI.reset = () => fetch('/api/reset', post({})).then((res) => res.json());

TodoAPI.updateItem = (id) =>
  fetch('/api/updateItem', post({id})).then((res) => res.json());

TodoAPI.deleteItem = (id) =>
  fetch('/api/delete', post({id})).then((res) => res.json());

TodoAPI.initData = () => fetch('/api/init').then((res) => res.json());

export default TodoAPI;
