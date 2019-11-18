import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sendToImage } from '../reducers/AddfileList';
import { useDispatch } from "react-redux";

export const Header = ({ addfileListContent }) => {
    let location = useLocation().pathname;
    const [addFileListWrap, setAddFileListWrap] = React.useState(false);

    const dispatch = useDispatch();

    const clickToImage = (content) => {
        dispatch(sendToImage(content.image));
        setAddFileListWrap(false);
    };

    return (
        <div className="HeaderWrap">
            { location === '/' ?
                <div className="Header">
                    <div className="listIcon"><Link to="/"><img className="menuIcon" src={require('./image/side_menu_icon@3x.png')} alt=""/></Link></div>
                    <p className="HeaderCenterTitle"><Link to="/">채팅</Link></p>
                    <div className="peopleIcon"><img className="profileIcon" src={require('./image/profile_icon@3x.png')} alt=""/></div>
                </div>
                :
                <div className="Header">
                    <div className="listIcon"><Link to="/"><img className="menuIcon" src={require('./image/img-back@3x.png')} alt=""/></Link></div>
                    <p className="HeaderCenterTitle">아이유</p>
                    <div className="uploadIcon" onClick={() => setAddFileListWrap(!addFileListWrap)}><img className="profileIcon" src={require('./image/img-upload@3x.png')} alt=""/></div>
                    <div className="peopleIcon"><img className="profileIcon" src={require('./image/img-search@3x.png')} alt=""/></div>
                    {addFileListWrap === true ?
                        <div className="addFileListWrap">
                            <ul>
                                {addfileListContent.map((content) => (
                                    <li onClick={ () => clickToImage(content) } key={ content.id }>
                                        <img src={require(`${ content.image }`)} alt=""/>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        : ''}
                </div>
            }
        </div>
    )
};
