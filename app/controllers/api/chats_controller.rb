class Api::ChatsController < ApplicationController
  def index
    @chats = current_user.chats
  end
  def show
    puts "-------------------------"
    puts params
    @chat = Chat.find_by(id: params[:id])
    puts @chat
    @message = Message.new
  end
end
