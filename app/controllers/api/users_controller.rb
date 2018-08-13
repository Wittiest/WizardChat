class Api::UsersController < ApplicationController

  def search
    query = params['query'].downcase
    @users = []
    matched_users = User.all.each do |user|
      next if user.id == current_user.id
      @users << user if matched_name(user.first_name, user.last_name, query)
    end
    render :search
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end

  def matched_name(first_name, last_name, query)
    first_name, last_name = first_name.downcase, last_name.downcase
    return true if first_name.include?(query)
    return true if last_name.include?(query)
    return true if (first_name + " " + last_name).include?(query)
  end
end
