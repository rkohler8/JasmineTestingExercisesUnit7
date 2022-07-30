
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(value = {
    amount: 200, 
    years: 2, 
    rate: 0.2}
  )).toEqual('10.18');
});


it("should return a result with 2 decimal places", function() {
  const value = {
    amount: 200, 
    years: 2, 
    rate: 0.2
  }
  expect(calculateMonthlyPayment(value).endsWith('.18')).toBe(true);
});

/// etc
