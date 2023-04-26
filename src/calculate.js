// function calculateTotal(purchases) {
//     let result = 0;
//     for (let i = 0; i < purchases.length; i++) {
//        result += purchases[i].count * purchases[i].price;
//     }
//     return result;
// }

// module.exports = {
//     calculateTotal
// }
// второй вариант экспорт и импорт
// export function calculateTotal(purchases) {
//     let result = 0;
//     for (let i = 0; i < purchases.length; i++) {
//        result += purchases[i].count * purchases[i].price;
//     }
//     return result;
// }
// упрощаем функцимю
export default function calculateTotal(purchases, applyDiscount) {
  const sum = purchases.reduce((total, item) => total + (item.count * item.price), 0);

  if (applyDiscount) {
    return sum * 0.891;
  }
  return sum;
}
