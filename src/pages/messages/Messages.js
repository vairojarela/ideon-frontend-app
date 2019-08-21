import React, { Component } from 'react'
import Chatkit from '@pusher/chatkit-client'
import Footer from '../../components/Footer';
import InputText from '../../components/forms/InputText';
import AuthService from '../../services/auth-service'
import withAuth from '../../components/withAuth';

import moment from 'moment'
import { Link } from 'react-router-dom';

class Messages extends Component { 
  
  state = {
    user: this.props.user.username
  }

  render() {   
    const tokenProvider = new Chatkit.TokenProvider({
      url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/c30b8cc8-125e-4f4b-a8e1-ebb4307f1258/token"
    });
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: "v1:us1:c30b8cc8-125e-4f4b-a8e1-ebb4307f1258",
      userId: this.state.user,
      tokenProvider: tokenProvider
    });
    chatManager
      .connect()
      .then(currentUser => {
        const ul = document.getElementById("collection");
        ul.innerHTML = '';
        console.log(currentUser)
        currentUser.rooms.map((chat)=>{
          console.log(chat)
          let item = document.createElement("li");
          item.innerHTML = `
          <li class="collection-item avatar">
          <i class="material-icons circle">folder</i>
          <img src="images/yuna.jpg" alt="" className="circle"/>
              <span class="title">${chat.createdByUserId}</span>
              <p>${moment(chat.lastMessageAt).fromNow()}</p>
              <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
             </li>
             `;

          ul.appendChild(item)
          console.log(item)
        })
        
      
        currentUser.subscribeToRoomMultipart({
          roomId: currentUser.rooms[0].id,
          hooks: {
            onMessage: message => {              
              const li = document.createElement("li");
              li.appendChild(
                document.createTextNode(`${message.senderId}: ${
                  // We know our message will have a single part with
                  // a plain text content because we used
                  // sendSimpleMessage. In general we'd have to check
                  // the partType here.
                  message.parts[0].payload.content
                }`)
              );
              ul.appendChild(li);
            }
          }
        });

        const form = document.getElementById("message-form");
        form.addEventListener("submit", e => {
          e.preventDefault();
          const input = document.getElementById("message-text");
          currentUser.sendSimpleMessage({
            text: input.value,
            roomId: currentUser.rooms[0].id
          });
          input.value = "";
        });
      })
      .catch(error => {
        console.error("error:", error);
      });
    return (
      <div>
        <ul id="message-list"></ul>
        <form id="message-form">
          <InputText id="message-text"></InputText>
          <button className="btn waves-effect waves-light" type="submit" name="action">Send</button>
       </form>
       <ul id="collection" class="collection">
         
       </ul>
        <script src="https://unpkg.com/@pusher/chatkit-client@1/dist/web/chatkit.js"></script>
        <Footer/>
     </div>
    )
  }
}

export default withAuth(Messages);
    