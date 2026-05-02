# 🧠 Learning Notes: Functional Programming

## Higher-Order Functions (HOF) vs. Callbacks

### Definitions
*   **Higher-Order Function (HOF):** The "manager" function. It takes another function as an argument or returns one.
*   **Callback Function:** The "worker" function. It is passed into the HOF to be executed later.

### Key Differences
| Feature | Higher-Order Function (HOF) | Callback Function |
| :--- | :--- | :--- |
| **Definition** | Operates on other functions. | Passed as a value to another function. |
| **Role** | The receiver; controls *when* the callback runs. | The argument; defines *what* happens. |
| **Capability** | Can take, return, or do both. | Is only the function being passed. |

### 💻 Code Example
```javascript
// The HOF
function multiplier(factor) {
  return function(x) { // Returning a function
    return x * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10



