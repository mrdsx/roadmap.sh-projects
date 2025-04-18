const questions = {
  1: {
    question: "What is the difference between var, let and const?",
    answer: "In JavaScript, var is function-scoped and can be re-declared; let and const are block-scoped, with let allowing re-assignment and const preventing it. However, const objects can have their contents modified."
  },
  2: {
    question: "What is the difference between null and undefined?",
    answer: "The null is an assignment value. It can be assigned to a variable as a representation of no value. But the undefined is a primitive value that represents the absence of a value, or a variable that has not been assigned a value."
  },
  3: {
    question: "What is the difference between == and ===?",
    answer: "The == equality operator converts the operands if they are not of the same type, then applies strict comparison. The === strict equality operator only considers values equal that have the same type."
  },
  4: {
    question: "What are the different ways to declare a variable in JavaScript?",
    answer: "There are three ways to declare a variable in JavaScript: var, let, and const."
  },
  5: {
    question: "What are Scopes in JavaScript?",
    answer: "A scope is a set of variables, objects, and functions that you have access to. There are three types of scopes in JavaScript: Global, Function (Local) and Block."
  },
};

export default questions;
