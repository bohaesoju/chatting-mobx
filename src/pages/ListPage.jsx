import * as React from 'react';
import { FriendsList } from '../components'
import { useSelector, useDispatch } from "react-redux";
import { CHATTINGLIST_REQUEST } from '../reducers/ChattingList';

export const ListPage = () => {
    const [friendsListContent, setFriendsListContent] = React.useState([]);
    const { data, isFetchChattingList } = useSelector((state) => state.ChattingList);
    const dispatch = useDispatch();
    React.useEffect(() => {
        if(!isFetchChattingList){
            dispatch({
                type: CHATTINGLIST_REQUEST,
            });
        }
        setFriendsListContent(data);
    }, [data]);

    return (
        <div className="ListPage">
            <FriendsList friendsListContent={ friendsListContent } />
        </div>
    )
};
