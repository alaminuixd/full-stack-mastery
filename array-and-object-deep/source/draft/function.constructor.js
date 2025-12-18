const operations = [
  {
    args: [10, 20],
    params: ['a', 'b'],
    body: 'console.log("a+b=", a+b)',
  },
  {
    args: [10, 20],
    params: ['a', 'b'],
    body: 'console.log("a+b=", a-b)',
  },
  {
    args: [10, 20],
    params: ['a', 'b'],
    body: 'console.log("a*b=", a*b)',
  },
  {
    args: [5],
    params: ['n'],
    body: `
        for (let i = 0; i < n; i++) {
        let line = '';
        for (let j = 0; j < n; j++) {
          j > 0 ? (line += '-*') : (line += '*');
        }
        console.log(line);
      }
    `,
  },
];
operations.forEach((operation) => {
  const fn = new Function(...operation.params, operation.body);
  console.log(fn);
  fn(...operation.args);
});

/* function box(n) {
  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j < n; j++) {
      j > 0 ? (line += '-*') : (line += '*');
    }
    console.log(line);
  }
}
box(5); */
