// Solution-1
const formatValue = (value: string | number | boolean): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (typeof value === "number") {
    return value * 10;
  }

  if (typeof value === "boolean") {
    return !value;
  }

  return value;
};

// Solution-2
const getLength = (value: string | number[]): string => {
  if (typeof value === "string") {
    return value.length.toString();
  }

  if (Array.isArray(value)) {
    return value.length.toString();
  }

  return value;
};

// Solution-3
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Solution-4
type Item = {
  title: string;
  rating: number;
};

const filterByRating = (items: Item[]): Item[] => {
  return items.filter(item => item.rating >= 4);
};

// Solution-5
type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter(user => {
    // Type checking
    if (typeof user.isActive !== "boolean") {
      return false;
    }

    return user.isActive === true;
  });
};

// Solution-6
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): string => {
  const availability = book.isAvailable ? "Yes" : "No";
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
};

// Solution-7
const getUniqueValues = (
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] => {
  const result: (string | number)[] = [];

  // Add items from arr1
  for (let i = 0; i < arr1.length; i++) {
    const value = arr1[i];

    // Check duplicates
    let exists = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === value) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result.push(value);
    }
  }

  // Add items from arr2
  for (let i = 0; i < arr2.length; i++) {
    const value = arr2[i];

    // Check duplicates
    let exists = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === value) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result.push(value);
    }
  }

  return result;
};

// Solution-8
interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number; // optional (0–100)
}

const calculateTotalPrice = (products: Product[]): number => {
  if (products.length === 0) {
    return 0;
  }

  return products
    .map(product => {
      const basePrice = product.price * product.quantity;

      if (typeof product.discount === "number") {
        const discountAmount = (basePrice * product.discount) / 100;
        return basePrice - discountAmount;
      }

      return basePrice;
    })
    .reduce((total, current) => total + current, 0);
};
