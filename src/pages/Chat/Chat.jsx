import React, {useState, useEffect} from 'react'
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { getToken } from '../../utilities/users-service';
import { DefaultEditor } from 'react-simple-wysiwyg';
import Avatar from 'react-avatar';

const WS_URL = 'ws://192.168.1.232:8000';

function isUserEvent(message) {
    let evt = JSON.parse(message.data);
    return evt.type === 'userevent';
}

function isDocumentEvent(message) {
    let evt = JSON.parse(message.data);
    return evt.type === 'contentchange';
}
function Chat() {

    const[message, setMessage]=useState('')
    const[messageArr, setMessageArr]=useState([])

    const [username, setUsername] = useState('');
    const { sendJsonMessage, readyState } = useWebSocket(WS_URL, {
    onOpen: () => {
        console.log('WebSocket connection established.');
    },
    share: true,
    filter: () => false,
    retryOnError: true,
    shouldReconnect: () => true
    });

    

    useEffect(() => {
        setUsername(getToken())
    if(username && readyState === ReadyState.OPEN) {
        sendJsonMessage({
        username,
        type: 'userevent'
        });
    }
    console.log('readyState',);
    }, [sendJsonMessage, readyState]);

    return (
    <>
        {/* <Navbar color="light" light>
        <NavbarBrand href="/">Real-time document editor</NavbarBrand>
        </Navbar> */}
        <div className="container-fluid">
        {username ? <EditorSection/>
            : ''}
        </div>
    </>
    );

    // function LoginSection({ onLogin }) {
    //     const [username, setUsername] = useState('');
    //     useWebSocket(WS_URL, {
    //         share: true,
    //         filter: () => false
    //         });
    //         function logInUser() {
    //         if(!username.trim()) {
    //             return;
    //         }
    //         onLogin && onLogin(username);
    //         }
        
    //         return (
    //         <div className="account">
    //             <div className="account__wrapper">
    //             <div className="account__card">
    //                 <div className="account__profile">
    //                 <p className="account__name">Hello, user!</p>
    //                 <p className="account__sub">Join to edit the document</p>
    //                 </div>
    //                 <input name="username" onInput={(e) => setUsername(e.target.value)} className="form-control" />
    //                 <button
    //                 type="button"
    //                 onClick={() => logInUser()}
    //                 className="btn btn-primary account__btn">Join</button>
    //             </div>
    //             </div>
    //         </div>
    //         );
    //     }
        
        // function History() {
    
        //     const { lastJsonMessage } = useWebSocket(WS_URL, {
        //     share: true,
        //     filter: isUserEvent
        //     });
            
        //     const activities = lastJsonMessage?.data.userActivity || [];
        //     // console.log('history');
        //     return (
        //     <ul>
        //         {activities.map((activity, index) => <li key={`activity-${index}`}>{activity}</li>)}
        //     </ul>
        //     );
        // }
        
        // function Users() {
        //     // const { lastJsonMessage } = useWebSocket(WS_URL, {
        //     // share: true,
        //     // filter: isUserEvent
        //     // });
        //     // const users = Object.values(lastJsonMessage?.data.users || {});
        //     const userToken = getToken()
        //     const users = JSON.parse(atob(userToken.split('.')[1]))
        //     console.log('users = ', users);
        //     return users.map(user => (
        //     <div key={user.name}>
        //         <span id={users.user.name} className="userInfo" key={user.name}>
        //         <Avatar name={user.name} size={40} round="20px"/>
        //         </span>
        //         {/* <UncontrolledTooltip placement="top" target={user.username}>
        //         {user.username}
        //         </UncontrolledTooltip> */}
        //     </div>
        //     ));
        // }
        
        function EditorSection() {
            return (
            <div className="main-content">
                <div className="document-holder">
                <div className="currentusers">
                    {/* <Users/> */}
                </div>
                <Document/>
                </div>
                <div className="history-holder">
                {/* <History/> */}
                </div>
            </div>
            );
        }
        
        function Document() {

            const { lastJsonMessage, sendJsonMessage } = useWebSocket(WS_URL, {
            share: true,
            // filter: isDocumentEvent
            });
        
            function handleSubmit(e) {
                e.preventDefault();

                if (messageArr.length===0){
                    setMessageArr([message])
                    setMessage('')
                } else {
                    setMessageArr([...messageArr, e.target.message.value])
                    setMessage('')
                }
                
                console.log('messageArr - handle submit = ', messageArr);
                
                sendJsonMessage({
                    type: 'contentchange',
                    content: message
                });
            }
            return (
                <div className='formWrapper'>
            {/* <DefaultEditor value={html} onChange={handleHtmlChange}/> */}
            <div className='messagesGoHere'>{messageArr.length>0?messageArr.map((current,i)=>{
                return(<p key={i}>{current}</p>)
            }):''}</div>
            <form className='form' onSubmit={handleSubmit}>
                <br />
                <input type="text" name="message"/>
                <br />
                <button type='submit' value="Submit">Submit</button>
            </form>
            
            </div>
            );
        }

}

export default Chat