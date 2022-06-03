# Is it a Leap Year?

An app that says whether it is a leap year. Now with a free API!

Live [here](https://is-it-a-leap-year.brown.ee/).

## API Docs

### `GET /api`

| Query Parameter | Required? | Description      |
| --------------- | --------- | ---------------- |
| `year`          | Yes       | The target year. |

Example:

```
GET https://is-it-a-leap-year.brown.ee/api?year=2022
=> {"result":false} // 2022 is not a leap year
```
