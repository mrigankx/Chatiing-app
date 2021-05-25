import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "../css/SidebarChat.css";
import db from "../firebase.js";
import { Link } from "react-router-dom";
const SidebarChat = (props) => {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  useEffect(() => {
    if (props.id) {
      db.collection("rooms")
        .doc(props.id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [props.id]);

  const createChat = () => {
    const roomname = prompt("please enter the name of chat");
    if (roomname) {
      // do some db stuff
      db.collection("rooms").add({
        name: roomname,
      });
    }
  };
  return !props.addNewChat ? (
    <Link to={`/rooms/${props.id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>{props.name}</h2>
          <p> {messages[0]?.message} </p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add New Chat</h2>
    </div>
  );
};

export default SidebarChat;
