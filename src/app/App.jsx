import * as React from 'react';
import '../styles/style.scss';
import { Route, Switch } from 'react-router-dom';
import { Header, NotFound } from '../components';
import { ListPage, ViewPage } from '../pages';
import { useObserver, useLocalStore } from 'mobx-react';
// import { useDispatch, useSelector } from "react-redux";
// import { ADDFILELIST_REQUEST } from "../reducers/AddfileList";

import useStore from '../store/UseStore';
import {chattingListStore} from "../store/Store";

const App = () => {
    const { chattingListStore } = useStore();
    console.log('chattingListStore : ', chattingListStore);

    const state = useLocalStore(() => ({
        isFetchChattingList: true,
        data: [],
    }));

    const [addfileListContent, setAddfileListContent] = React.useState([]);
    // const { data, isFetchAddfileList } = useSelector((state) => state.AddfileList);
    // const dispatch = useDispatch();
    React.useEffect(() => {
        if(!chattingListStore.isFetchAddfileList){
            console.log('now');
            chattingListStore.fetchAPI()
        }
        // setAddfileListContent(data);
    }, []);

    return useObserver(() => (
        <div className="wrap">
            { chattingListStore.isFetchChattingList ?
                <div>트루</div> :
                <div>펄스</div>
            }
            {/*<Header addfileListContent={ addfileListContent } />*/}
            {/*<Header />*/}
            <Switch>
                <Route exact path='/' component={ ListPage } />
                <Route exact path='/viewpage' component={ ViewPage } />
                <Route component={ NotFound } />
            </Switch>
        </div>
    ));
};

export default App;
