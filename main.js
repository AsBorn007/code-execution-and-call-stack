// // 🔵The working of the JavaScript works on three phases:
// // 1. Global Execution Context
// // 2. Memory phase / Creation phase
// // 3. Execution phase




// // 🔵Phase 1: Global Execution Context
// // The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment, & window object in browser environment)
// // // समझिए कि जब JavaScript कोड चलता है, तो उसके लिए एक Execution Context बनाया जाता है। सबसे पहला Execution Context जो बनता है, उसे Global Execution Context कहते हैं।

// 🔵Phase 2: Memory phase
// During this phase, JS engine scans the code and assigns the initial values for the variables , functions, etc.. For variables they are 'undefined' and for functions they are set to their function definition

// जब JavaScript कोड execute होने वाला होता है, उससे पहले Memory Phase (जिसे "Creation Phase" भी कहते हैं) आती है। इस दौरान JavaScript Engine आपके कोड को स्कैन करता है और सभी variables, functions, आदि के लिए memory allocate करता है। 
// Memory Phase वह स्टेज है, जब JavaScript Engine सभी variables और functions को memory में reserve कर लेता है, लेकिन उन्हें execute नहीं करता।
// Variables:
// var: Memory में "undefined" के साथ store होता है।
// let/const: Memory में store होते हैं, लेकिन "initialized" नहीं होते (TDZ में रहते हैं)।
// Functions: उनकी पूरी definition memory में save हो जाती है।





// 🔵Phase 3: Execution phase
// After the creation phase completed, the execution phase begins where actual values of the variables are set. And when the functions are called it creates a new 'Function Execution' context which consists of two phases (they works same as explained above but only for the particular function scope):
// 1. Memory phase 
// 2. Execution phase 
// 📝The return value of the 'Function Execution' context is passed to the Global Execution Context

// Execution Phase में क्या होता है?
// Global Scope में Execution:
// JavaScript top-to-bottom लाइन बाई लाइन कोड execute करता है।
// Variables को उनकी actual values assign की जाती हैं।
// Functions को call किया जाता है। जब कोई function call होता है, तो उसके लिए एक नया Function Execution Context बनाया जाता है।
// Function Execution Context क्या है?
// जब भी कोई function call होता है, तो JavaScript उसके लिए अलग से एक execution environment बनाता है, जिसे Function Execution Context कहते हैं। यह context भी दो phases में काम करता है (जैसे Global Execution Context):

// Memory Phase:
// Function के अंदर declare हुए variables और functions के लिए memory allocate की जाती है।
// Variables को "undefined" और functions को उनकी पूरी definition दी जाती है।
// Execution Phase:
// Variables को उनकी actual values assign की जाती हैं।
// Function के instructions (statements) execute होते हैं।

// मान लो, Global Execution Context एक मैनेजर है।

// जब मैनेजर किसी worker (function) को काम सौंपता है, तो worker अपने task (execution context) को independently करता है।
// Task खत्म होने पर worker result मैनेजर (Global Context) को वापस दे देता है।
// // Global  Excecution  or Global enviroment 
// // =================================================================
// // Jab b code excetue hota hai chahe vo kitna b bda ho or kitna b chota ho  to global Excecution se run hota hai to sbse phle usko allocate kiya jata hai (This) k ander ---or ye chize to honi he honi hai 


let a = 10;
let b = 20;
function add (num1, num2){
    let sum = num1 + num2;
    return sum;
}

let result = add(a , b);
console.log(result); // 30
let result2 = add(25 , 25);
console.log(result2); // 50