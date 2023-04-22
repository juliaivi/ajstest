import loadUser from "../loadUser";//функция
import { httpGet } from "../http";//заглушка
jest.mock('../http');// говорим что этот файл должен стать моком
//сброс всех моков, значений
beforeEach(() => {
    jest.resetAllMocks();
});
//перезапускаем
test('should call loadUser once', () => {
    httpGet.mockReturnValue(JSON.stringify({}));//в строковом эквиваленте должен вернуть объект
    loadUser(1);// id
    expect(httpGet).toBeCalledWith('http://server:8080/users/1');
});