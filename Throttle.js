//Concept: A functon which gets called once first, and then subsequent calls are cancelled until the timer expires, only after which it can be called

const throttle = (passedFunc , delay) =>{
    
    //to keep track of last call
    let throttledAlready = false;
    
    return function(...args){
        //if func not called already, call it, set throttled true and reset that after the timer
        if(!throttledAlready){ 

            passedFunc(...args); //call func

            throttledAlready = true; //set throttle true

            setTimeout(() => { //reset throttle after delay
                throttledAlready = false;
            }, delay);

        }
    }
}

//using it

const submitForm = async()=>{
    // submit logic
}

const throttledSubmitForm = throttle(submitForm , 5000);

//                                          USE CASES

// Scroll Events:
// Throttling is commonly used when handling scroll events. For example, when implementing infinite scroll or lazy loading of content, throttling prevents the scroll event from triggering the content loading function too frequently, which could impact performance.

// Button Clicks:
// Throttling can be applied to button clicks to prevent users from triggering a certain action (like submitting a form) too frequently. This can be useful in scenarios where you want to avoid accidental double clicks or repeated form submissions.

// Mousemove Events:
// When tracking mouse movement on a webpage, throttling can be used to limit the frequency of updates to improve performance. For instance, updating the position of an element based on mouse movement.

// Resize Events:
// Similar to debouncing, throttling can be useful for handling window resize events. It ensures that the function responding to the resize event is not executed too frequently, preventing unnecessary recalculations.

// User Input in Gaming or Interactive Applications:
// In gaming or interactive applications, where user input (such as keyboard or mouse events) triggers actions in the game or application, throttling can be applied to ensure that actions are processed at a controlled rate.