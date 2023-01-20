//5!                    big problem
// 5 * 4!               smaller problem
// 5 * 4 * 3!           smaller problem
// 5 * 4 * 3 * 2!       smaller problem
// 5 * 4 * 3 * 2 * 1!   smaller problem
// 5 * 4 * 3 * 2 * 1    simplest version of the problem

// recursive function split the problem into smaller problems of the same type until the problem be equal to base case (simplest version of the problem that we have an answer for it).
function factoriel(num) {
    if (num === 1) {
        return 1
    } else {
        return num * factoriel(num-1)
    }
}

console.log('5! =',factoriel(5));


/* ------------------ second example power(m, n) ------------------ */
//2^3           big problem
//2 * 2^2       smaller problem
//2 * 2 * 2^1   smaller problem
//2 * 2 * 2     simpletst version

function power (m, n) {
    if (n === 1) {
        return m
    } else {
        return m * power(m, n - 1);
    }   
}

console.log('2^3 =', power(2, 3));