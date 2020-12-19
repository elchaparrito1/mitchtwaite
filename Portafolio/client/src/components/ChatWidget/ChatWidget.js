// import React from "react";
// import PropTypes from "prop-types";
// import "./ChatWidget.css";
// import {
//   Row,
//   Column,
//   Button,
//   MessageInput,
//   ChatBody,
//   ChatHeader,
//   ChatWidge,
//   H2
// } from "./styled";

//     class ChatWidget extends React.Component {


//       render() {
//       const { newMessage, sendMessage, handleInput, currentUser, messages, handleBox } = this.props;

//       const ChatSession = messages.map((message, index) => {
//         const user = message.senderId === currentUser.id ? "user" : "support";
//         return <span key={index} className={`${user} message`}>{message.text}</span>;
//       });

//       return (
//         <section>
//           <ChatWidge>
//             <Row style={{backgroundColor: "black"}}>
//               <Column lg="12" md="12" sm="12" xs="12">
//               <span onClick={handleBox} className="close-btn">&times;</span>
//               </Column>
//             </Row>
//             <Row>
//               <Column lg="12" md="12" sm="12" xs="12">
//                 <ChatHeader>
//                   <H2>Let's Chat</H2>
//                 </ChatHeader>
//               </Column>
//             </Row>
//             <Row>
//               <Column lg="12" md="12" sm="12" xs="12">
//                 <ChatBody>{ChatSession}</ChatBody>
//               </Column>
//             </Row>
//             <Row style={{backgroundColor: "#f6f6f6", borderTop: "1px solid #ccc"}}>
//               <Column lg="9" md="9" sm="9" xs="9">
//                 <form onSubmit={sendMessage} className="message-form">
//                   <MessageInput
//                     className="message-input"
//                     autoFocus
//                     name="newMessage"
//                     placeholder="Your Message"
//                     onChange={handleInput}
//                     value={newMessage}
//                   />
//                 </form>
//               </Column>
//               <Column lg="3" md="3" sm="3" xs="3">
//                 <Button onClick={sendMessage}>Send</Button>
//               </Column>
//             </Row>
//           </ChatWidge>
//         </section>
//       );
//       };
//     };

//     ChatWidget.propTypes = {
//       newMessage: PropTypes.string.isRequired,
//       handleInput: PropTypes.func.isRequired,
//       sendMessage: PropTypes.func.isRequired,
//       messages: PropTypes.arrayOf(PropTypes.object).isRequired,
//       currentUser: PropTypes.object.isRequired,
//       handleBox: PropTypes.func.isRequired
//     };

//     export default ChatWidget;