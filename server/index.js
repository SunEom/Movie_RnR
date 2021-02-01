const express = require('express');

const app = express();

app.get('/index', (req, res, next) => {});

app.listen(8000, () => {
  `${app.get('port')}번 포트에서 대기 중`;
});
