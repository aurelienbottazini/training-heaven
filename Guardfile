guard :shell do
  watch(/training\.rb/) do |modified_files|
    puts "Modified files: #{modified_files}"
    `ruby #{modified_files[0]}`
  end
end
