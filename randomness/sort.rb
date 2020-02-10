
    # Build a method bubble_sort that takes an array and returns a sorted array. It must 
    # use the bubble sort methodology (using #sort would be pretty pointless, wouldn’t it?).

    # bubble_sort([4,3,78,2,0,2])
    # returns [0,2,2,3,4,78]
    





def bubble_sort(arr)
  arr.each  { |num|
      starter = arr.index(num)
      counter = starter + 1
      while counter < arr.length
        p arr[counter]
        counter = counter + 1
      end
  }
end




bubble_sort([4,3,78,2,0,2])








