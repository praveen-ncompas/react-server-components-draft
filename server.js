const express = require('express');
const path = require('path');
const { renderToPipeableStream } = require('react-dom/server');
const React = require('react');
const App = require('./src/App.server').default;

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.resolve(__dirname, 'build')));

app.get('*', (req, res) => {
    const stream = renderToPipeableStream(
        React.createElement(App),
        {
            onShellReady() {
                res.statusCode = 200;
                res.setHeader('Content-type', 'text/html');
                stream.pipe(res);
            },
            onError(err) {
                console.error(err);
                res.statusCode = 500;
                res.send('Internal Server Error');
            },
        }
    );
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
