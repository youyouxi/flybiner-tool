import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import IndexPage from "./page/IndexPage";

export class MainRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <Routes>
                    <Route path={'/'} element={<IndexPage />} />
                </Routes>
            </HashRouter>
        );
    }
}
