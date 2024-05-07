function memoHashFibonacci(n) {
    const ht = { 0: 0, 1: 1 };
    if (n in ht) {
        return ht[n];
    }
    else {
        ht[n] = memoHashFibonacci(n - 1) + memoHashFibonacci(n - 2);
        return ht[n];
    }
}

console.log(memoHashFibonacci(8));