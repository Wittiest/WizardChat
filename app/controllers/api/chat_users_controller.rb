class Api::ChatUsersController < ApplicationController

  def update
    @chat_user = ChatUser.find_by(id: params[:id])
    puts "----------------------"
    puts @chat_user
    if @chat_user.update(chat_user_params)
      render :show
    else
      render json: @chat_user.errors.full_messages
    end
  end

  private
  def chat_user_params
    params.require(:chat_user).permit(:user_nickname, :chat_id, :user_id)
  end
end
