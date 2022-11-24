class Student {
  static counter = 0;
  constructor(name, age, phone, marks) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.marks = marks;
    Student.counter++;
  }
  markCheck() {
    if (this.marks >= 40) console.log('eligible');
    else console.log('not eligible');
  }
  placement(ag) {
    return (mrk) => {
      if (this.age >= ag && this.mark >= mrk) console.log(true);
      else console.log(false);
    };
  }
}

let stu1 = new Student('Scsc', 18, 9684646, 60);
let stu2 = new Student('SACsfv', 34, 9684646, 50);
let stu3 = new Student('ggsfsvb', 23, 9684646, 40);
let stu4 = new Student('scSCDC', 12, 9684646, 40);
let stu5 = new Student('scdfa', 19, 9684646, 40);
// console.log(stu1.marks);
// console.log(Student.counter);
stu1.placement(35)(75);
