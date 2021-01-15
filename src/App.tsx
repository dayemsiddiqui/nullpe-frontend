import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {DiscussionPage} from "./Posts/Discussions";
import {BaseLayout} from "./AppBase";
import {SearchPage} from "./Posts/Search/view/SearchPage";
import {Box} from "@material-ui/core";

function App() {
    return (
        <Box>
            <BaseLayout>
                <Switch>
                    <Route exact path="/"><SearchPage/></Route>
                    <Route path="/discussion/:id"><DiscussionPage/></Route>
                    <Route path="/ask"><DiscussionPage/></Route>
                    <Route path="/answer"><DiscussionPage/></Route>
                    <Route path="/search/:searchString">
                        <SearchPage/>
                    </Route>
                </Switch>
            </BaseLayout>
        </Box>
    );
}

export default App;
