import { compose, withHandlers } from 'recompose';
import { endpoints } from 'config';

const RedditApiHOC = () => WrappedComponent => compose(
  withHandlers({
    // тянем данные откуда-то
    // можно принимать аргументы
    fetchFromReddit: () => (body) => fetch(endpoints.getRedditUrl())
      .then((resp) => {
        // проводим какие-то операции над получаемыми данными, трансформируем
        const result = 1 + 3 + resp.five;
        // возвращаем результат
        return result;
      }),
  }),
)(WrappedComponent);

export default RedditApiHOC;
