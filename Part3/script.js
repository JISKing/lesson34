const listItems = document.querySelectorAll(".shop-list li");

function uniquePhones(phoneList) {
  let uPhones = new Set();
  phoneList.forEach((item) => {
    uPhones.add(item.textContent);
  });
  return uPhones;
}

console.log(uniquePhones(listItems));
