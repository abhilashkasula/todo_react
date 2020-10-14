const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use(express.json());

app.locals.db = {
  items: [{id: 0, text: 'Buy milk', status: 'done'}],
  title: 'Todo',
  id: 1,
};

app.get('/api/init', (req, res) => res.json(req.app.locals.db));

app.post('/api/add', (req, res) => {
  const {item} = req.body;
  ++req.app.locals.db.id;
  const {items, id} = req.app.locals.db;
  req.app.locals.db.items = items.concat({id, text: item, status: 'undone'});
  res.json(req.app.locals.db);
});

app.post('/api/updateTitle', (req, res) => {
  const {title} = req.body;
  req.app.locals.db.title = title;
  res.json(req.app.locals.db);
});

app.post('/api/reset', (req, res) => {
  req.app.locals.db = {
    items: [{id: 0, text: 'Buy milk', status: 'done'}],
    title: 'Todo',
    id: 1,
  };
  res.json(req.app.locals.db);
});

app.post('/api/updateItem', (req, res) => {
  const {id} = req.body;
  const status = {undone: 'doing', doing: 'done', done: 'undone'};
  const item = req.app.locals.db.items.find((item) => item.id === id);
  item.status = status[item.status];
  res.json(req.app.locals.db);
});

app.post('/api/delete', (req, res) => {
  const {id} = req.body;
  const {db} = req.app.locals;
  db.items = db.items.filter((item) => item.id !== id);
  res.json(db);
});

app.listen(8000, () => console.log('listening at 8000'));
