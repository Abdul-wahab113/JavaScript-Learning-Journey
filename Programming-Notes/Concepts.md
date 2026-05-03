# 🧠 Learning Notes: Web Development & FP

## 1. Functional Programming: HOF vs. Callbacks

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
  return function(x) { // Returning a function (HOF)
    return x * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
```

---

## 2. 🌐 JavaScript Fetch API Cheat Sheet

The **Fetch API** is a built-in interface for making asynchronous network requests. It is the modern successor to `XMLHttpRequest`, allowing you to retrieve or send data without a page refresh.

### 🚀 How to Use It (Modern Async/Await)
```javascript
// 1. GET Request
async function getData() {
  try {
    const response = await fetch('https://example.com');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Could not fetch data:', error);
  }
}

// 2. POST Request
async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data) 
  });
  return response.json(); 
}
```

### 🛠️ Problems It Solves
*   **Eliminates Callback Hell**: Uses **Promises** for cleaner `async/await` syntax.
*   **Reduces Verbosity**: Replaces the bulky syntax of `XMLHttpRequest`.
*   **Memory Efficiency**: Supports **Streaming** for large files.

### 🎯 Purpose & Common Uses
*   **API Integration**: Fetching real-time data (weather, news).
*   **Form Submission**: Sending user data without reloading.
*   **Dynamic Loading**: "Infinite Scroll" or background updates.

### 🔄 Alternatives

| Tool | Description |
| :--- | :--- |
| **Axios** | Library with auto-JSON parsing and request cancellation. |
| **XHR** | The original native method; verbose and event-based. |
| **jQuery $.ajax()** | Legacy method used in jQuery projects. |
| **HttpClient** | Built-in tool for frameworks like Angular. |



# 🛠️ Advanced JavaScript & Mongoose Middleware

## 1. Normal vs. Arrow Functions (The `this` Logic)


| Feature | Normal Function (`function`) | Arrow Function (`=>`) |
| :--- | :--- | :--- |
| **`this` Keyword** | **Dynamic**: Defined by *how* it's called. | **Lexical**: Inherited from the *parent* scope. |
| **Context** | Creates its own "suitcase" (`this`). | Has no "suitcase"; looks at the parent's. |
| **Usecases** | **Mongoose Hooks**, Object methods. | **Callbacks** (`.map`), Timers (`setTimeout`). |

### 💡 Why does this matter for Mongoose?
Mongoose needs to "hand" you the database document. A **Normal Function** accepts this gift into its `this` context. An **Arrow Function** ignores it and looks at the global scope, resulting in `this` being `undefined`.

---

## 2. Mongoose Middleware (Hooks)

Hooks are lifecycle events that solve the problem of **Repetitive Logic** and **Data Integrity**.

### 🏗️ Pre-Hooks (`.pre`) — The Gatekeeper
*   **When**: Runs **before** the DB operation (e.g., `save`, `validate`).
*   **Problem Solved**: Prevents bad data from entering the DB; automates security tasks.
*   **Best For**: 
    *   **Password Hashing**: Encrypting a password before saving.
    *   **Data Validation**: Checking complex logic that simple schemas can't catch.

```javascript
userSchema.pre('save', async function(next) {
  // 'this' is the document. We use function() to access it.
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});
```

### 🏁 Post-Hooks (`.post`) — The Reporter
*   **When**: Runs **after** the DB operation is successful.
*   **Problem Solved**: Handles side effects that don't need to slow down the DB save process.
*   **Best For**:
    *   **Communication**: Sending "Welcome" emails.
    *   **Logging**: Tracking user activity in a separate log file.

```javascript
userSchema.post('save', function(doc) {
  // 'doc' is the finished record from the DB.
  console.log(`User ${doc.email} was successfully created.`);
});
```

---

## 🧠 Summary Mental Model
*   **Use Pre-Hooks** to "clean the house" before guests (data) arrive.
*   **Use Post-Hooks** to "write a thank you note" after the guests leave.
*   **Always use `function()`** for hooks so you can actually "see" the data you're working on.

