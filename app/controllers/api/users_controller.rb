class Api::UsersController < ApplicationController

  def search
    query = params['query'].downcase
    userPriorityHash = Hash.new {|h, k| h[k] = []}
    @users = []
    matched_users = User.all.each do |user|
      next if user.id == current_user.id
      priority = matched_name(user.first_name, user.last_name, query)
      userPriorityHash[priority] << user unless priority.nil?
    end
    (1..3).each do |n|
      userPriorityHash[n].each do |user|
        @users << user
      end
    end
    render :search
  end

  def create
    if params[:user][:profile_image] == "null"
      @user = User.new(email: params[:user][:email],
        password: params[:user][:password],
        first_name: params[:user][:first_name],
        last_name: params[:user][:last_name])
      if @user.save
        @user.profile_image.attach(io: File.open(File.join(Rails.root,
          'app/assets/images/black_wizard.png')), filename: "default.png")
        login!(@user)
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
    else
      @user = User.new(user_params)
      if @user.save
        login!(@user)
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
    end
  end

  def update
    @user = current_user
    @user.profile_image.purge
    @user.profile_image.attach(params[:user][:profile_image])
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name,
    :profile_image)
  end

  def matched_name(first_name, last_name, query)
    first_name, last_name = first_name.downcase, last_name.downcase
    return 1 if first_name.include?(query) || last_name == query
    return 2 if last_name.include?(query)
    return 3 if (first_name + " " + last_name).include?(query)
  end
end
