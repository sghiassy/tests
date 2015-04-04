#!/usr/local/bin/ruby

def gimme
  if block_given?
    yield
  else
    puts "Oops. No block."
  end
  puts "You're welcome"
end

gimme { print "Thank you."}