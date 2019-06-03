import React, { Component } from "react";
import axios from "axios";
import Chatkit from "@pusher/chatkit-client";
import LoginModal from "../../components/Modals/LoginModal";
import API from "../../utils/API";
import "./Support.css";

  class Support extends Component {

      state = {
        currentUser: null,
        currentRoom: null,
        newMessage: "",
        messages: [],
        rooms: [],
        password: "",
        isOpen: true,
        login: ""
      };

      handleModal = () => {
        if(!this.state.isOpen) {
            this.setState({
                isOpen: true
            });
       } else if (this.state.isOpen) {
           this.setState({
                isOpen: false
           });
       }
      };

      handleInput = (event) => {
        const { value, name } = event.target;
        this.setState({
          [name]: value
        });
      }

      handleChange = (name) => (event) => {
        this.setState({
            [name]: event.target.value
        });
      };

      handlelogin = (event) => {
        event.preventDefault();
        const password = {
          password: this.state.password
        }
        API.checkPassword(password)
          .then(response => {
            if (response.data === "incorrect password") {
              this.setState({
                password: "",
                login: "incorrect password"
              })
            } else if (response.data === "correct password") {
              this.setState({
                isOpen: false
              });
            }
          })
      };
          
      sendMessage = (event) => {
          event.preventDefault();
          const { newMessage, currentUser, currentRoom } = this.state;
      
          if (newMessage.trim() === "") return;
      
          currentUser.sendMessage({
            text: newMessage,
            roomId: `${currentRoom.id}`
          });
      
          this.setState({
            newMessage: ""
          });
      }
          
      connectToRoom = (id) => {
          const { currentUser } = this.state;
          return currentUser
            .subscribeToRoom({
              roomId: `${id}`,
              messageLimit: 100,
              hooks: {
                onMessage: message => {
                  this.setState({
                    messages: [...this.state.messages, message]
                  });
                },
              }
            })
            .then(currentRoom => {
              this.setState({
                currentRoom
              });
            });
      }


      componentDidMount() {
        const userId = "support";

        axios
          .post("/users", { userId })
          .then(() => {
            const tokenProvider = new Chatkit.TokenProvider({
              url: "http://yellowstone.herokuapp.com/authenticate"
            });

            const chatManager = new Chatkit.ChatManager({
              instanceLocator: "v1:us1:f1cbf8e9-3cc8-4abe-8013-6f535f84c39f",
              userId,
              tokenProvider
            });

            return chatManager
              .connect({
                onAddedToRoom: room => {
                  this.setState({
                    rooms: [...this.state.rooms, room]
                  });
                }
              })
              .then(currentUser => {
                this.setState(
                  {
                    currentUser,
                    rooms: currentUser.rooms
                  },
                  () => {
                    if (this.state.rooms.length >= 1) {
                      this.connectToRoom(this.state.rooms[0].id);
                    }
                  }
                );
              });
          })
          .catch(console.error);
      }

      joinRoom = id => {
        this.setState(
          {
            messages: []
          },
          () => this.connectToRoom(id)
        );
      };

      render() {
        const {
          newMessage,
          rooms,
          currentRoom,
          messages,
          currentUser
        } = this.state;

        const RoomList = rooms.map(room => {
          const isActive =
            currentRoom && currentRoom.id === room.id ? "active" : "";
          return (
            <li
              key={room.id}
              onClick={() => this.joinRoom(room.id)}
              className={`${isActive} room`}
            >
              {room.name}
            </li>
          );
        });

        const ChatSession = messages.map((message, index) => {
          const user = message.senderId === currentUser.id ? "support" : "user";
          return (
            <span key={index} className={`${user} message`}>
              {message.text}
            </span>
          );
        });

        return (
          <div className="support-area">
            <LoginModal 
                    handleModal={this.handleModal} 
                    isOpen={this.state.isOpen}
                    handleChange={this.handleChange}
                    handlelogin={this.handlelogin}
                    password={this.state.password}
                    login={this.state.login}
            />
            <aside className="support-sidebar">
              <h3>Rooms</h3>
              <ul>{RoomList}</ul>
            </aside>
            <section className="support-session">
              <header className="current-chat">
                <h3>{currentRoom ? currentRoom.name : "Chat"}</h3>
              </header>
              <div className="chat-session">{ChatSession}</div>
              <form onSubmit={this.sendMessage} className="message-form">
                <input
                  className="message-input"
                  autoFocus
                  placeholder="Compose your message and hit ENTER to send"
                  onChange={this.handleInput}
                  value={newMessage}
                  name="newMessage"
                />
                <button onSubmit={this.sendMessage}>Submit</button>
              </form>
            </section>
          </div>
        );
      }
    }

    export default Support;