// Concept: Rather than passing multiple parameters to a single function, we can nest the function with functions inside it, passing them individual parameters

const normalAdd = (x, y) => x+y;

const CurryAdd = (x) =>{
    return function(y){
        x+y
    }
}

//                              USE CASES

// Event Handling:

// Suppose you have a UI library where you want to handle various events (e.g., click, hover) with different actions. Currying can help create specialized event handlers easily.
// javascript
// Copy code
const curryEventHandler = (eventName) => (element) => (callback) => {
  element.addEventListener(eventName, callback);
};

const handleClick = curryEventHandler("click");
const handleHover = curryEventHandler("mouseover");

const button = document.getElementById("myButton");

handleClick(button)(() => console.log("Button clicked"));
handleHover(button)(() => console.log("Mouse over button"));
// Configurable Functions:

// Currying can be helpful when dealing with functions that take a configuration object. It allows you to create more specialized functions with specific configurations.
// javascript
// Copy code
const curryConfigurableFunction = (config) => (data) => {
  // Process data based on configuration
  // ...

  console.log(`Processing data: ${data}, Config:`, config);
};

const processWithDefaultConfig = curryConfigurableFunction({ option: "default" });

processWithDefaultConfig("some data"); // Outputs: Processing data: some data, Config: { option: 'default' }
// Math Operations:

// In scenarios where you have a set of mathematical operations that often use the same operands, currying can help create reusable partial functions.
// javascript
// Copy code
const curryAdd = (x) => (y) => x + y;
const curryMultiply = (x) => (y) => x * y;

const addTwo = curryAdd(2);
const multiplyByThree = curryMultiply(3);

console.log(addTwo(3));          // Outputs: 5
console.log(multiplyByThree(4)); // Outputs: 12
// Functional Composition:

// Currying is often used in functional composition, allowing you to create reusable and composable functions.
// javascript
// Copy code
const compose = (f, g) => (x) => f(g(x));

const addTwoB = (x) => x + 2;
const multiplyByThreeB = (x) => x * 3;

const addTwoAndMultiplyByThree = compose(multiplyByThreeB, addTwoB);

console.log(addTwoAndMultiplyByThree(5)); // Outputs: 21