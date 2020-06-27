import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import Notes from './notes';
import Note from './note';

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
        </Switch>
    );
};

export default Routes;
