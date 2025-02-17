let getNumber = document.getElementById("inpet-text1");
let Mistake = document.getElementById("pforMistake");
let hidden = document.getElementsByClassName("hidden");
let number;
let regex = /^[0-9]+$/;
// -------------------------------------------
let regex1 = /^[A-Za-z]+( [A-Za-z]+)*$/;
let regex2 = /^[0-9]+$/;
let regex3 = /^[A-Za-z]+( [A-Za-z]+)*$/;
let regex4 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let p1 = document.getElementById("forMistake1");
let p2 = document.getElementById("forMistake2");
let p3 = document.getElementById("forMistake3");
let p4 = document.getElementById("forMistake4");
let input1 = document.getElementsByClassName("input1")[0];
let input2 = document.getElementsByClassName("input2")[0];
let input3 = document.getElementsByClassName("input3")[0];
let input4 = document.getElementsByClassName("input4")[0];
let counter = document.getElementsByClassName("counter")[0];
let i = 1;
// --------------------------------------------------------------
let table = document.getElementById("table");

// --------------------------------------------
let form = document.getElementsByClassName("hiddn")[0];
let btn = document.getElementById("Add-button");
let button = document.getElementById("accepted-button");
button.addEventListener("click", function () {
  if (getNumber.value === "") {
    Mistake.innerText = "this filed is rquired";
  } else if (!regex.test(getNumber.value)) {
    Mistake.innerText = "Books Must be Number Between(9-0)only";
  } else if (getNumber.value == 0) {
    Mistake.innerText = "Book Number must be start with 1";
  } else {
    Mistake.innerText = "";
    hidden[0].style.display = " none";
    form.style.display = "block";
    form.style.visibility = "visible";
  }
});
// --------------------------------------------------
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
// -------------------------------------------------------------------

let booksList = [];

function addbook() {
  let Books = {
    bookName: input1.value,
    price: input2.value,
    AuthorName: input3.value,
    AuthorEmail: input4.value,
  };
  booksList.push(Books);
  display();
}
// for (let i = 0; i <number; i++) {

input1.addEventListener("input", function () {
  if (input1.value === "" || !regex1.test(input1.value)) {
    p1.style.visibility = "visible";
  } else {
    p1.style.visibility = "hidden";
  }
});
input2.addEventListener("input", function () {
  if (input2.value === "" || !regex2.test(input2.value)) {
    p2.style.visibility = "visible";
  } else {
    p2.style.visibility = "hidden";
  }
});
input3.addEventListener("input", function () {
  if (input3.value === "" || !regex3.test(input3.value)) {
    p3.style.visibility = "visible";
  } else {
    p3.style.visibility = "hidden";
  }
});
input4.addEventListener("input", function () {
  if (input4.value === "" || !regex4.test(input4.value)) {
    p4.style.visibility = "visible";
  } else {
    p4.style.visibility = "hidden";
  }
});

btn.addEventListener("click", function () {
  if (input1.value === "" || !regex1.test(input1.value)) {
    p1.style.visibility = "visible";
  } else {
    p1.style.visibility = "hidden";
  }

  if (input2.value === "" || !regex2.test(input2.value)) {
    p2.style.visibility = "visible";
  } else {
    p2.style.visibility = "hidden";
  }

  if (input3.value === "" || !regex3.test(input3.value)) {
    p3.style.visibility = "visible";
  } else {
    p3.style.visibility = "hidden";
  }

  if (input4.value === "" || !regex4.test(input4.value)) {
    p4.style.visibility = "visible";
  } else {
    p4.style.visibility = "hidden";
  }
  if (
    regex1.test(input1.value) &&
    regex2.test(input2.value) &&
    regex3.test(input3.value) &&
    regex4.test(input4.value)
  ) {
    getNumber.value--;

    addbook();
    display();
    clearForm();
    counter.innerHTML = `<i class="fa-solid fa-book-open-reader"></i>${i++}`;
    if (getNumber.value == 0) {
      form.style.display = "none";
      form.style.visibility = "hidden";
      table.classList.remove("hiddn");
    }
  }
});

function clearForm() {
  input1.value = null;
  input2.value = null;
  input3.value = null;
  input4.value = null;
}

function display() {
  let box = " ";
  for (let i = 0; i < booksList.length; i++) {
    box += `
          <tr id="${i}">
                    <td class="tdname">${booksList[i].bookName}</td>
                    <td class="tdprice">${booksList[i].price}</td>
                    <td class="tdAuthorname">${booksList[i].AuthorName}</td>
                    <td class="tdAuthorEmail">${booksList[i].AuthorEmail}</td>
                    <td  class="tdedit"><button type="submit" id="edit-button">Edit</button></td>
                    <td class="tddelete"><button type="submit" id="delete-button" >Delete</button></td>

                </tr>
        `;
  }

  document.getElementById("body").innerHTML = box;
}

let body = document.getElementById("body");
body.addEventListener("click", function (e) {
  let index = e.target.parentNode.parentNode.id;
  let tdname = document.getElementsByClassName("tdname")[index];
  let tdprice = document.getElementsByClassName("tdprice")[index];
  let tdAuthorname = document.getElementsByClassName("tdAuthorname")[index];
  let tdAuthorEmail = document.getElementsByClassName("tdAuthorEmail")[index];
  let tdedit = document.getElementsByClassName("tdedit")[index];
  let tddelete = document.getElementsByClassName("tddelete")[index];

  if (e.target.id == "edit-button") {
    tdname.innerHTML = `<input type="text" value="${booksList[index].bookName}"><p class="displayNone"></p>`;
    tdprice.innerHTML = `<input type="text" value="${booksList[index].price}"><p class="displayNone"></p>`;
    tdAuthorname.innerHTML = `<input type="text" value="${booksList[index].AuthorName}"><p class="displayNone"></p>`;
    tdAuthorEmail.innerHTML = `<input type="text" value="${booksList[index].AuthorEmail}"><p class="displayNone"></p>`;
    tdedit.innerHTML = `<button class="saveBtn">Save</button>`;
    tddelete.innerHTML = `<button class="cancelBtn">Cancel</button>`;
  }
  if (e.target.classList.contains("saveBtn")) {
    formValidation(
      tdname.children[0],
      tdname.children[1],
      tdprice.children[0],
      tdprice.children[1],
      tdAuthorname.children[0],
      tdAuthorname.children[1],
      tdAuthorEmail.children[0],
      tdAuthorEmail.children[1]
    );

    if (
      regex1.test(tdname.children[0].value) &&
      regex2.test(tdprice.children[0].value) &&
      regex3.test(tdAuthorname.children[0].value) &&
      regex4.test(tdAuthorEmail.children[0].value)
    ) {
      booksList[index].bookName = tdname.children[0].value;
      booksList[index].price = tdprice.children[0].value;
      booksList[index].AuthorName = tdAuthorname.children[0].value;
      booksList[index].AuthorEmail = tdAuthorEmail.children[0].value;

      fillRow(
        e.target.parentNode.parentNode,
        booksList[index].bookName,
        booksList[index].price,
        booksList[index].AuthorName,
        booksList[index].AuthorEmail
      );
    }
  }

  if (e.target.classList.contains("cancelBtn")) {
    fillRow(
      e.target.parentNode.parentNode,
      booksList[index].bookName,
      booksList[index].price,
      booksList[index].AuthorName,
      booksList[index].AuthorEmail
    );
  }

  if (e.target.id == "delete-button") {
    booksList.splice(index, 1);
    e.target.parentNode.parentNode.remove();
  }
});

function fillRow(row, name, price, auName, auEmail) {
  row.innerHTML = `<td class="tdname">${name}</td>
                    <td class="tdprice">${price}$</td>
                    <td class="tdAuthorname">${auName}</td>
                    <td class="tdAuthorEmail">${auEmail}</td>
                    <td class="tdedit"><button id="edit-button">Edit</button></td>
                    <td class="tddelete"><button id="delete-button">Delete</button></td>`;
}

function formValidation(
  bName,
  errBName,
  price,
  errPrice,
  auName,
  errAuName,
  auEmail,
  errAuEmail
) {
  if (bName.value === "" || !regex1.test(bName.value)) {
    errBName.style.visibility = "visible";
  } else {
    errBName.style.visibility = "hidden";
  }

  if (price.value === "" || !regex2.test(price.value)) {
    errPrice.style.visibility = "visible";
  } else {
    errPrice.style.visibility = "hidden";
  }

  if (auName.value === "" || !regex3.test(auName.value)) {
    errAuName.style.visibility = "visible";
  } else {
    errAuName.style.visibility = "hidden";
  }

  if (auEmail.value === "" || !regex4.test(auEmail.value)) {
    errAuEmail.style.visibility = "visible";
  } else {
    errAuEmail.style.visibility = "hidden";
  }
}
