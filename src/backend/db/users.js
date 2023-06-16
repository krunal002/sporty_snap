import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Kedar",
    lastName: "Jadhav",
    username: "kedarj20",
    password: "kedarjadhav",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Rahul",
    lastName: "Sharma",
    username: "rahuls20",
    password: "rahulsharma",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Gunjan",
    lastName: "Nikhare",
    username: "gunjann20",
    password: "gunjannikhare",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
