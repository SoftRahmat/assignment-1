1. Interface এবং Type এর পার্থক্য:

    Interface:

    - অবজেক্ট বা ক্লাসের structure ডিফাইন করতে ব্যবহৃত হয়।
    - Declaration merging সমর্থন করে (একই interface বারবার declare করলে merge হয়)।
    - ক্লাসের implements এর সাথে ব্যবহার করা স্বাভাবিক।

    Type:

    - primitive, union, intersection, tuple, mapped type সহ যেকোনো টাইপ তৈরি করতে পারে।

    - Declaration merging সমর্থন করে না।

    - Complex টাইপ কম্পোজিশনে সুবিধাজনক।

2. keyof কী জন্য:

    keyof T টাইপটি T অবজেক্টের সব কী-এর ইউনিয়ন টাইপ দেয় (literal union)। এটা টাইপ-সেফ অপারেশন যেমন property access বা mapped types-এ কাজে আসে।

    উদাহরণ:

    type User = {
      id: number;
      name: string;
      email?: string;
    };

    type UserKeys = keyof User; // "id" | "name" | "email"

    function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
      return obj[key];
    }

    const user: User = { id: 1, name: "Rahmat" };
    const nameValue = getProp(u, "name"); // টাইপ: string
    console.log(nameValue)

4. enum কী কাজে লাগে:

    enum ব্যবহার করলে নামবদ্ধ কনস্ট্যান্ট গ্রুপ করা সহজ হয় — কোড পড়তে সুবিধা এবং ডিবাগ করতে সহজ। TypeScript-এ দুই ধরনের জনপ্রিয় enum: numeric এবং string enums।

    numeric enum:
    enum Status {
      New = 0,
      InProgress = 1,
      Done = 2
    }

    string enum:
    enum Direction {
      Up = "UP",
      Down = "DOWN",
      Left = "LEFT",
      Right = "RIGHT"
    }
