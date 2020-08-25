import React from "react";
import EmailMe from "../MyContacts/EmailMe";
import CallMe from "../MyContacts/CallMe";
import Bounce from "react-reveal/Bounce";
import axios from "axios";
import Chatkit from "@pusher/chatkit-client";
// import ChatWidget from "../../components/ChatWidget/ChatWidget";
// import DialogModal from "../Modals/DialogModal";
import {
    Row,
    Column,
    Timer,
    TimerText,
    Flex,
    // Box,
    // Head,
    // Text,
    // Loader
} from "./styled";
var moment = require("moment-timezone");



class MyContacts extends React.Component {
    state = {
        time: moment().tz("America/Denver").format("h:mm:ss a"),
        day: new Date().getDay(),
        currentUser: null,
        currentRoom: null,
        newMessage: "",
        messages: [],
        isLoading: false,
        userId: "",
        isDialogOpen: false
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ 
            time: moment().tz("America/Denver").format("h:mm:ss a"),
            day: new Date().getDay()
        }), 1000);
    }

    componentWillUnmount() { 
       clearInterval(this.interval);
    }
  
    handleBox = () => {
        this.setState({
            currentUser: null,
            currentRoom: null,
            newMessage: "",
            messages: [],
            isLoading: false,
            userId: "",
            isDialogOpen: false
        });
        // console.log("Ran?", this.state.isChatOpen);
        this.props.callbackFromParent(false);
      };

    handleInput = (event) => {
          const { value, name } = event.target;
          this.setState({
            [name]: value
          });
        }
        
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
                currentRoom,
                isChatOpen: true
              });
              this.props.callbackFromParent(true);
            });
        }
  
    showDialog = () => {
        this.setState({
          isDialogOpen: !this.state.isDialogOpen
        });
      };
  
    addSupportStaffToRoom = () => {
        const { currentRoom, currentUser } = this.state;
        return currentUser.addUserToRoom({
          userId: "support",
          roomId: currentRoom.id
        });
      };
  
    createRoom = () => {
        const { currentUser } = this.state;
      
        currentUser
          .createRoom({
            name: currentUser.name,
            private: true
          })
          .then(room => this.connectToRoom(room.id))
          .then(() => this.addSupportStaffToRoom())
          .catch(console.error);
      };
  
      launchChat = event => {
        event.preventDefault();
        this.setState({
          isDialogOpen: false,
          isLoading: true
        });
        
  
          const { userId } = this.state;
  
          if (userId === null || userId.trim() === "") {
            alert("Invalid userId");
          } else {
            axios
              .post("https://yellowstone.herokuapp.com/users", { userId })
              .then(() => {
                const tokenProvider = new Chatkit.TokenProvider({
                  url: "https://yellowstone.herokuapp.com/authenticate"
                });
  
                const chatManager = new Chatkit.ChatManager({
                  instanceLocator: "v1:us1:f1cbf8e9-3cc8-4abe-8013-6f535f84c39f",
                  userId,
                  tokenProvider
                });
  
                return chatManager.connect().then(currentUser => {
                  this.setState(
                    {
                      currentUser,
                      isLoading: false
                    },
                    () => this.createRoom()
                  );
                });
              })
              .catch(console.error);
          }
        };

    handleDay = (num) => {
       let day;
       switch (num) {
        case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case  6:
        day = "Saturday";
        break;
      default: 
        day = "I don't know what day it is!";
       }
       return day;
    }

    checkTime = () => {
        let time = new Date();
        let hours = time.getHours();
        if (this.state.day === 0 || hours < 8 || hours > 20) {
            return (
                <div>
                    <Row>
                        <Column lg="12" md="12" sm="12" xs="12">
                            <TimerText style={{color: "red"}}>
                                I'm not available
                            </TimerText>
                        </Column>
                    </Row>
                    <Row>
                        <Column lg="12" md="12" sm="12" xs="12">
                            <TimerText style={{color: "red"}}>
                                Current time: {this.state.time}
                            </TimerText>
                        </Column>
                    </Row>
                    <Row>
                        <Column lg="12" md="12" sm="12" xs="12">
                            <TimerText style={{color: "red"}}>
                                Day: {this.handleDay(this.state.day)}
                            </TimerText>
                        </Column>
                    </Row>
                </div>
            )
        } else {
            return (
                <div>
                    <Row>
                        <Column lg="12" md="12" sm="12" xs="12">
                            <TimerText>
                                I'm available
                            </TimerText>
                        </Column>
                    </Row>
                    <Row>
                        <Column lg="12" md="12" sm="12" xs="12">
                            <TimerText>
                                Current time: {this.state.time}
                            </TimerText>
                        </Column>
                    </Row>
                    <Row>
                        <Column lg="12" md="12" sm="12" xs="12">
                            <TimerText>
                                Day: {this.handleDay(this.state.day)}
                            </TimerText>
                        </Column>
                    </Row>
                </div>
            )
        }
    }

    render() {
        // const {
        //     newMessage,
        //     messages,
        //     currentUser,
        //     currentRoom,
        //     isDialogOpen,
        //     userId,
        //     isLoading
        //   } = this.state;
        return (
            <div>
                <br/>
                <Bounce bottom>
                    {/* <Row style={{width: "90%", margin: "0 auto"}}>
                        <Column lg="4" md="4" sm="12" xs="12"> */}
                        <Flex>
                            <EmailMe />
                            <CallMe />
                        </Flex>
                        {/* </Column>
                        <Column lg="4" md="4" sm="12" xs="12"> */}
                        {/* </Column> */}
                        {/* <Column lg="4" md="4" sm="12" xs="12">
                        <div style={{margin: "10px"}}>
                            <div>
                                <Box onClick={this.showDialog}>
                                    <Row>
                                        <Column lg="12" md="12" sm="12" xs="12">
                                            <Head>MESSAGE</Head>
                                        </Column>
                                    </Row>
                                    <br />
                                    <Row>
                                        <Column lg="12" md="12" sm="12" xs="12">
                                            <Text>
                                                We can also live chat online. Drop me a line here. Again, if the below text is red, 
                                                I'm not available, but you can leave me a message and I'll respond as soon as possible.
                                            </Text>
                                        </Column>
                                    </Row>
                                </Box>     
                                </div>
                                 {currentRoom ? (
                                 
                                   <ChatWidget
                                     handleBox={this.handleBox}
                                     newMessage={newMessage}
                                     sendMessage={this.sendMessage}
                                     handleInput={this.handleInput}
                                     currentUser={currentUser}
                                     messages={messages}
                                   />
                                
                                 ) : 
                                   null
                                 }

                                 {isLoading ? <Loader /> : null}
                             
                                 {isDialogOpen ? (
                                   <DialogModal
                                     username={userId}
                                     handleInput={this.handleInput}
                                     launchChat={this.launchChat}
                                     handleBox={this.handleBox}
                                   />
                                 ) : null}
                            </div>
                        </Column> */}
                    {/* </Row> */}
                </Bounce>
                <br/>
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <Timer>
                            {this.checkTime()}
                        </Timer>
                    </Column> 
                </Row>
                <br/>
            </div>
        )
    }
};

export default MyContacts;