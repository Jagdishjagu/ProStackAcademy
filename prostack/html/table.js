let employees = [
  {
    id: 1,
    first_name: "Jud",
    last_name: "Lemmen",
    email: "jlemmen0@wordpress.com",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "Ana",
    last_name: "Beverley",
    email: "abeverley1@yale.edu",
    gender: "Female",
  },
  {
    id: 3,
    first_name: "Foss",
    last_name: "McIlmorie",
    email: "fmcilmorie2@technorati.com",
    gender: "Male",
  },
];

function displayData() {
  let row = "";
  for (emp of employees) {
    row =
      row +
      `<tr>
    <td> ${emp.ID} </td>
    <td> ${emp.first_Name} </td>
    <td> ${emp.last_Name} </td>
    <td> ${emp.email} </td>
    <td> ${emp.gender} </td>
    
    </tr>`;
  }
  document.getElementById("rajini").innerHTML = row;
}
