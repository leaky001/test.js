// 1 
const names = ['Ali', 'Aisha', 'Omar', 'Fatima', 'Amir'];
const namesStartingWithA = names.filter(name => name.startsWith('A'));
console.log(namesStartingWithA); 

// 2
const myFruits = ["apple","banana","apple","Orange", "banana", "apple"]

const count = myFruits.reduce((acc, curr) =>{
   acc[curr] = (acc[curr] || 0) + 1;

   return acc
}, {})

console.log({myFruits}) 





// 3
function orderFood(callback) {
   setTimeout(() => {
       console.log("Food Ordered");
       callback();
   }, 1000);
}

function prepareFood(callback) {
   setTimeout(() => {
       console.log("Food Prepared");
       callback();
   }, 2000);
}

function deliverFood(callback) {
   setTimeout(() => {
       console.log("Food Delivered");
       callback();
   }, 1500);
}

function receiveFood(callback) {
   setTimeout(() => {
       console.log("Food Received");
       callback();
   }, 1000);
}

function makePayment() {
   setTimeout(() => {
       console.log("Payment Made");
   }, 500);
}


orderFood(() => {
   prepareFood(() => {
       deliverFood(() => {
           receiveFood(() => {
               makePayment();
           });
       });
   });
});






4
Print each student's name and score
students.forEach(student => {
   console.log(`${student.name}: ${student.score}`);
});

const upperCaseNames = students.map(student => student.name.toUpperCase());
console.log(upperCaseNames);

const passedStudents = students.filter(student => student.passed);
console.log(passedStudents);


const passedNamesUpper = students.filter(student => student.passed).map(student => student.name.toUpperCase());
console.log(passedNamesUpper); 



5

const students = {
   Ali: [85, 90, 78],
   Aisha: [92, 88, 95],
   Omar: [],
};

function getStudentScores(name) {
   return new Promise((resolve, reject) => {
       setTimeout(() => {
           if (students[name]) {
               resolve(students[name]);
           } else {
               reject(new Error("Student not found"));
           }
       }, 2000);
   });
}

async function calculateAverage(name) {
   try {
       const scores = await getStudentScores(name);
       if (scores.length === 0) {
           return "No scores available";
       }
       const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
       return `Average score of ${name}: ${average}`;
   } catch (error) {
       return error.message;
   }
}

calculateAverage("Ali").then(console.log); 
calculateAverage("Omar").then(console.log); 
calculateAverage("Fatima").then(console.log); 


7

const articles = [
   {
       title: "The Future of Web3",
       content: "Web3 is revolutionizing the internet...",
       author: "Alice Johnson"
   },
   {
       title: "Understanding JavaScript Closures",
       content: "Closures allow functions to access variables...",
       author: "David Smith"
   },
   {
       title: "AI in Healthcare",
       content: "Artificial Intelligence is transforming healthcare...",
       author: "Sophia Williams"
   }
];

const container = document.createElement('div');
container.className = "article-container";

articles.forEach(article => {
   const card = document.createElement('div');
   card.className = "article-card";

   const title = document.createElement('h3');
   title.textContent = article.title;

   const content = document.createElement('p');
   content.textContent = article.content;

   const author = document.createElement('small');
   author.textContent = `By: ${article.author}`;

   card.appendChild(title);
    card.appendChild(content);
    card.appendChild(author);
   container.appendChild(card);
});

document.body.appendChild(container);






