const express = require('express');
const app = express();
const path = require('path');
const port = 3001;
const algorithms = require('./routes/algorithms')
const dataStructures = require('./routes/dataStructures')
const timeAndSpaceComplexity = require('./routes/time&space-complexity')
const exercises = require('./routes/exercises')
const resources = require('./routes/resources')
const contact = require('./routes/contact')
const search = require('./routes/search')
const login = require('./routes/login')


app.use(express.json());

app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/algorithms', algorithms)

app.use('/data-structures', dataStructures)

app.use('/time&space-complexity', timeAndSpaceComplexity)

app.use('/exercises', exercises)

app.use('/resources', resources)

app.use('/contact', contact)

app.use('/search', search)

app.use('/login', login)


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/build/index.html'));
});


app.listen(port, "127.0.0.1");
console.log(`Listening on port ${port}...`);
