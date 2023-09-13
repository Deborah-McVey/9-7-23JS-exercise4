/* Exercise #4
Objective: Understand the differences between Local and Global Scope.

Instructions:

Declare a global variable outside of any function.
Create a function that tries to modify that global variable.
Create another function that declares a local variable with the same name.
Observe the behavior when calling both functions.  */

modifyGlobal();

let modifyGlobal = modifyGlobal(); {
	console.log('modifyGlobal Before', modifyGlobal);
}

function modifyGlobal() {
	console.log('modifyGlobal Before', modifyGlobal);
    let modifyGlobal = 10;
	console.log('modifyGlobal After', modifyGlobal);
}

// Identifier 'modiFyGlobal' has already been declared.