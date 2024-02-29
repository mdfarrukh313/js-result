
alert("Wellcome To The Result Page")


var userFirstName = prompt("Enter your first name?.")
var userLastName =  prompt("Enter is your last name?.")
var userFatherName = prompt("Enter your father name?.")
var rollNumber = +prompt("Enter your roll number?.")
var contactNumber = +prompt("Enter your contact number?.")
var cnicNumber= +prompt("Enter your cnic number?.")
var instituteName = prompt("Enter your institute name?.")
var teacherName = prompt("Enter your teacher name?.")

console.log(userFirstName)
console.log(userLastName)
console.log(userFatherName)
console.log(rollNumber)
console.log(contactNumber)
console.log(cnicNumber)
console.log(instituteName)
console.log(teacherName)

var english = +prompt ("Enter your english obtained marks");
var urdu = +prompt ("Enter your urdu obtained marks");
var math = +prompt ("Enter your maths obtained marks");
var islamiyat = +prompt ("Enter your islamiyat obtained marks");
var physics = +prompt ("Enter your physics obtained marks");
var computer = +prompt ("Enter your computer obtained marks");
var totalObtainedMarks = (english + urdu + math + islamiyat + physics + computer)
var totalPercentage = totalObtainedMarks/600*100

console.log(" English Number = " + english)
console.log(" Urdu = " + urdu)
console.log(" Math = " + math)
console.log(" Islamiyat = " + islamiyat)
console.log(" Physics = " + physics)
console.log(" Computer = " + computer)

console.log("Total marks = 600")
console.log("Your total obtained marks = " + totalObtainedMarks)
console.log("Your percentage is = " + totalPercentage + " %")


 // Displaying the results in the body
 document.write("<h1>Result Page</h1>");
 document.write("<p>Student Name: " + userFirstName + " " + userLastName + "</p>");
 document.write("<p>Father's Name: " + userFatherName + "</p>");
 document.write("<p>Roll Number: " + rollNumber + "</p>");
 document.write("<p>Contact Number: " + contactNumber + "</p>");
 document.write("<p>CNIC Number: " + cnicNumber + "</p>");
 document.write("<p>Institute Name: " + instituteName + "</p>");
 document.write("<p>Teacher Name: " + teacherName + "</p>");
 document.write("<h2>Subject-wise Marks</h2>");
 document.write("<ul>");
 document.write("<li>English: " + english + "</li>");
 document.write("<li>Urdu: " + urdu + "</li>");
 document.write("<li>Math: " + math + "</li>");
 document.write("<li>Islamiyat: " + islamiyat + "</li>");
 document.write("<li>Physics: " + physics + "</li>");
 document.write("<li>Computer: " + computer + "</li>");
 document.write("</ul>");
 document.write("<p>Total Obtained Marks: " + totalObtainedMarks + "</p>");
 document.write("<p>Percentage: " + totalPercentage + " %</p>");