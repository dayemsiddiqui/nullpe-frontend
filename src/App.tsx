import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {DiscussionPage} from "./Posts/Discussions";
import {BaseLayout} from "./AppBase";
import {SearchPage} from "./Posts/Search/view/SearchPage";
import {Box} from "@material-ui/core";

function App() {
    return (
        <Box>
            <Switch>
                <BaseLayout>
                    <Route exact path="/"><SearchPage/></Route>
                    <Route path="/:searchString">
                        <SearchPage/>
                    </Route>
                    <Route path="/discussion"><DiscussionPage/></Route>
                    <Route path="/ask"><DiscussionPage/></Route>
                    <Route path="/answer"><DiscussionPage/></Route>
                </BaseLayout>
            </Switch>
        </Box>
    );
}

export default App;
