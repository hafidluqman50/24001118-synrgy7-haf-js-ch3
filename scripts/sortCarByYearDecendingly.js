function bubbleSortDesc(arr, value) {
 
    for (let i = 0; i < arr.length; i++) {
 
        // Last i elements are already in place  
        for (let j = 0; j < (arr.length - i - 1); j++) {
 
            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j][value] < arr[j + 1][value]) {
 
                // If the condition is true
                // then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
 
    // Print the sorted array
    return arr
}

function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  const resultSort = bubbleSortDesc(result, 'year')
  // Rubah code ini dengan array hasil sorting secara descending
  return resultSort;
}
