import React, { Component } from 'react'
import Chatkit from '@pusher/chatkit-client'
import Footer from '../../components/Footer';
import withAuth from '../../components/withAuth';
import Navbar from '../../components/Navbar';

import moment from 'moment'

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
        currentUser.rooms.map((chat)=>{
          let item = document.createElement("li");
          item.innerHTML = `
          <li class="collection-item avatar">
          <i class="material-icons circle">group</i>
              <p class="title">${chat.name}</p>
              <p>${moment(chat.lastMessageAt).fromNow()}</p>
              <ul id="message-list"></ul>
              
             </li>
             `;

          ul.appendChild(item)
        })
        
      
        currentUser.subscribeToRoomMultipart({
          roomId: currentUser.rooms[0].id,
          hooks: {
            onMessage: message => {              
              const li = document.createElement("li");
              li.appendChild(
                document.createTextNode(`${message.senderId}: ${
                 
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
      <>
      <Navbar/>
           <section className="messages container">
       <ul id="collection" className="collection">
       </ul>
       <form id="message-form">
              <input id="message-text"></input>
              <button class="btn waves-effect waves-light deep-purple accent-3 " type="submit" name="action">Send</button>
           </form>
        <script src="https://unpkg.com/@pusher/chatkit-client@1/dist/web/chatkit.js"></script>
     </section>
        ) 
        <Footer/>
        </>
    )
  }
}

export default withAuth(Messages);
    