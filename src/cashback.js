const cashback = {
    regular: {
        bound: 1000,
        precent: 1,
    },
    silver: {
        bound: 10000,
        precent: 2,
    },
    gold: {
        bound: 100000,
        precent: 5,
    },
};
//amount сумма покупок
export default function calculateCashback(amount) {
    if (amount >= cashback.gold.bound) {
        return Math.ceil(amount * cashback.gold.precent / 100);
    }
    if (amount >= cashback.silver.bound) {
        return Math.ceil(amount * cashback.silver.precent / 100);
    }
    if (amount >= cashback.regular.bound) {
        return Math.ceil(amount * cashback.regular.precent / 100);
    }
    return 0;
}