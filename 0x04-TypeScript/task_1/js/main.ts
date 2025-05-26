interface Teacher{
 readonly firstName: string
 readonly secondName: string
 fullTimeEmployee: boolean
 yearsOfExperience? :number
 location: string
 [key: string]: any
}
const teacher3: Teacher = {
    firstName: 'Rediet',
    secondName: 'Abreham',
    location:'Addis Abeba',
    fullTimeEmployee: false,
    age:22
}
console.log(teacher3)

interface Directors extends Teacher{
    numberOfReports:number
}
const director1: Directors = {
  firstName: 'John',
  secondName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

interface  printTeacher{
    (firstName: string, lastname:string): string
}
const Teacher: printTeacher = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};


console.log(Teacher("John", "Doe"));

interface studentInterface{
    workOnHomework():string
    displayName():string
}
interface studentConstructor{
    new (firstName:string, lastname:string):studentInterface
}
class StudentClass implements studentInterface {
    constructor(private firstName:string,private lastName:string){}

    workOnHomework(): string {
        return "currently working"
    }
    displayName(): string {
        return this.firstName
    }
}