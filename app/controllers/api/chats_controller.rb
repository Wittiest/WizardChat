class Api::ChatsController < ApplicationController
  def create
    @chat = Chat.new(chat_params)
    if @chat.save
      ChatUser.create(chat_id: @chat.id, user_id: current_user.id,
      user_nickname: current_user.full_name)
      render :show
    else
      render json: @chat.errors.full_messages
    end
  end

  def index
    @chats = current_user.chats
  end

  def show
    @chat = Chat.find_by(id: params[:id])
  end

  private
  def chat_params
    params.require(:chat).permit(:is_group_chat, :name)
  end
end
