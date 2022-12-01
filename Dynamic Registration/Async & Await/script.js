//Using promise alone

// console.log('person1');
// console.log('person2');
// const bringsTicket = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('ticket');
//   }, 3000);
// });
// const popcorn = bringsTicket.then((t) => {
//   console.log('husband: we should go in');
//   console.log('wife: i am hungry');
//   return new Promise((resolve, reject) => {
//     resolve(`${t} popcorn`);
//   });
// });

// const getButter = popcorn.then((t) => {
//   console.log('husband: we should go in');
//   console.log('wife:i need butter on popcorn');
//   return new Promise((resolve, reject) => {
//     resolve(`${t} butter`);
//   });
// });

// getButter.then((t) => console.log(t));

// const drink = getButter.then((t) => {
//   return new Promise((resolve, reject) => resolve(`${t} drink`));
// });

// drink.then((t) => console.log(t));

// console.log('person4');
// console.log('person5');
// *************************************************************
// Async and Await

// console.log('person1');
// console.log('person2');

// const preMovie = async () => {
//   const bringsTicket = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('ticket');
//     }, 3000);
//   });
//   const getpopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
//   const getButter = new Promise((resolve, reject) => resolve(`butter`));
//   const getdrink = new Promise((resolve, reject) => resolve('drink'));

//   let ticket = await bringsTicket;
//   console.log(`got ${ticket}`);
//   console.log('husband: we should go in');
//   console.log('wife: i am hungry');

//   let popcorn = await getpopcorn;
//   console.log(`got ${popcorn}`);
//   console.log('husband: we should go in');
//   console.log('wife:i need butter on popcorn');

//   let butter = await getButter;
//   console.log(`got ${butter}`);

//   let drink = await getdrink;
//   console.log(`got ${drink}`);

//   return ticket;
// };

// preMovie().then((m) => console.log(`person 3 ${m}`));

// console.log('person4');
// console.log('person5');

// **************************************************************

// Promise All

console.log('person1');
console.log('person2');

const preMovie = async () => {
  const bringsTicket = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ticket');
    }, 3000);
  });
  const getpopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
  const getCandy = new Promise((resolve, reject) => resolve(`candy`));
  const getCoke = new Promise((resolve, reject) => resolve('coke'));

  let ticket = await bringsTicket;
  let [popcorn, candy, coke] = await Promise.all([
    getpopcorn,
    getCandy,
    getCoke,
  ]);
  console.log(`${popcorn} ${candy} ${coke}`);
  return ticket;
};
preMovie().then((m) => console.log(`person 3 ${m}`));

console.log('person4');
console.log('person5');
