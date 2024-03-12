// Concept: It is a function which takes multiple functions and executes them one by one , usually taking the previous result as input for next function.

const pipe = (...functions) =>{ //takes multiple funcs
    return (input) =>{ //return arrow func that takes input 
        return functions.reduce((result , func)=>{ //use reduce to apply all functions to the input
            return func(result); //apply current func to result, which becomes input for next func
        }, input ) //initial input value
    }
}


// Example functions to use in the pipe
const add = x => y => x + y;
const multiply = x => y => x * y;
const square = x => x * x;
const divi = x  => y => x/y;

// Usage of the pipe function
const result = pipe(
  add(5),       
  multiply(2),  
  square)
  (3);

console.log(result); // Output: ((3 + 5) * 2)^2 = 256


//                                         USE CASES
// Piping functions together can be useful in various real-life scenarios where you have a series of data transformations or operations to perform. Here are some examples:

// 1. **Data Processing in a Web Application:**
//    Suppose you receive data from an API and need to perform a series of transformations before displaying it on a web page. You might have functions for parsing, filtering, sorting, and formatting the data. Piping these functions together makes the code more modular and readable.

//    ```javascript
//    const processData = pipe(
//      parseJSON,
//      filterData,
//      sortData,
//      formatData
//    );
//    const result = processData(apiResponse);
//    ```

// 2. **Form Validation:**
//    When validating user input in a form, you might have multiple validation rules to check, such as checking if an email is valid, if a password meets certain criteria, etc.

//    ```javascript
//    const validateForm = pipe(
//      validateEmail,
//      validatePassword,
//      validateOtherFields
//    );
//    const isValid = validateForm(formData);
//    ```

// 3. **Functional Programming Compositions:**
//    In functional programming, composing functions is a common practice. You can use pipes to create complex functions by combining simpler ones.

//    ```javascript
//    const complexFunction = pipe(
//      add(5),
//      multiply(2),
//      square
//    );
//    const result = complexFunction(3);
//    ```

// 4. **Middleware in Express.js:**
//    In a Node.js web application using Express.js, middleware functions are often used to process requests. You can use a pipe to compose middleware functions for a specific route.

//    ```javascript
//    app.get('/route',
//      authenticateUser,
//      fetchUserData,
//      processUserData,
//      sendResponse
//    );
//    ```

// 5. **Data Transformation in Data Pipelines:**
//    In data engineering, you might have a data pipeline where you apply a series of transformations to raw data. Piping functions can help organize these transformations.

//    ```javascript
//    const processPipeline = pipe(
//      extractData,
//      cleanData,
//      transformData,
//      loadIntoDatabase
//    );
//    processPipeline(rawData);
//    ```

// In all these cases, using a pipe allows you to express a sequence of operations in a clear and concise manner, making your code more modular, readable, and maintainable.