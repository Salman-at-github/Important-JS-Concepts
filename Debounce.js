// Concept: A function which takes in the function we wanna call with a delay. The function timer resets every time action is triggered, and runs only once after the timer end.

const debounce = (passedFunc , delayMS) =>{
    let timerID;
    return function (...args){
        clearTimeout(timerID); //clear timeout every time 

        setTimeout(() => { //call the function only after delay time has passed
            passedFunc(...args);
        }, delayMS);
    }
}

// e.g., usage
const handleOnchangeSeach = (e)=>{
    // logic
}

const debouncedOnchange = debounce(handleOnchangeSeach, 500);


//                                              USE CASES

// Search Input:
// Imagine you have a search input on a webpage. As the user types, you may want to perform a search operation, but you don't want to send a request for every keystroke. Debouncing ensures that the search function is called only after the user has stopped typing for a specified period, reducing the number of unnecessary requests.

// Resize Events:
// When handling window resize events, you might want to recalculate certain layouts or styles. However, continuous firing of resize events can be performance-intensive. Debouncing helps in delaying the execution of the recalculation function until the user has finished resizing the window.

// Auto-save in Text Editors:
// In text editors or content management systems, auto-save features are common. Instead of saving the content every time the user types a character, debouncing can be applied to trigger the auto-save function only after the user has stopped typing for a certain duration.

// Scroll Events:
// When handling scroll events, especially for infinite scroll or lazy loading of content, debouncing prevents firing the content loading function too frequently. The function will only execute after a brief pause in scrolling.

// User Authentication:
// In scenarios where you need to check user authentication status or perform token refresh, debouncing can be used to delay these checks until the user has stopped interacting with the application. 