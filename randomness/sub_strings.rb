# > dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]
# => ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]
# > substrings("below", dictionary)
# => { "below" => 1, "low" => 1 }
# Next, make sure your method can handle multiple words:
# > substrings("Howdy partner, sit down! How's it going?", dictionary)
#  => { "down" => 1, "how" => 2, "howdy" => 1,"go" => 1, "going" => 1, "it" => 2, "i" => 3, "own" => 1,"part" => 1,"partner" => 1,"sit" => 1 }

dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]


def substrings(string, dictionary)
  split_string = string.split(" ")
  pair_hash = {}
  sorted_string = split_string.sort
  sorted_string.each { |word|
    p word
    word_counter = 0
    start_count = sorted_string.index(word)
    while start_count <  sorted_string.length - 1
        if sorted_string[start_count] === word
          word_counter += 1
        end
      start_count += 1 
    end
    # take items make hash and add {"word", word_counter}
    new_item = {"#{word}" => word_counter}
    pair_hash = pair_hash.merge(new_item)
    sorted_string.delete(word)
  }
  return pair_hash
end

p substrings('hello down there howdy whats going down my dude', dictionary);













