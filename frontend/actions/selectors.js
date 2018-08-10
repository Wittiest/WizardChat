export const firstMessageSelector = (messages, id) => {
  return (messages[id]);
};

// TODO Insertion sort time complexity up to n^2, could be improved

export const selectChatsInOrder = (chats) => {
  const orderedChats = [];
  for (let i in chats) {
    const mostRecentMessageId = chats[i].firstMessageId;
    let inserted = false;
    for (let j = 0; j < orderedChats.length; j++) {
      const othermostRecentMessageId = orderedChats[j].firstMessageId;
      if (mostRecentMessageId > othermostRecentMessageId) {
        orderedChats.splice(j, 0, chats[i]);
        inserted = true;
        break;
      }
    }
    if (!inserted) {
      orderedChats.push(chats[i]);
    }
  }
  return orderedChats;
};

export const selectChatMessages = (chatId, messages) => {
  const messagesInChat = [];
  Object.values(messages).forEach((msg)=>{
    if (msg.chatId === chatId) {
      messagesInChat.push(msg);
    }
  });
  return messagesInChat;
};
