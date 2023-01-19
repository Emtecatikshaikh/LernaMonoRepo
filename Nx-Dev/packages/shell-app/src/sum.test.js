import sum from './sum';

it("When a & b is number",() => {
    const result = sum(1,2);

    expect(result).toBe(3);
})

it("When a & b is string",() => {
    const result = sum ("1","2");

    expect(result).toBe(3);
})