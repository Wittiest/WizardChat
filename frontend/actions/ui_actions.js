export const OPEN_CHAT_MENU = "OPEN_CHAT_MENU";
export const CLOSE_CHAT_MENU = "CLOSE_CHAT_MENU";
export const RECEIVE_SEARCH_QUERY = "RECEIVE_SEARCH_QUERY";

export const closeChatMenu = () => ({
  type: CLOSE_CHAT_MENU
});

export const openChatMenu = () => ({
  type: OPEN_CHAT_MENU
});

export const receiveSearchQuery = (searchQuery) => ({
  type: RECEIVE_SEARCH_QUERY,
  searchQuery
});
