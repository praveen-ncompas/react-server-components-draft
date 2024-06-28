import express from 'express';
import path from 'path';
import { renderToPipeableStream } from 'react-dom/server';
import React from 'react';
import App from './App.server.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.resolve(__dirname, '../../build')));

app.get('*', (req, res) => {
    const stream = renderToPipeableStream(
        React.createElement(App, { location: req.url }),
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
