import React from 'react';
import $ from 'jquery';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

function Notifications() {
    const handleClick = () => {
        console.log("Close button has been clicked");
        $('.Notifications').hide();

    };
    return (
        <div className='Notifications'>
            <button style={{ color: "#3a3a3a", fontWeight: "bold", background: "none", border: "none", fontSize: "15px", position: "absolute", right: "2px", top: "2px", cursor: "pointer" }}
                    aria-label="Close"
                    onClick={handleClick}>
                        <img src={closeIcon} alt="close-button" width="30px" style ={{position: "relative", margin: "10px"}}/>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data="default">New course available</li>
                <li data="urgent">New resume available</li>
                <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification()}}></li>
            </ul>
        </div>
    );
}

export default Notifications;