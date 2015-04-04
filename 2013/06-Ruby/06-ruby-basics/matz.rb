#!/usr/local/bin/ruby

class Name
  def family_name=(family)
    @family_name = family
  end
  def given_name=(given)
    @given_name = given
  end
  def print_name
    puts @given_name + " " + @family_name
  end
end

n = Name.new
n.family_name= "Ghiassy"
n.given_name= "Shaheen"
n.print_name


def two_plus(one, two, *args)
  length = args.size
  label = length == 1 ? " variable argument" : " variable arguments"
  num = length.to_s + label + " (" + args.inspect + ")"
  num
end

puts two_plus(1,2)

puts two_plus(10000, 3.5, 14.3)

puts two_plus(100, 2.5, "three", 70, 14.3)


def greet
  puts "Hello, baby!"
end

alias baby greet

greet

baby

