get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/new_players' do
    @player1 = Player.find_or_create_by_name(:name => params[:player1])
    @player2 = Player.find_or_create_by_name(:name => params[:player2])
    @game = Game.create(:player1_id => @player1.id,
                        :player2_id => @player2.id)
  erb :game
end

put '/games/:id' do
  @game = Game.find(params[:id])
  @game.winner = Player.find_by_name(params[:winner]).id
  # update time, too
  @game.save

  200
end