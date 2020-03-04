# Instructions

Create a function that invokes `func` with arguments reversed.

```js
var flipped = flipArgs(function() {
  return _.toArray(arguments);
});

flipped('a', 'b', 'c', 'd');
// => ['d', 'c', 'b', 'a']
```

# Requirements

### **What are some good real-life use cases for such a function?**
*Argument could be used in the form of a stack, or it could be used to check whether the argument is a palindrome*

### **What test cases can you add to the test file?**

*Add the relevant test-cases in the test file*


# Restrictions
- Don't use any libraries
