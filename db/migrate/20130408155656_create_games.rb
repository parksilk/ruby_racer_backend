class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :player1_id
      t.integer :player2_id
      t.integer :completion_time
      t.integer :winner

      t.timestamps
    end
  end
end
