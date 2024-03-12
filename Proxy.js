// In JavaScript, a `Proxy` is an object that wraps another object (known as the target) and allows you to intercept and customize operations on the target object. Proxies provide a powerful mechanism for creating custom behavior for object-related operations.

// ### Basic Syntax:

const myproxy = new Proxy(target, handler);

// - `target`: The object being wrapped by the Proxy.
// - `handler`: An object containing methods (known as traps) that define the behavior for various operations on the target.

// ### Example:

// // Example target object
const targetObject = {
  name: 'John',
  age: 30,
};

// Proxy handler object
const handler = {
  get: function (target, prop, receiver) {
    console.log(`Getting property "${prop}"`);
    return target[prop];
  },
  set: function (target, prop, value, receiver) {
    console.log(`Setting property "${prop}" to ${value}`);
    target[prop] = value;
    return true;
  },
};

// Create a Proxy
const proxy = new Proxy(targetObject, handler);

// Accessing properties through the Proxy
console.log(proxy.name); // Logs: Getting property "name", Output: John

// Modifying properties through the Proxy
proxy.age = 31; // Logs: Setting property "age" to 31
console.log(proxy.age); // Logs: Getting property "age", Output: 31
// ```

// ### Proxy Handlers (Traps):

// - **get(target, prop, receiver):** Intercept property access.
// - **set(target, prop, value, receiver):** Intercept property assignment.
// - **apply(target, thisArg, argumentsList):** Intercept function calls.
// - **construct(target, argumentsList, newTarget):** Intercept object instantiation with `new`.
// - **...and more.**

// ### Use Cases:

// 1. **Validation:**
//    - You can use a Proxy to enforce validation rules when setting properties.

// 2. **Logging:**
//    - Log property access or modifications for debugging purposes.

// 3. **Default Values:**
//    - Provide default values for properties when accessed.

// 4. **Virtual Properties:**
//    - Create virtual properties or computed properties.

// 5. **Security:**
//    - Add security layers by controlling access to certain properties.

// ### Caveats:

// - Proxies introduce some performance overhead compared to regular property access.
// - Proxies cannot be used to override fundamental operations like `delete`, `instanceof`, or `typeof`.
// - Not all operations can be intercepted (e.g., some Reflect methods).

// Proxies are a versatile feature in JavaScript, allowing you to implement various patterns and behaviors with a clean and extensible syntax. They are commonly used in libraries, frameworks, and advanced applications for implementing aspects like reactive programming, immutability, and more.