// // let name= "Ahmed Mohamed";
// // let age = 40;
// // let arryes= [40, 50, "ahmed", 41]
// // console.log(name);
// // theAge = 20;
// // hoppis = ["ahmed", 10, true];

// // let user = [{
// //         theName: "Ahmed",
// //         theAge: 40,
// //         hoppis: hoppis
// // },{
// //         theName: "Ahmed",
// //         theAge: 100,
// //         hoppis: hoppis
// //   }
// //         ];

// // let lasTuserLength= user.length-1;

// // let LasThoppisLength = user[lasTuserLength] ['hoppis'].length - 1;

// // console.log(user[lasTuserLength] ['hoppis'] [LasThoppisLength]);

// // console.log(hoppis);

// // console.log(user.hoppis);

// // console.log(user.l[1][2]);

// let data = {
// 	meta: {
// 		totalPages: 13,
// 	},
// 	data: [
// 		{
// 			type: "articles",
// 			id: "3",
// 			attributes: {
// 				title: "JSON:API paints my bikeshed!",
// 				body: "The shortest article. Ever.",
// 				created: "2015-05-22T14:56:29.000Z",
// 				updated: "2015-05-22T14:56:28.000Z",
// 			},
// 		},
// 		{
// 			type: "articles",
// 			id: "3",
// 			attributes: {
// 				title: "JSON:API paints my bikeshed!",
// 				body: "The shortest article. Ever.",
// 				created: "2015-05-22T14:56:29.000Z",
// 				updated: "2015-05-22T14:56:28.000Z",
// 			},
// 		},
// 		{
// 			type: "articles",
// 			id: "3",
// 			attributes: {
// 				title: "JSON:API paints my bikeshed!",
// 				body: "The shortest article. Ever.",
// 				created: "2015-05-22T14:56:29.000Z",
// 				updated: "2015-05-22T14:56:28.000Z",
// 			},
// 		},
// 		{
// 			type: "articles",
// 			id: "3",
// 			attributes: {
// 				title: "JSON:API paints my bikeshed!",
// 				body: "The shortest article. Ever.",
// 				created: "2015-05-22T14:56:29.000Z",
// 				updated: "2015-05-22T14:56:28.000Z",
// 			},
// 		},
// 		{
// 			type: "articles",
// 			id: "3",
// 			attributes: {
// 				title: "JSON:API paints my bikeshed!",
// 				body: "The shortest article. Ever.",
// 				created: "2015-05-22T14:56:29.000Z",
// 				updated: "2015-05-22T14:56:28.000Z",
// 			},
// 		},
// 	],
// 	links: {
// 		self: "http://example.com/articles?page[number]=3&page[size]=1",
// 		first: "http://example.com/articles?page[number]=1&page[size]=1",
// 		prev: "http://example.com/articles?page[number]=2&page[size]=1",
// 		next: "http://example.com/articles?page[number]=4&page[size]=1",
// 		last: "http://example.com/articles?page[number]=13&page[size]=1",
// 	},
// };

// // // get totalPages
// // let totalPages = data.meta.totalPages;
// // console.log(totalPages);
// // /////////////////////////////////////////////////

// // // show self & first beside each other
// // let selfLink = data.links.self;
// // let firstLink = data.links.first;
// // console.log(selfLink + " " + firstLink);
// // console.log(`${selfLink} ${firstLink}`);

// // ////////////////////////////////////

// // // check if totalPages is equal to data length
// // let q = data.meta.totalPages === data.data.length;
// // console.log(q);
// // /////////////////////////////////////

// // // get the title of the data before the last one
// // let last2Title = data.data[data.data.length - 2].attributes.title;
// // console.log(last2Title);
// // /////////////////////////////////////////

// // //check if post id is less than 3 and type is articles 
// // let w = data.data[0].id < 3 && data.data[0].type === "articles";

// // console.log(w);
// // let name = "Ahmed";
// // console.log(name);

// // let nom = 50;
// // let bool= true;
// // let str = ["Ahmed", "Ahmed", "Ahmed" ,"Ahmed", "Ahmed", 51, true ];
// // console.log(str[6]);

// // Check if post id is less than 3 and type is articles - print "Pinned Article"

//     if (data.data[0].id < 3 && data.data[0].type === "articles") {
//         console.log("Pinned Article");
//     }																											

// // Check if totalPages is not equal to data length - print "inValid Data"

// if (data.meta.totalPages !== data.data.length) {
//     console.log("Invalid Data");
// }
// let code= 10 ;
// if (true) {
// 	// let code =5 ;
// 	console.log(code);
// }
// console.log(code);

// if (data.data[0].id <= 3) {
// 	if (data.data[0].type === "articles") {
// 		console.log("Pinned Article");
// 	}
// }

// // let grade =75; 
// // if (grade <= 0 && grade < 50) {

// // 	console.log("Failed");

// // } else if (grade >= 50 && grade < 65) {

// // 	console.log("Accepted");
// // } else if (grade >= 65 && grade < 75) {

// // 	console.log("Good");
// // } else if (grade >= 75 && grade < 85) { 
// // 	console.log("Very Good");
// // } 
// //  else if (grade >= 85 && grade < 100) { 
// // 	console.log("Excellent");
// // }
// // else{ 
// // 	console.log("by");
// // }
// let grade= 60;
// if (grade < 50) {
// 	console.log("failed");
// }else if(grade<=65){
// 	console.log("accepted");
// }else if (grade<=75) {
// 	console.log("good");
// }else if (grade<=85) {
// 	console.log("very good");
// }else if (grade <=100) {
// 	console.log("excellent");
// }

// ///////////////////////////////////////////////////////////////////////

// let money = 5;
// let isThirsty = true;
// let takeBus = true;
// let sitInBus = true;
// let sitNextToPerson = true;
// let likePerson = true;
// let proposeToPerson = true;
// let marryPerson = true;
// let haveChild = true;
// let isGirl = true;
// let isRespectful = true;
// let stealMoney = true;

// if (money >= 5) {
//   if (isThirsty) {
//     console.log("He can drink juice");
//   } else if (takeBus) {
//     if (sitInBus) {
//       if (sitNextToPerson) {
//         if (likePerson) {
//           if (proposeToPerson) {
//             if (marryPerson) {
//               if (haveChild) {
//                 if (isGirl) {
//                   if (isRespectful) {
//                     console.log("He has a respectable daughter.");
//                   } else {
//                     console.log("He has a disrespectful daughter.");
//                   }
//                 } else {
//                   console.log("He has a son.");
//                 }
//               } else {
//                 console.log("He has no children");
//               }
//             } else {
//               console.log("The person didn't get married.");
//             }
//           } else {
//             console.log("Not suggested to the person");
//           }
//         } else {
//           console.log("He didn't like the person");
//         }
//       } else {
//         console.log("He sat on the bus but didn't sit next to anyone.");
//       }
//     } else {
//       console.log("He didn't sit on the bus.");
//     }
//   } else {
//     console.log("He doesn't have enough money to drink juice or ride the bus");
//   }
// } else {
//   console.log("He doesn't have enough money to drink juice or take the bus.");
// }

// if (stealMoney) {
//   console.log("He's going to steal the money.");
// } else {
//   console.log("He won't steal the money.");
// }
// ////////////////////////////////////////////////////////////////////////////

// let A = "Drink Juse" ;
// let B = "bus" ;

// if (A) {
// 	console.log(A);
	
// }else if (B) {
// 	let C= "standing";
// 	let D = "sitting";
// 	if (C) {
// 		C = "standing"
// 		console.log(C);
// 	}else if (D) {
// 		D = "sitting";
// 		let E= "man";
// 		let F= "women";
// 		if (E) {
// 			E = "man";
// 			console.log(E);
// 		} else if (F) {
// 			let G ="notlove"
// 			let H ="love"
// 			if (G) {
// 				G ="notlove"
// 				console.log(G);
// 			}else if (H) {
// 				let I ="notengagged"
// 				let J ="engagged"
// 				if (I) {
// 					I ="notengagged"
// 					console.log(I);
// 				}else if (J) {
// 					let k ="notmarried"
// 					let L ="married"
// 					if (k) {
// 						k = "notmarried"
// 						console.log(k);
// 					}else if (L) {
// 						let M ="didnotgivebirth"
// 						let N ="givebirth"
// 						if (L) {
// 							M ="didnotgivebirth"
// 							console.log(M);
// 						}else if (N) {
// 							let O = "girl"
// 							let P = "boy"
// 							if (O) {
// 								O ="girl"
// 								console.log(O);
// 							}else if (P) {
// 								let Q ="respected"
// 								let R ="notrespected"
// 								if (Q) {
// 									Q = "respected"
// 									console.log(Q);
// 								}else if (R) {
// 									let S = "didnotsteel"
// 									let T = "steel"
// 									if (S) {
// 										S ="didnotsteel"
// 										console.log(S);
// 									}else if (T) {
// 										console.log(A);
// 									}
// 								}
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }
// // 3 = fiz
// // 5 = buzz
// // both = Fizz and Buzz

// // VARs 
// let number = 27;
// Num2 = undefined;

// for (number; number != 0;) {
//     let Num2 = number -= 1;
//     if (!(Num2 % 3)) {
//         console.log("Fizz")
//     }
//     if (!(Num2 % 5)) {
//         console.log("buzz")
//     }
//     if (!(Num2 % 3) || (Num2 % 5)) {
//         console.log("Fizz and Buzz")
//     }
// }

// while (number != 0) {
//     let Num2 = number -= 1;
//     if (!(Num2 % 3)) {
//         console.log("Fizz")
//     }
//     if (!(Num2 % 5)) {
//         console.log("buzz")
//     }
//     if (!(Num2 % 3) || (Num2 % 5)) {
//         console.log("Fizz and Buzz")
//     }
// }

// let num = 0;

// while (num <= 10) {
//     if (num % 3 == 0 || num % 5 == 0) {
//         num++;
//         continue;
//     }
    
//     console.log(num);
//     num++;
// }

// function nums(number) {

// 	while (number != 0) {
// 		let Num2 = number -= 1;
// 		if (!(Num2 % 3)) {
// 			console.log("Fizz")
// 		}
// 		if (!(Num2 % 5)) {
// 			console.log("buzz")
// 		}
// 		if (!(Num2 % 3) || (Num2 % 5)) {
// 			console.log("Fizz and Buzz")
// 		}
// 	}
// }
// nums(10);
// nums(20);
// nums(30);
// nums(40);
// nums(50);

// let minNumber = 1;
// let maxNumber = 26;

// let numbers = [];
// let sum = 0;

// for (let i = 0; i < 4; i++) {
//     numbers.push(Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber);
// }

// while (sum !== 100) {

//     numbers = [];
//     sum = 0;

//     for (let i = 0; i < 4; i++) {
//         numbers.push(Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber);
//     }

//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
	
// }

// console.log("The Numbers", numbers);
// console.log("all Numbers", sum);
// //////////////////////////////////////////////////////////////////
// /*
//     *
//    **
//   ***
//  ****
// *****
// */
// function makePyramid(numRows) {
//     for (let i = 1; i <= numRows; i++) {
//         let rowStars = '';
//         for (let j = 1; j <= i; j++) {
//             rowStars += '*';
//         }

//         let rowSpaces = ' '.repeat((numRows - i) );  
//         console.log(rowSpaces + rowStars);  
//     }
// }

// let numRows = 5;
// makePyramid(numRows);

// let arr = ["ahmed", "mohamed", "mahmoud", "erahim"];
// for (let key in arr) {
// 	console.log(arr.length - key - 1)
// }
// let arr1 = [5, -1, 3, 4, 10] = 20
// let arr1 = [5, -1, 3, 4, 10] 
// function AddingNumbers(arr1) {
// 	for (let key of arr1) {
// 		console.log(arr1.length)
// 	}
// } AddingNumbers(arr1)

// function AddingNumbers (arr1) {
    
//     let Add = arr1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//     return Add;
// }

// let Num = [5, -1, 3, 4, 10];

// let Result =AddingNumbers(Num);
//  console.log (Result);

// function AddingNumbers(arr1) {
//     let sum = 0;
//     for (let i = 0; i < arr1.length; i++) {
//         sum += arr1[i];
//     }
//     return sum;
// }

// let Num = [5, -2, 3, 4, 10];

// let Result = AddingNumbers(Num);
// console.log(Result);

let we = {
	array1: [5, 9, 10, -1, -15],
	array2: [4, 5, 2, -20],
	array3: [5, 9, -10, -15, 29],
  };
  
  function sumArray(arr) {
	let sumNumber = 0;
	for (let i = 0; i < arr.length; i++) {
		sumNumber += arr[i];

	}
	return sumNumber;
  }
  
  let sumArray1 = sumArray(we.array1);
  let sumArray2 = sumArray(we.array2);
  let sumArray3 = sumArray(we.array3);
  
  let totalSum = sumArray1 + sumArray2 + sumArray3;

  console.log("All", totalSum);
///////////////////////////////////////////////
  function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  let n = 10; 
  for (let i = 0; i <= n; i++) {
    console.log(fibonacci(i));
  }
  ///////////////////////////////////////////////

  function bubbleSort(arr) {
    let len = arr.length;
  
    for (let i = 0; i < len - 1; i++) {
      
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr;
  }
  
  let arr = [120, 7, 58, 40, 32, 17];
  let sortedArr = bubbleSort(arr);
  
  console.log(sortedArr);
  //////////////////
  // let arrr = [1, 2, 3, 4];
  // function soom(arrr) {
  //   let sum = 0;
  //   for (let i = 0; i < arrr.length; i++) {
  //     sum += arrr[i]
      
  //   }
  //   return sum;
  // }
  // console.log (soom([1, 5, 6 ,7]));
  // Array.prototype.sum = soom.bind(this);
  // console.log(arr.sum());
  ///////////////////////////////////////////////////

  class FourSideShape {
    constructor(side1, side2, side3, side4) {
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
      this.side4 = side4;
    }
    permiter() {}
  }
  
  class Triangle extends FourSideShape {
    constructor(angle, side1, side2, side3, side4) {}
    printTrinagle() {}
    area() {}
  }
//////////////////////////////////////////////////////
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	getFullYearOfBirth() {
		return 2024 - this.age;
	}
}

class Doctor extends Person {
	constructor(specialty, name, age) {
		super(name, age);
		this.specialty = specialty;
		console.log("Hi, I am doctor " + this.name);
	}
}

let x = 5;
let i = 5;
let w = 10;

if (x == i ) {
  console.log(x += 1 );
}else{
  console.log(x + i + w);
}
