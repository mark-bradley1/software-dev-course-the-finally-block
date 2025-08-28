/*
===========================================
📂 File Processing Simulation with Exceptions
===========================================

🎯 Objective:
This activity will help students:

- Identify and explain JavaScript's standard exceptions through practical examples
- Implement `finally` blocks to manage resources and ensure consistent cleanup

---
📘 Scenario:
You’ve been hired to create a system that simulates file processing for a virtual library.

The system must:
- Validate user input (file names and data)
- Simulate file reading/writing operations
- Ensure all resources (e.g., file handles) are closed, even if errors occur

---
🧭 Instructions:

Step 1: Debug Standard Exceptions  
- Run the starter code and identify the standard exceptions being thrown  
- Correct the issues and observe output

Step 2: Add Input Validation and Custom Exceptions  
- Validate:
  • Missing file names 
  • Non-string file data  
  • Empty string data 

Step 3: Implement a `finally` Block  
- Simulate releasing resources, regardless of whether an error occurred

Step 4: Test Your Solution  
- Use a variety of inputs to confirm the `finally` block always executes
*/

// ============================================
// 🛠️ Starter Code: processFile Function
// ============================================

function processFile(fileName, fileData) {
  try {
    // TODO: Add input validation here
    if (!fileName) {
      throw new ReferenceError("Please add file name");
    }

    if (!fileData) {
      throw new Error("Please add file data");
    }

    if (typeof fileData != "string") {
      throw new TypeError("fileData must be a string");
    }
    // TODO: Implement simulated file processing here
    console.log(`Processing file: ${fileName}`);
    console.log(`File content: ${fileData}`);

    // TODO: Add simulated file operations (reading/writing)
    console.log(`Reading ${fileName}`);
    setTimeout(() => {
      console.log("Parsing...overwriting files");
    }, 2000); // delay in milliseconds

  } catch (err) {
    // TODO: Implement error handling
    if (err instanceof ReferenceError) {
      console.error(`\nReference Error: ${err.message}`);
    } else if (err instanceof TypeError) {
      console.error(`\nType Error: ${err.message}`);
    } else {
      console.error(`\nError: ${err.message}`);
    }
  }
  // TODO: Implement a finally block to close resources
  finally {
    console.log(`Finally block entered: starting cleanup`);
    setTimeout(() => {
      console.log("File cleanup completed");
    }, 2500); // delay in milliseconds
  }
}

// ============================================
// 🧪 Test Cases Below
// ============================================

processFile(); // ❌ ReferenceError: File name is missing
processFile("myFile.txt", 42); // ❌ TypeError: File data must be a string
processFile("myFile.txt", ""); // ❌ Error: File data cannot be empty
processFile("myFile.txt", "Hello, world!"); // ✅ Should process successfully
