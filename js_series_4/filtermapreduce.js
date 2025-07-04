const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (nums) => nums > 4 )
const newNums = myNums.filter( (nums) => {
    return nums > 4
} )
// console.log(newNums)

const booksArray = [
  {
    book: "The Great Gatsby",
    publishedYear: 1925,
    editionYear: 2020,
    genre: "Classic"
  },
  {
    book: "To Kill a Mockingbird",
    publishedYear: 1960,
    editionYear: 2015,
    genre: "History"
  },
  {
    book: "1984",
    publishedYear: 1949,
    editionYear: 2019,
    genre: "Science"
  },
  {
    book: "The Alchemist",
    publishedYear: 1988,
    editionYear: 2021,
    genre: "Classic"
  },
  {
    book: "A Brief History of Time",
    publishedYear: 1988,
    editionYear: 2001,
    genre: "Science"
  },
  {
    book: "Sapiens: A Brief History of Humankind",
    publishedYear: 2011,
    editionYear: 2015,
    genre: "History"
  },
  {
    book: "Pride and Prejudice",
    publishedYear: 1813,
    editionYear: 2020,
    genre: "Classic"
  },
  {
    book: "The Selfish Gene",
    publishedYear: 1976,
    editionYear: 2006,
    genre: "Science"
  }
];

let userBooks = booksArray.filter( (bk) => bk.genre === "History")
userBooks = booksArray.filter( (bk) => bk.publishedYear > 2000)

// console.log(userBooks);

// MAPPPPSSSS

const myNumers = [1,2,3,4,5]
const newNumers = myNumers
                    .map( (n) => n+10 )
                    .map( (n) => n*5 )
                    .filter( (n) => n >= 65 )

// console.log(newNumers);

// reduce method

const myTotal = [5,6,7,8,9,10]

const newTotal = myTotal.reduce( (acc, curval) => acc+curval, 0 )

console.log(newTotal)


const shoppingCart = [
    {
        name: "py course",
        price: 999
    },
    {
        name: "c++ course",
        price: 9999
    },
    {
        name: "js course",
        price: 999
    }
]

const totalBill = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(totalBill);
