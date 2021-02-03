# quotes-api

## Usage

```
GET https://cw-quotes.herokuapp.com/api/quotes/random

RESPONSE {
  "status": 200,
  "result": {
    "id":"jo89c9l10t5tvujf",
    "text": "All fixed set patterns are incapable of adaptability or pliability. The truth is outside of all fixed patterns.",
    "author": "Bruce Lee"
  }
}
```

## Quote interface

```ts
{
  id: string;       // id of the quote
  text: string;     // Textual content of the quote
  author: string;   // Name of the author or "Unknown"
}
```

## Endpoints

### GET `/api/quotes`

**Query params**
* `p`: page number. Every paged response will reply with 100 quotes at most

Example: `https://cw-quotes.herokuapp.com/api/quotes?p=16`

**Response:**
```js
{
  status: 200,      // Response status
  result: Quote[],  // Array of 100 quotes, or empty array if page exceeds the page count
  page: number;     // number of current page
  next: string;     // url to fetch the next page or null if next page doesn't exist
}
```

**NOTE:** without `p` query param endpoint will response with the first 100 quotes (first page)

---

### GET `/api/quotes/random`

Responds with random quote

**Response:**
```js
{
  status: 200,      // Response status
  result: Quote,    // Random quote
}
```

---

### GET `/api/quotes/:id`

Retrieves quote by id

**Response:**
```js
{
  status: 200,      // Response status
  result: Quote,    // Requested quote
}
```

---

### GET `/api/quotes/all`

**Response:**
```js
{
  status: 200,      // Response status
  result: Quote[],  // Array of all quotes in the database
}
```