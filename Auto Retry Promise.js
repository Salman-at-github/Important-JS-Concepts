/**
 * This function takes three arguments:
 *  - promiseFunc: The promise function you want to retry. (eg data fetching)
 *  - retries: The maximum number of retries allowed.
 *  - delay: The delay (in milliseconds) between retries.
 * It returns a new promise that attempts to execute the provided promise function
 * and retries it on rejection up to the specified number of times.
 */
function autoRetryPromise(promiseFunc, retries = 1, delay = 1000) {
    // Create a new promise to handle the retry logic
    return new Promise((resolve, reject) => {
      // Function to attempt the promise execution with a counter
      const attempt = (retryCount) => {
        promiseFunc()
          .then(resolve) // Resolve the outer promise on success
          .catch((error) => {
            // Check if retries are exhausted
            if (retryCount >= retries) {
              return reject(error); // Reject the outer promise on final error
            }
            console.log(`Error attempt ${retryCount + 1}:`, error);
            // Log the error and schedule a retry after the delay
            setTimeout(() => attempt(retryCount + 1), delay); //increase count each time
          });
      };
  
      // Initiate the first attempt
      attempt(0);
    });
  }
  
  // Example usage
  const fetchData = () => {
    // Simulate a network error with a random chance
    return new Promise((resolve, reject) => {
        console.log("Fetching .............................")
      if (Math.random() > 0.5) {
        resolve({ data: "Success!" });
      } else {
        reject(new Error("Network Error"));
      }
    });
  };
  
  autoRetryPromise(fetchData, 3) // Retry up to 3 times with 1 second delay
    .then((data) => console.log("Data fetched:", data))
    .catch((error) => console.error("Failed to fetch data:", error));



//                                          USE CASES
// Here are some real-world use cases where an auto-retry promise can be beneficial:

// 1. Network Requests:

// Fetching data from APIs: When fetching data from external APIs, network errors or server overload can occur. An auto-retry promise can automatically attempt to retrieve the data a few times before giving up, improving the application's resilience.
// 2. Uploading Files:

// Large file uploads: Uploading large files can be prone to network interruptions. An auto-retry promise can ensure the upload continues after a brief retry, improving the user experience and success rate.
// 3. Messaging Systems:

// Sending critical messages: In messaging systems where delivering a message is crucial, an auto-retry promise can ensure repeated attempts to send the message before flagging a failure.
// 4. Database Interactions:

// Database connection issues: Temporary database outages or connection problems can happen. An auto-retry promise can automatically attempt reconnection a few times before notifying the application of a persistent issue.
// 5. Third-party Integrations:

// Interacting with external services: When integrating with external services, unexpected errors can occur on their side. An auto-retry promise can improve the reliability of the integration by attempting to re-establish communication.
// General Benefits:

// Improved user experience: By automatically handling retries, you can prevent user frustration from encountering transient errors.
// Increased fault tolerance: The application becomes more resilient by automatically recovering from temporary issues.
// Reduced development overhead: You don't need to implement custom retry logic in each part of your code.