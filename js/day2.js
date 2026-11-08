// Исходный массив из 5 услуг
const services = [
  { title: 'Стрижка', price: 1500 },
  { title: 'Окрашивание', price: 4500 },
  { title: 'Укладка', price: 2000 },
  { title: 'Маникюр', price: 1200 },
  { title: 'Спа-уход', price: 3000 }
];


const serviceList = services.map(service => `${service.title}: ${service.price} руб.`);
console.log('--- Список всех услуг ---');
console.log(serviceList.join('\n')); 


const expensiveServices = services.filter(service => service.price > 2000);
console.log('\n--- Услуги дороже 2000 руб. ---');
console.table(expensiveServices);



const totalSum = services.reduce((accumulator, currentService) => {
  return accumulator + currentService.price;
}, 0); // 0 - это начальное значение аккумулятора
console.log('\n--- Общая сумма всех услуг ---');
console.log(`${totalSum} руб.`)

const expensiveSum = services
  .filter(service => service.price > 2000)
  .reduce((sum, service) => sum + service.price, 0);

console.log(`\nСумма только дорогих услуг: ${expensiveSum} руб.`);