//я не совсем понял зачем создавать для каждого имени отдельную функцию, как это в примере задания написано. Поэтому я создам одну функцию, универсальную для всех пользователей. Для ясности в задании в качестве посещения пользователя был представлен вызов функции, а именно
//для Майка - mikeVisits(mike), для Боба - bobVisits(bob) и тд. соответственно...

let mike = { name: "Mike", age: 18 };
let bob = { name: "Bob", age: 25 };
let nikola = { name: "Nikola", age: 32 };

const userVisits = new Map();

function userVisitsCounter() {
  return function (user) {
    if (!userVisits.has(user)) {
      userVisits.set(user, 0);
    }
    const visits = userVisits.get(user) + 1;
    userVisits.set(user, visits);
  };
}

const countUserVisits = userVisitsCounter();
countUserVisits(mike);
countUserVisits(mike);
countUserVisits(mike);
countUserVisits(bob);
countUserVisits(nikola);
countUserVisits(nikola);

console.log(userVisits.get(mike));
console.log(userVisits.get(bob));
console.log(userVisits.get(nikola));
