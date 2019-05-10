//Three ways to find the longest string. Each method starts out by splitting the string into an array of substrings with the split method

// Method 1: For Loop
//Loops though the array and assigns two variables based on an if statement.


function findLongestA(str){

	let splitStrA = str.split(" ");
	let longest = 0; // length of our longest word
	let longestWord = ""; // our longest word

	for(let i = 0; i < splitStrA.length; i ++){

		if (splitStrA[i].length > longest){

			longest = splitStrA[i].length;
			longestWord = splitStrA[i];
		}

	}

  console.log(`Longest Word: ${longestWord} Length: ${longest}`);

}

findLongestA("Blues Bros: We are on a mission from God.");



// Method 2: Sort method
//Sort method sorts the array in place

findLongestB =(str)=>{

    let splitStrB = str.split(" ");
    let sorted = splitStrB.sort((a, b)=> b.length - a.length);
    // The length of the second element is compared to the length of the first element
    // The sorted array looks like this ["chickens", "fried", "coke.", "I'll", "have", "four", "and", "a"]
    // We access the longest and shortest words by their indexes
    console.log(`Longest Word: ${sorted[0]} Length: ${sorted[0].length}`);
    console.log(`Shortest Word: ${sorted[sorted.length-1]} Length: ${sorted[sorted.length-1].length}`);
    console.log(sorted);

};

findLongestB("I'll have four fried chickens and a coke.");



// Method 3: Reduce method
// applies a function against an accumulator and each value of the array.

findLongestC =(str)=>{

   let splitStrC = str.split(" ");
   let reduced = splitStrC.reduce((acc, startVal)=>{
   acc += startVal;
   
   return acc.length > startVal ? acc : startVal;


   });

  console.log(`Longest Word: ${reduced} Length: ${reduced.length}`);

}

findLongestC("Are you the police? No mam we're musicians.");

