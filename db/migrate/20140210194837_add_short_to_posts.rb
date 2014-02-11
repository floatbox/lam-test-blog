class AddShortToPosts < ActiveRecord::Migration
  def change
    change_table :posts do |t|
      t.text :short
    end
  end
end
