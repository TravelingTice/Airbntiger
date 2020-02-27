class CreateGeolocations < ActiveRecord::Migration[5.2]
  def change
    create_table :geolocations do |t|
      t.float :latitude
      t.float :longtitude
      t.references

      t.timestamps
    end
  end
end
