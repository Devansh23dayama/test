const instructors = [
  { id: 1, name: "Ritu", active: true },
  { id: 2, name: "Adil", active: false },
  { id: 3, name: "Neha", active: true },
  { id: 4, name: "Mohit", active: false }
];
const  instructor = instructors.filter((i)=> i.active == true);
console.log(instructor);
