class Api::SongsController < ApplicationController
  def index
    render json: Song.all
  end

  def create
    attrs = params.require(:song).permit(:name, :artist, :rank, :genre)
    song = Song.new(attrs)
    if song.save
      render json: song
    else
      render json: {errors: song.errors }, status: 422
    end
  end

  def edit
  end

  def destroy
    Song.find(params[:id]).destroy
  end
end
