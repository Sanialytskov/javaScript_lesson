it('should withdraw money if balance is sufficient', () => {
    const clients = ['Ann', 'John', 'User'];
    const balances = [1400, 87, -6];
    const result = withdraw(clients, balances, 'John', 50);
    expect(result).toBe(37);
    expect(balances).toEqual([1400, 37, -6]); // Проверяем, что баланс обновился
});

it('should return -1 if balance is insufficient', () => {
    const clients = ['Ann', 'John', 'User'];
    const balances = [1400, 87, -6];
    const result = withdraw(clients, balances, 'User', 10);
    expect(result).toBe(-1);
    expect(balances).toEqual([1400, 87, -6]); // Баланс должен остаться неизменным
});

it('should return -1 if client does not exist', () => {
    const clients = ['Ann', 'John', 'User'];
    const balances = [1400, 87, -6];
    const result = withdraw(clients, balances, 'Mike', 50);
    expect(result).toBe(-1);
    expect(balances).toEqual([1400, 87, -6]); // Баланс не должен меняться
});