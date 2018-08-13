class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    @message.author_id = current_user.id
    @message.chat_id = params[:chat_id]

    if @message.save
      render :show
    else
      render json: @message.errors.full_messages
    end
  end

  private
  def message_params
    params.require(:message).permit(:body)
  end
end
