class Api::SongsController < ApplicationController
  def index
    render json: Song.all
  end

  def create
    attrs = params.require(:Song).permit(:name, :artist, :genre, :rank)
    song = Song.new(attrs)
    if song.save
      render json: song
    else
      render json: {errors: item.errors }, status: 422
  end

  def edit
  end

  def destroy
    Song.find(params[:id]).destroy
  end

end
