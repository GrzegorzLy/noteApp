import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import Notes from './notes';
import Note from './note';
import NotFound from './notFound';

const Routes: FC = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Notes />
            </Route>
            <Route exact path="/notes">
                <Notes />
            </Route>
            <Route path="/notes/:id">
                <Note />
            </Route>
            <Route path="/404">
                <NotFound />
            </Route>
        </Switch>
    );
};

export default Routes;
