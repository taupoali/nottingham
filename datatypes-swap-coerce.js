
// Explicit Type Conversion (Type Casting)

//**String to Number**:
  let str1 = "123";
  let num1 = Number(str1);       // Converts "123" to 123 (number)
  let num2 = parseInt(str1);     // Converts "123" to 123 (integer)
  let num3 = parseFloat(str1);   // Converts "123" to 123.0 (float)


// *Number to String**:
  let num4 = 456;
  let str2 = String(num4);         // Converts 456 to "456" using String function passing argument
  let str3 = num4.toString();      // Converts 456 to "456" using toString method on var
  

// **Boolean to String**:
  let bool1 = true;
  let str4 = String(bool1);         // Converts true to the string "true"


// **String to Boolean**:
 
  let str5 = "true";
  let bool2 = Boolean(str5);         // Converts "true" to true
  // Any non-empty string converts to true


// **Number to Boolean**:

  let num5 = 0;
  let bool3 = Boolean(num5);        // Converts 0 to false
  // Any non-zero number converts to true


// **Implicit Type Coercion**

/* 
Implicit type coercion happens automatically when JavaScript tries to perform an operation 
involving different types. This can lead to unexpected results if you're not careful.
*/

// **String Concatenation with Numbers**:

  let result1 = "The answer is " + 42;          // "The answer is 42"
  // The number 42 is coerced into a string.


// **Arithmetic Operations**:

  let result = "5" - 2; // 3
  // "5" is coerced to the number 5.
  
  let result2 = "5" + 2; // "52"
  // 2 is coerced to the string "2" because + is also a string concatenation operator.


// **Boolean Coercion in Conditions**:

  if ("") {
    console.log("This won't run.");
  }
  // The empty string is coerced to false.

  if ("non-empty") {
    console.log("This will run.");
  }
  // Any non-empty string is coerced to true.


// **Equality (`==`) vs. Strict Equality (`===`)**:

  let a = 5;
  let b = "5";

  console.log(a == b); // true
  // == coerces "5" into a number before comparing.

  console.log(a === b); // false
  // === checks both value and type, so no coercion happens.


// ### When to Use Each?

// *Explicit Conversion**: Use it when you want precise control over the data types and avoid unexpected behavior.
// It's good practice to use explicit conversion when the type matters.
  
  let total1 = Number("42") + 8; // Clear and predictable


// **Implicit Coercion**: Useful for concise code, but it requires understanding how JavaScript handles 
// type coercion. Avoid relying on it when clarity is more important than brevity.
  
  let total2 = "42" - 8; // Works, but less clear
