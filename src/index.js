import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import IndexPage from "./page/IndexPage";

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <IndexPage />
        </Router>
    </React.StrictMode>
)