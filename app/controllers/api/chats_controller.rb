class Api::ChatsController < ApplicationController
  def create
    chat_data = params[:chat_data]
    names = []
    chat_data[:chatUserIds].each do |user_id|
      first_name = User.find_by(id: user_id).first_name
      names << first_name
    end
    names << current_user.first_name
    chat_name = names.join(" && ")
    @chat = Chat.new(name: chat_name,
      is_group_chat: chat_data[:chat][:is_group_chat])
    if @chat.save
      ChatUser.create(chat_id: @chat.id, user_id: current_user.id,
        user_nickname: current_user.full_name)
      Message.create(body: chat_data[:message][:body],
        author_id: current_user.id, chat_id: @chat.id)
      chat_data[:chatUserIds].each do |user_id|
        ChatUser.create(chat_id: @chat.id, user_id: user_id,
          user_nickname: User.find_by(id: user_id).full_name)
      end
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

  def update
    @chat = Chat.find_by(id: params[:id])
    if @chat.update(chat_params)
      render :show
    else
      render json: @chat.errors.full_messages
    end
  end

  private
  def chat_params
    params.require(:chat).permit(:name, :is_group_chat)
  end
end
