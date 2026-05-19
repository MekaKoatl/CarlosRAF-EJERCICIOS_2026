function createconsarray(num) {
  return Array.from({ length: 10 }, (_, i) => num + i + 1);
}

module.exports = { createconsarray };