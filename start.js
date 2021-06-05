const express = require('express');
const fs = require('fs');
const parse = require('csv-parse/lib/sync');
const packageJson = require('./package.json');

// start
const app = express();

// routes
app.get('/', (req, res) =>
  res.json({
    status: 'ok',
    version: packageJson.version,
    readme: 'https://github.com/rubenvar/codigos-postales',
  })
);

app.get('/api/cp/:cp', async (req, res) => {
  const { cp } = req.params;

  const data = fs.readFileSync('./assets/codigos_postales_municipios.csv', {
    encoding: 'utf8',
  });
  const json = parse(data, { columns: true });

  const munCodeObj = json.find((obj) => obj.codigo_postal === cp);

  if (!munCodeObj) return res.json({ error: `Object not found for cp ${cp}` });
  return res.json(munCodeObj);
});

// port
app.set('port', process.env.PORT || 4321);

// 🚀 go
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → http://localhost:${server.address().port}`);
});
