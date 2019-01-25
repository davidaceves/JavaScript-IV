// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }

    speak () {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }

    demo (subject) {
        return `Today we are learning about ${subject}.`
    }

    grade (student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }

    grade (student) {
       let points = Math.floor(Math.random() * 21);
       let random = Math.floor(Math.random() * 2) // Returns a random integer between 0 or 1 to determine if points will be positive or negative

       const originalGrade = student.grade;

       if (random === 0) {
           let newGrade = student.grade += points;

           console.log(`${student.name}'s grade of ${originalGrade} was increased by ${points} points, final grade is ${newGrade}.`)

           
       } else {
           let newGrade = student.grade -= points;
           console.log(`${student.name}'s grade of ${originalGrade} was decreased by ${points} points, final grade is ${newGrade}.`)
       }
    }
}

class ProjectMananger extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }

    standUp (channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }

    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade;
    }

    listsSubjects () {
        this.favSubjects.forEach(subjects => {
            return console.log(subjects);
        });
    }

    PRAssignment (subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge (subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }

    graduate () {
        if (this.grade >= 70) {
            return `${this.name} graduated!`
        } else {
            return `Keep trying, ${this.name}!`
        }
    }
}

// Instructors

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const bob = new Instructor({
    name: 'Bob',
    location: 'Alabama',
    age: 34,
    gender: 'male',
    favLanguage: 'C++',
    specialty: 'Software Development',
    catchPhrase: `Whatever dude`
  });

// Students

  const student_1 = new Student({
    name: 'Ted',
    location: 'Florida',
    age: 40,
    gender: 'male',
    previousBackground: 'Plumber',
    className: 'FSW20',
    favSubjects: ['HTML', 'CSS', 'Java'],
    grade: 65
  });

  const student_2 = new Student({
    name: 'Sally',
    location: 'Maine',
    age: 29,
    gender: 'female',
    previousBackground: 'Pilot',
    className: 'FSWPT1',
    favSubjects: ['Biology', 'History', 'Infosec'],
    grade: 77
  });

// PMs

const pm_1 = new ProjectMananger({
    name: 'Ralph',
    location: 'California',
    age: 32,
    gender: 'male',
    gradClassName: 'CS2',
    favInstructor: 'Sean'
  });

const pm_2 = new ProjectMananger ({
    name: 'John',
    location: 'Texas',
    age: 35,
    gender: 'male',
    gradClassName: 'CS4',
    favInstructor: 'Cameron'
});

// console.log(fred.speak());
// console.log(fred.demo('react'));

// console.log(bob.favLanguage);
// console.log(bob.grade(student_2, 'Recursion I'));

// student_1.listsSubjects();
// console.log(student_1.PRAssignment('React I'));
// console.log(student_2.sprintChallenge('Infosec'));

// console.log(pm_1.standUp('cs2_ralph'));
// console.log(pm_1.debugsCode(student_1, 'JavaScript I'));

// stretch

fred.grade(student_1);
console.log(student_1.graduate());