// Function to create a Proxy with negative indexing behavior for arrays
function createNegativeIndexProxy(array) {
    return new Proxy(array, {
      // The get handler is invoked whenever a property is accessed on the array
      get: function (target, prop, receiver) {
        // Convert the property (index) to an integer
        const index = parseInt(prop);
  
        // Calculate the positive index, accounting for negative indices
        const positiveIndex = index >= 0 ? index : target.length + index;
  
        // Retrieve the value using the positive index
        return target[positiveIndex];
            },
        });
  }
  
  // Example usage:
  // Create a proxy with negative indexing behavior for the original array [1, 2, 3, 4, 5]
  const myArray = createNegativeIndexProxy([1, 2, 3, 4, 5]);
  
  // Access elements using negative indices
  console.log(myArray[-1]); // Output: 5
  console.log(myArray[-2]); // Output: 4
  console.log(myArray[-3]); // Output: 3
  