class Api::ChatsController < ApplicationController
  def index
    @chats = current_user.chats
  end
  def show
    @chat = Chat.find_by(id: params[:id])
    @message = Message.new
  end
end
