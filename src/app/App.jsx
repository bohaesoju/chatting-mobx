import * as React from 'react';
import '../styles/style.scss';
import { Route, Switch } from 'react-router-dom';
import { Header, NotFound } from '../components';
import { ListPage, ViewPage } from '../pages';
import { useDispatch, useSelector } from "react-redux";
import { ADDFILELIST_REQUEST } from "../reducers/AddfileList";

const App = () => {
    const [addfileListContent, setAddfileListContent] = React.useState([]);
    const { data, isFetchAddfileList } = useSelector((state) => state.AddfileList);
    const dispatch = useDispatch();
    React.useEffect(() => {
        if(!isFetchAddfileList){
            dispatch({
                type: ADDFILELIST_REQUEST,
            });
        }
        setAddfileListContent(data);
    }, [data]);

    return (
        <div className="wrap">
            <Header addfileListContent={ addfileListContent } />
            <Switch>
                <Route exact path='/' component={ ListPage } />
                <Route exact path='/viewpage' component={ ViewPage } />
                <Route component={ NotFound } />
            </Switch>
        </div>
    );
};

export default App;
