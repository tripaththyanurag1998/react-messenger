import React, {useState ,useEffect} from 'react';
import { FormControl,Input} from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

import './App.css';

function App() {
  const [input,setInput] = useState('');
  const [messages,setMessages] = useState([
    {username:'anurag', message:'hiiiiiii'},
    {username:'anurag2', message:'hello'}
  ]);
  const [username,setUsername] = useState('');

  useEffect(() => {
     db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc => ({id:doc.id,message:doc.data()})))
    });
  }, [])

  useEffect(() => {
    setUsername(prompt('enter username'))
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  };

  return (
    <div className="App">
      <h1>messenger app using react+firebase</h1>
      <h2>hey {username}</h2>
      <FormControl className='app__form'>
        <Input value={input} onChange={event => setInput(event.target.value)} />
        <IconButton disabled={!input} type='submit' onClick={sendMessage} variant="contained" color="primary">
          <SendIcon/>
        </IconButton>
      
      
      </FormControl>

      <FlipMove>
        {messages.map( ({id,message}) => (
          <Message key={id} username={username} message={message}/>
          ))}
      </FlipMove>
    </div>
  );
}

export default App;
