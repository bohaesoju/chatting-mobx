import * as React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const ChattingList = () => {
    const { textImage } = useSelector((state) => state.AddfileList);
    const SEND_TO_IMAGE = 'SEND_TO_IMAGE';

    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, [textImage.length]);

    return (
        <>
            { textImage.map((e) => (
                <li className="leftSide talkMessage" key={ e.id }>
                    <p className='about'>
                        { e.type === SEND_TO_IMAGE
                            ?
                            <img
                                className="chattingRoomImage"
                                src={require(`${ e.index }`)}/>
                            :
                            <span>{ e.index }</span>
                        }
                    </p>
                </li>
            ))}
        </>
    )
};
