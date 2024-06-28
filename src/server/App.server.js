import React from 'react';
import { StaticRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../Home';
import ServerComponent from './ServerComponent';

function App({ location }) {
    return (
        <html>
            <head>
                <title>React Server Components Example</title>
            </head>
            <body>
                <div id="root">
                    <Router location={location}>
                        <div>
                            <Header />
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/server" element={<ServerComponent />} />
                            </Routes>
                        </div>
                    </Router>
                </div>
                <script src="/static/js/bundle.js"></script>
            </body>
        </html>
    );
}

export default App;
