### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
async/await
.then and .catch
- What is a Promise?
a promise is an object that is expecting a value but it takes time
- What are the differences between an async function and a regular function?
async function will pause the resst of the code in the function until the data is recieved
- What is the difference between Node.js and Express.js?
node.js is the functionality that allows you to create a backend with javascript, express is a framework buit ontop to make the code easier
- What is the error-first callback pattern?
error first is creating an if statement for if the call back fails then the function will stop and throw an error
- What is middleware?
middleware is a finction that runs before or during each function
- What does the `next` function do?
the next function bumps the code into the next available function that meets the requirements, if you pass in next(e) it will count it as an error
- What does `RETURNING` do in SQL? When would you use it?

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
this code will take a long time to finish since the calls are all being called individually instead of as a batch, you could use a variable for base_url to make the code shorter
```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
