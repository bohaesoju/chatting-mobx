import * as React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Maybe } from './Maybe';

export const FriendsList = ({ friendsListContent }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <Maybe test={ friendsListContent }>
            <ul className="FriendsListWrap">
                {friendsListContent.map((content) => (
                    <li key={ content.id }>
                        <Link to="viewpage">
                            <img src={require(`${ content.image }`)}
                                 className="profileImage" alt=""/>
                            <div className="friendsNameWithContent">
                                <p className="friendsName">{ content.name }</p>
                                <p className="textContent">{ content.message }</p>
                            </div>
                            <div className="dateWithAlarmNumbering">
                                <p className="date">{ content.date }</p>
                                <Maybe test={ content.alarm }>
                                    <p className="alarmNumbering">{ content.alarm }</p>
                                </Maybe>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </Maybe>
    )
};
