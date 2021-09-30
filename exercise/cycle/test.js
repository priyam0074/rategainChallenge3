const cycle = require('./index');

test('cycle function is defined', () => {
  expect(cycle).toBeDefined();
});



test('Calling cycle with index 3 print previous values', () => {
  const cycles =  cycle(3,[1,2,3,4,5,6]);

  expect(cycles.prev()).toEqual(3);
  expect(cycles.prev()).toEqual(2);
  expect(cycles.prev()).toEqual(1);
  expect(cycles.prev()).toEqual(6);
  expect(cycles.prev()).toEqual(5);
  expect(cycles.prev()).toEqual(4);
});

test('Calling cycle with index 2 print next values', () => {
    const cycles =  cycle(2,[1,2,3,4,5,6]);
  
    expect(cycles.next()).toEqual(4);
    expect(cycles.next()).toEqual(5);
    expect(cycles.next()).toEqual(6);
    expect(cycles.next()).toEqual(1);
    expect(cycles.next()).toEqual(2);
    expect(cycles.next()).toEqual(3);
  });

  test('Calling cycle with index 2 print previous and next values', () => {
    const cycles =  cycle(2,[1,2,3,4,5,6]);
  
    expect(cycles.next()).toEqual(4);
    expect(cycles.next()).toEqual(5);
    expect(cycles.next()).toEqual(6);
    expect(cycles.prev()).toEqual(5);
    expect(cycles.prev()).toEqual(4);
    expect(cycles.prev()).toEqual(3);
  });


beforeEach(() => {
    const cycles =  cycle(3,[1,2,3,4,5,6]);
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterEach(() => {
  console.log.mockRestore();
});