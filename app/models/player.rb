class Player < ActiveRecord::Base
  #has_many :games

  has_many :games, :class_name => "Game", :finder_sql => Proc.new {
    %Q{
      SELECT DISTINCT *
      FROM games g
      WHERE g.player1_id = #{id}
      OR g.player2_id = #{id}
    }
}

  # validates :player, :uniqueness => true 
end
