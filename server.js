const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router); // base route becomes /api/...

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
});