import GameSavingLoader from '../gameSavingLoader';


test('Должен возвращать строку для создания объекта', async () => {
  const data = await GameSavingLoader.load();
  expect(data).toEqual({ "created": 1546300800, "id": 9, "userInfo": { "id": 1, "name": "Hitman", "level": 10, "points": 2000 } });
});

test('Проверка ошибок', async () => {
  expect.assertions(0);
  try {
    const data = await GameSavingLoader.load();
  } catch (e) {
    expect(e).toBe('Ошибка');
  }
});