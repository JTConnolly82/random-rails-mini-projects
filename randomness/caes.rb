# caesar_cipher("What a string!", 5)
# "Bmfy f xywnsl!"


def caesar(string, num)
  alphabet = 'abcdefghijklmnopqrstuvwxyz'
  split_string = string.split("")
  arr = []
  split_string.each do |char|
    index_num = alphabet.index(char)
    new_letter = ""
    new_index = 0
    if index_num === nil
      new_letter = " "
      arr.push(new_letter)
    else 
      new_index = index_num + num
      if new_index > 26
        new_index = new_index - 26
      end
      new_letter = alphabet[new_index]
      arr.push(new_letter)
    end
  end
  final_return = arr.join("")
  return final_return
end

p caesar('hi julia how are you', 12)
