// Student Result App - minimal, focused functionality
document.addEventListener('DOMContentLoaded', () => {
	const nameIn = document.getElementById('studentname');
	const scoreIn = document.getElementById('studentscore');
	const addBtn = document.getElementById('addbtn');
	const clearBtn = document.getElementById('clearbtn');
	const list = document.getElementById('studentList');

	function createStudentCard(name, score){
		const el = document.createElement('div');
		el.className = 'student-item pop-in';
		el.style.marginTop = '0.6rem';
		el.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center">
			<div>
				<div style="font-weight:700">${escapeHtml(name)}</div>
				<div class="muted">Score: ${escapeHtml(score)}</div>
			</div>
			<div>
				<button class="btn ghost" data-action="remove">Remove</button>
			</div>
		</div>`;
		// remove pop-in after animation so subsequent CSS transitions work normally
		el.addEventListener('animationend', () => el.classList.remove('pop-in'), { once: true });
		return el;
	}

	function escapeHtml(s){
		return String(s)
			.replaceAll('&','&amp;')
			.replaceAll('<','&lt;')
			.replaceAll('>','&gt;')
			.replaceAll('"','&quot;')
			.replaceAll("'","&#39;");
	}

	addBtn.addEventListener('click', () => {
		const name = nameIn.value.trim();
		const score = scoreIn.value.trim();
		if(!name){
			nameIn.focus();
			return;
		}
		if(score === '' || Number.isNaN(Number(score))){
			scoreIn.focus();
			return;
		}

		const card = createStudentCard(name, score);
		list.appendChild(card);
		nameIn.value = '';
		scoreIn.value = '';
		nameIn.focus();
	});

	// allow Enter to add while focusing inputs
	[nameIn, scoreIn].forEach(el => {
		el.addEventListener('keydown', (e) => {
			if (e.key === 'Enter') addBtn.click();
		});
	});

	clearBtn.addEventListener('click', () => {
		list.innerHTML = '';
		nameIn.value = '';
		scoreIn.value = '';
		nameIn.focus();
	});

	// Delegate remove buttons
	list.addEventListener('click', (e) => {
		const btn = e.target.closest('button[data-action="remove"]');
		if(btn){
			const card = btn.closest('.student-item');
			if(card) card.remove();
		}
	});
});
// (old/unused code removed)

// // // Close menu when a nav link is clicked
// // navLinks.forEach(link => {
// //     link.addEventListener('click', () => {
// //         hamburger.classList.remove('active');
// //         navMenu.classList.remove('active');
// //     });
// // });

// // // ===== Active Navigation Highlighting =====
// // window.addEventListener('scroll', () => {
// //     let current = '';
// //     const sections = document.querySelectorAll('section');

// //     sections.forEach(section => {
// //         const sectionTop = section.offsetTop;
// //         const sectionHeight = section.clientHeight;
// //         if (pageYOffset >= sectionTop - 200) {
// //             current = section.getAttribute('id');
// //         }
// //     });

// //     navLinks.forEach(link => {
// //         link.classList.remove('active');
// //         if (link.getAttribute('href').slice(1) === current) {
// //             link.classList.add('active');
// //         }
// //     });
// // });

// // // ===== Contact Form Handling =====
// // const contactForm = document.getElementById('contactForm');
// // const formMessage = document.getElementById('formMessage');

// // if (contactForm) {
// //     contactForm.addEventListener('submit', (e) => {
// //         e.preventDefault();

// //         const name = document.getElementById('name').value;
// //         const email = document.getElementById('email').value;
// //         const message = document.getElementById('message').value;

// //         // Validate inputs
// //         if (!name || !email || !message) {
// //             showMessage('Please fill out all fields', 'error');
// //             return;
// //         }

// //         // Basic email validation
// //         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //         if (!emailPattern.test(email)) {
// //             showMessage('Please enter a valid email address', 'error');
// //             return;
// //         }

// //         // In a real application, you would send this data to a server
// //         console.log('Form Data:', { name, email, message });

// //         // Show success message
// //         showMessage('Thank you for your message! I will get back to you soon.', 'success');

// //         // Reset form
// //         contactForm.reset();

// //         // Clear message after 5 seconds
// //         setTimeout(() => {
// //             formMessage.classList.remove('success', 'error');
// //             formMessage.textContent = '';
// //         }, 5000);
// //     });
// // }

// // function showMessage(text, type) {
// //     formMessage.textContent = text;
// //     formMessage.classList.add(type);
// // }

// // // ===== Scroll Animation =====
// // const observerOptions = {
// //     threshold: 0.1,
// //     rootMargin: '0px 0px -100px 0px'
// // };

// // const observer = new IntersectionObserver((entries) => {
// //     entries.forEach(entry => {
// //         if (entry.isIntersecting) {
// //             entry.target.style.opacity = '1';
// //             entry.target.style.transform = 'translateY(0)';
// //         }
// //     });
// // }, observerOptions);

// // // Observe all project cards and skill categories
// // const animatedElements = document.querySelectorAll('.project-card, .skill-category, .stat');
// // animatedElements.forEach(el => {
// //     el.style.opacity = '0';
// //     el.style.transform = 'translateY(20px)';
// //     el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
// //     observer.observe(el);
// // });

// // // ===== Smooth Scroll Behavior =====
// // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
// //     anchor.addEventListener('click', function (e) {
// //         e.preventDefault();
// //         const target = document.querySelector(this.getAttribute('href'));
// //         if (target) {
// //             target.scrollIntoView({
// //                 behavior: 'smooth',
// //                 block: 'start'
// //             });
// //         }
// //     });
// // });

// // // ===== Add Active Class to Nav Link =====
// // const style = document.createElement('style');
// // style.textContent = `
// //     .nav-link.active::after {
// //         width: 100%;
// //     }
// // `;
// // document.head.appendChild(style);

// // // ===== Navbar Background on Scroll =====
// // window.addEventListener('scroll', () => {
// //     const navbar = document.querySelector('.navbar');
// //     if (window.scrollY > 50) {
// //         navbar.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
// //     } else {
// //         navbar.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
// //     }
// // });

// // // ===== Project Card Hover Effect =====
// // const projectCards = document.querySelectorAll('.project-card');
// // projectCards.forEach(card => {
// //     card.addEventListener('mouseenter', function() {
// //         this.style.transform = 'translateY(-10px)';
// //     });

// //     card.addEventListener('mouseleave', function() {
// //         this.style.transform = 'translateY(0)';
// //     });
// // });

// // // ===== Scroll to Top Button (Optional Enhancement) =====
// // const createScrollToTopButton = () => {
// //     const button = document.createElement('button');
// //     button.innerHTML = '↑';
// //     button.id = 'scrollToTop';
// //     button.style.cssText = `
// //         position: fixed;
// //         bottom: 30px;
// //         right: 30px;
// //         background-color: #6366f1;
// //         color: white;
// //         border: none;
// //         border-radius: 50%;
// //         width: 50px;
// //         height: 50px;
// //         font-size: 1.5rem;
// //         cursor: pointer;
// //         display: none;
// //         z-index: 999;
// //         transition: all 0.3s ease;
// //         box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
// //     `;

// //     document.body.appendChild(button);

// //     window.addEventListener('scroll', () => {
// //         if (window.pageYOffset > 300) {
// //             button.style.display = 'flex';
// //             button.style.alignItems = 'center';
// //             button.style.justifyContent = 'center';
// //         } else {
// //             button.style.display = 'none';
// //         }
// //     });

// //     button.addEventListener('click', () => {
// //         window.scrollTo({
// //             top: 0,
// //             behavior: 'smooth'
// //         });
// //     });

// //     button.addEventListener('mouseenter', function() {
// //         this.style.transform = 'scale(1.1)';
// //     });

// //     button.addEventListener('mouseleave', function() {
// //         this.style.transform = 'scale(1)';
// //     });
// // };

// // createScrollToTopButton();

// // // ===== Page Load Animation =====
// // window.addEventListener('load', () => {
// //     document.body.style.opacity = '1';
// // });

// // console.log('Portfolio website loaded successfully! 🚀');
//  // let friend = ["jam","muhammed","jamiu"];
// // // // console.log(friend[2]);

// // // // // // // // // // // // // // // // // // // // // // // // let fruits = ["pineapple", "orange" , "bannana" , "pawpaw",  90];
// // // // // // // // // // // // // // // // // // // // // // // // let firstfuit = [0];
// // // // // // // // // // // // // // // // // // // // // // // // fruits[4] = "orange";
// // // // // // // // // // // // // // // // // // // // // // // console.log(firstfuit, fruits);
// // // // // // // // // // // // // // // // // // // // // // // udemy is going to help beginners intermediate learners
// // // // // // // // // // // // // // // // // // // // // // const name = ("jamiu, akorede ");
// // // console.log(name);
//  // let students = ["jamiu", "Ganiu", "Enugo "];
//  // let number = 91;

// // // // // // // // // // // // // // // // // // // // // // console.log(number);
// // // // // // // // // // // // // // // // // // // // // // console.log(students);

// // // // // // // // // // // // // // // // // // // // // // let digits = [  2, 3, 4, 5, 7, 8, 9] ;
// // // // // // // // // // // // // // // // // // // // // // let divide = digits / 3;
// // // // // // // // // // // // // // // // // // // // // // console.log(divide);

// // // // // // // // // // // // // // // // // // // // // function test() {
// // // // // // // // // // // // // // // // // // // // //     console.log("hello world")
// // // // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // // // test();
// // // // // // // // // // // // // // // // // // // // //  function greet(){
// // // // // // // // // // // // // // // // // // // // //     console.log("you are welcome ")
// // // // // // // // // // // // // // // // // // // // //  }
// // // // // // // // // // // // // // // // // // // // //  greet();

// // // // // // // // // // // // // // // // // // // // function greet(name){
// // // // // // // // // // // // // // // // // // // //     console.log("How are you " + name)



// // // // // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // // // //function greet("jam")
// // // // // // // // // // // // // // // // // // // const wallHeight = 80;
// // // // // // // // // // // // // // // // // // // function calculate(value) {
// // // // // // // // // // // // // // // // // // //     console.log("the value in cm is:" + value * 2.5 + " cm");
// // // // // // // // // // // // // // // // // // //     return("hello");
// // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // const width = calculate(100);
// // // // // // // // // // // // // // // // // // // const height = calculate(wallHeight);

// // // // // // // // // // // // // // // // // // // const dimension = [width, height];
// // // // // // // // // // // // // // // // // // // console.log(dimension);
// // // // // // // // // // // // // // // // // // //FUNCTION decleration
// // // // // // // // // // // // // // // // // //     function addnumbers(a, b){
// // // // // // // // // // // // // // // // // //         return a+b;
// // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // //     const firstValue = addnumbers(6, 90);
// // // // // // // // // // // // // // // // // //     const secondNumber = addnumbers(100, 80);
// // // // // // // // // // // // // // // // // //     //function expresssion
// // // // // // // // // // // // // // // // // //     const add = function(a,b){
// // // // // // // // // // // // // // // // // //         return a+b;
// // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // //     const  thirdValue = add(70, 100);

// // // // // // // // // // // // // // // // // //     const value = [firstValue, secondNumber, thirdValue];
// // // // // // // // // // // // // // // // // //     console.log(value);
// // // // // // // // // // // // // // // // //     function calculateTotal(subTotal, Tax){
// // // // // // // // // // // // // // // // //         return (subTotal + Tax);
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //        const order1 = calculateTotal(60, 90);
// // // // // // // // // // // // // // // // //        const  order2 = calculateTotal(90, 90);
// // // // // // // // // // // // // // // // //        const order3 = calculateTotal(80, 69);
// // // // // // // // // // // // // // // // //        const value = [order1, order2, order3];
// // // // // // // // // // // // // // // // //     //    console.log(value);\
// // // // // // // // // // // // // // // //             const details ={
// // // // // // // // // // // // // // // //                 name: "JAmiu",
// // // // // // // // // // // // // // // //                 lasName:"muhammed",
// // // // // // // // // // // // // // // //                 Age:80,
// // // // // // // // // // // // // // // //                 education: true,
// // // // // // // // // // // // // // // //                 job:false,
// // // // // // // // // // // // // // // //                 soblings:["wasiu", "saka"],
// // // // // // // // // // // // // // // //                 greeting: function (){
// // // // // // // // // // // // // // // //                     console.log("hello world")
// // // // // // // // // // // // // // // //                 },


// // // // // // // // // // // // // // // //             };
// // // // // // // // // // // // // // // //             console.log(details);
// // // // // // // // // // // // // // // //             details.greeting();
// // // // // // // // // // // // // // // const car ={
// // // // // // // // // // // // // // //     make:"Toyota",
// // // // // // // // // // // // // // //     model:"Camry",
// // // // // // // // // // // // // // //     year:2022,
// // // // // // // // // // // // // // //     color:["red", "blue", "green"],
// // // // // // // // // // // // // // //     newmodule:true,
// // // // // // // // // // // // // // //     oldmodule:false,
// // // // // // // // // // // // // // //     methods:["drive", "stop"],
// // // // // // // // // // // // // // //     drive: function(){
// // // // // // // // // // // // // // //         console.log("the car is moving");
// // // // // // // // // // // // // // //     },
// // // // // // // // // // // // // // //     stop(){
// // // // // // // // // // // // // // //         console.log("the car is stopped");
// // // // // // // // // // // // // // //     },




// // // // // // // // // // // // // // // };
// // // // // // // // // // // // // // // console.log(car.color[0])







// // // // // // // // // // // // // // if(2 < 1 ){
// // // // // // // // // // // // // //     console.log("two is greater than one");
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // else{
// // // // // // // // // // // // // //     console.log("one is greater than two");
// // // // // // // // // // // // // // }

// // // // // // // // // // // // // const  value = 2 > 1;
// // // // // // // // // // // // // if(value){
// // // // // // // // // // // // //     console.log("Hello World");
// // // // // // // // // // // // // }else{
// // // // // // // // // // // // //     console.log("Hello Jam");
// // // // // // // // // // // // // }
// // // // // // // // // // // // // ! = not
// // // // // // // // // // // // const num1 = 9;
// // // // // // // // // // // // const num2 = "9";
// // // // // // // // // // // // // const Result = num1 >= num2;
// // // // // // // // // // // // // if(num1 > num2){
// // // // // // // // // // // // //     console.log("num1 is greater than num2");
// // // // // // // // // // // // // }
// // // // // // // // // // // // // else if(Result){
// // // // // // // // // // // // //     console.log("equal numbers")
// // // // // // // // // // // // // }
// // // // // // // // // // // // // else{
// // // // // // // // // // // // //     console.log("second letter is bigger than first")
// // // // // // // // // // // // // }c == checks for only value while === checks for both type and th
// // // // // // // // // // // // const value = num1 == num2;
// // // // // // // // // // // // const value2 = num1 === num2;
// // // // // // // // // // // // console.log(value, value2);
// // // // // // // // // // // // || or opertors runs with at least one corrcet operator
// // // // // // // // // // // // && and operators strctly  confirsms everything
// // // // // // // // // // // // != not opertor
// // // // // // // // // // // //
// // // // // // // // // // // const name = "jamiu";

// // // // // // // // // // // const age = 70;
// // // // // // // // // // // if(name === "jamiu" && age === 50){
// // // // // // // // // // //     console.log("Correct usernname");
// // // // // // // // // // // }
// // // // // // // // // // // else{
// // // // // // // // // // //     console.log("wrong username");

// // // // // // // // // // // }

// // // // // // // // // // // if statement
// // // // // // // // // // // if(dice === 1 ){
// // // // // // // // // // //     console.log("you rolled a one ")
// // // // // // // // // // // }
// // // // // // // // // // // if(dice === 2){
// // // // // // // // // // //     console.log("you rolled two")
// // // // // // // // // // // }
// // // // // // // // // // // if(dice < 1 || dice > 6){
// // // // // // // // // // //     console.log("nahhh you are out of point")

// // // // // // // // // // // // }
// // // // // // // // // // // else if statement
// // // // // // // // // // // if(dice === 1 ){
// // // // // // // // // // //     console.log("you rolled a one ")
// // // // // // // // // // // }
// // // // // // // // // // // else if(dice === 2){
// // // // // // // // // // //     console.log("you rolled two")
// // // // // // // // // // // }
// // // // // // // // // // // else(dice < 1 || dice > 6){
// // // // // // // // // // //     console.log("nahhh you are out of point")

// // // // // // // // // // // }
// // // // // // // // // // const dice = 3;
// // // // // // // // // // switch(dice){
// // // // // // // // // //     case 1:
// // // // // // // // // //         console.log("you rolled a one ")
// // // // // // // // // //         break;
// // // // // // // // // //     case 2:
// // // // // // // // // //         console.log("you rolled a two ")
// // // // // // // // // //         break;
// // // // // // // // // //     case 3:
// // // // // // // // // //         console.log("you rolled a three ");
// // // // // // // // // //         break;
// // // // // // // // // //         default:
// // // // // // // // // //     console.log("you didnt roll any number  ")
// // // // // // // // // //     }
// // // // // // // // //     const person1 = {
// // // // // // // // //         Name: "jamiu",
// // // // // // // // //         age:19,
// // // // // // // // //         Status: "resident",
// // // // // // // // //     }
// // // // // // // // //      const person2={
// // // // // // // // //      Name: "Ganiu",
// // // // // // // // //      age:19,
// // // // // // // // //      Status: "tourist   ",
// // // // // // // // //  }
// // // // // // // // //  if(person1.age >= 18 && person1.Status === "resident"){
// // // // // // // // //     console.log("you are eligible to vote")

// // // // // // // // //  }else{
// // // // // // // // //     console.log("you are not eligible to vote")

// // // // // // // // //  }

// // // // // // // // //   if(person2.age < 18  && person2.Status === "resident"){
// // // // // // // // //     console.log("you are eligible to vote")
// // // // // // // // //  }
// // // // // // // // //  else{
// // // // // // // // //     console.log("you are not eligble to vote")
// // // // // // // // //  }
// // // // // // // // //Loops
// // // // // // // // // let amount = 10;

// // // // // // // // // while (amount > 0) {
// // // // // // // // //     console.log("i have " + amount + " dollars and i am going to the store   " + amount--);
// // // // // // // // // }
// // // // // // // // let money = 0;
// // // // // // // // do {
// // // // // // // //     console.log("you have " + money + " money left"); money++;
// // // // // // // // }
// // // // // // // // while (money < 10);
// // // // // // // let i;
// // // // // // // for (let i = 0; i < 10; i++) {
// // // // // // //     console.log("and my number is: " + i)

// // // // // // // }
// // // // // // for (let number = 11; number >= 0; number--) {
// // // // // //     console.log("and this is the: " + number + " you wanted ")
// // // // // // }
// // // // // let value = "   jamiu";
// // // // // let Result = value.trim();
// // // // // console.log(Result) 
// // // // //String Methods
// // // // //string methods
// // // // let name = " jamiu";
// // // // console.log(name.length);
// // // // console.log(name.toUpperCase());
// // // // console.log(name.toLowerCase());
// // // // console.log(name.charAt(0));
// // // // console.log(name.charAt(name.length -1));
// // // // console.log(name.indexOf("a"));
// // // // console.log(name.trim());
// // // // console.log(name.startsWith("jamiu"));
// // // // console.log(name.trim().toLowerCase().startsWith("jamiu"));
// // // // console.log(name.includes("jam"));
// // // // console.log(name.slice(0,2))
// // // // console.log(name.slice(-1))


// // // //Template literals
// // // const nam = "john";
// // // const age =30;

// // // const Template = `Hey i am ${nam} , and i am ${age} years old, `
// // // console.log(Template);
// // //string challenge
// // // function fullname(a,b,c){
// // //     const FullName = `${a} ${b} ${c}`;
// // // console.log(FullName)
// // //     return FullName.toUpperCase();
// // // }
// // // console.log(fullname("jamiu ","Mohammed ","Abdulsalam") ); 
// // function fullname({a,b,c}){
// //     const FullName = `${a} ${b} ${c}`;
// // console.log(FullName)
// //     return FullName.toUpperCase();
// // }
// // console.log(fullname({a:"jamiu ",b:"Mohammed ",c:"Abdulsalam"}) ); 
// //Array methods
// let fruits = ["apple", "banana", "orange", "grape" , 1,2,3,4,5];
// //length
// console.log(fruits.length);
// console.log(fruits.length -1);
// //concat
// let moreFruits = ["pineapple", "mango", "watermelon"];
// const allFruits = fruits.concat(moreFruits);   
// console.log(allFruits);
// //reverse
// console.log(moreFruits.reverse()); 


// const details ={
//  firstmame: "jamiu",
//  lastnmae:"muhammed",
//  age: 19,
// }
// function greet(a, b){
//     console.log("Hello" )
    
// }
// return(a,x)
 const studentname = getelementbyId("studentname");
const studentage = getelementbyId("studentage");
const studentgrade = getelementbyId("studentgrade");
const submitBtn = getelementbyId("submitBtn");