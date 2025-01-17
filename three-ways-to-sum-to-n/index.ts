// 1. Iterative Approach
/**
 * Explanation:
 * This function uses a simple loop to iterate from 1 to n, adding each number to the sum.
 * Complexity: O(n) - Linear time complexity, as it iterates through all numbers from 1 to n.
 * @param n
 * @returns
 */
function sum_to_n_a(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// 2. Mathematical Formula
/**
 * Explanation:
 * This function uses the mathematical formula for the sum of the first n natural numbers: ( \frac{n(n + 1)}{2} ).
 * Complexity: O(1) - Constant time complexity, as it performs a fixed number of operations regardless of n.
 *
 * @param n
 * @returns
 */
function sum_to_n_b(n: number): number {
  return (n * (n + 1)) / 2;
}

// 3. Recursive Approach
/**
 * Explanation:
 * This function uses recursion to sum the numbers from n down to 1.
 * Complexity: O(n) - Linear time complexity, as it makes n recursive calls.
 *
 * @param n
 * @returns
 */
function sum_to_n_c(n: number): number {
  if (n <= 1) {
    return n;
  }
  return n + sum_to_n_c(n - 1);
}

console.log("sum_to_n_a", sum_to_n_a(5));
console.log("sum_to_n_b", sum_to_n_b(5));
console.log("sum_to_n_c", sum_to_n_c(5));
