const email = document.getElementById("email");

const submit = document.getElementById("submit");
submit.addEventListener("click", () => validate(email));

function validate(element) {
  if (element.validity.typeMismatch) {
    element.setCustomValidity("The Email is not in the right format");
    element.reportValidity();
  } else {
    element.setCustomValidity("");
  }
}

let userForm = document.getElementById("user-form");

const retriveEntries = () => {
  let entries = localStorage.getItem("user-entries");
  if (entries) {
    entries = JSON.parse(entries);
  } else {
    entries = [];
  }
  return entries;
};
let userEntries = retriveEntries();

const displayEntries = () => {
  const entries = retriveEntries();

  const tableEntries = entries
    .map((entry) => {
      const nameCell = `<td class="border px-4 py-2">${entry.name}</td>`;
      const emailCell = `<td class="border px-4 py-2">${entry.email}</td>`;
      const passwordCell = `<td class="border px-4 py-2">${entry.password}</td>`;
      const dobCell = `<td class="border px-4 py-2">${entry.dob}</td>`;
      const aceeptTermsCell = `<td class="border px-4 py-2">${entry.acceptedTermsAndConditions}</td>`;

      const row = `<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${aceeptTermsCell}</tr>`;
      return row;
    })
    .join("\n");

  const table = `<table class="table-auto w-full"><tr>

    <th class="px-4 py-2 text-center">Name</th>
    <th class="px-4 py-2 text-center">Email</th>
    <th class="px-4 py-2 text-center">password</th>
    <th class="px-4 py-2 text-center">DOB</th>
    <th class="px-4 py-2 text-center">Accepted Terms? </th>
    </tr>${tableEntries} </table>`;

  let details = document.getElementById("user-entries");
  details.innerHTML = table;
};

const saveUserForm = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const acceptedTermsAndConditions =
    document.getElementById("remember-me").checked;

  const entry = {
    name: name,
    email: email,
    password: password,
    dob: dob,
    acceptedTermsAndConditions: acceptedTermsAndConditions,
  };

  userEntries.push(entry);

  localStorage.setItem("user-entries", JSON.stringify(userEntries));
  displayEntries();
};

userForm.addEventListener("submit", saveUserForm);
displayEntries();
