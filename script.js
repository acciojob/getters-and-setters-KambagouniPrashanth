//complete this code
class Person {
	name,
	age,
	Person(name,age){
		this.name=name;
		this.age=age;
	}
	getName() {
        return this.name;
    }
	setAge(){
		this.age=age;
	}
}

class Student extends Person {
	
}

class Teacher extends Person {
	
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
