import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    bio: "Adventurer 🌍 | Nature Lover 🌿 | Coffee Addict ☕️ | Cat Mom 🐾 | Dreamer ✨",
    userImage:
      "https://media.istockphoto.com/id/610664694/photo/isolated-athlete-runner.jpg?s=612x612&w=0&k=20&c=c6Yks7L_0V-UZCpJPn-9ZkDhX7vTPHADrcZvg6OTtKU=",
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [2, 3, 4],
  },
  {
    _id: uuid(),
    bio: "Adventurer 🌍 | Nature Lover 🌿 | Coffee Addict ☕️ | Cat Mom 🐾 | Dreamer ✨",
    userImage:
      "https://www.planetsport.com/image-library/square/1200/k/kylian-mbappe-psg-france-3-april-2022.jpg",
    firstName: "Kedar",
    lastName: "Jadhav",
    username: "kedarj20",
    password: "kedarjadhav",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    bio: "Adventurer 🌍 | Nature Lover 🌿 | Coffee Addict ☕️ | Cat Mom 🐾 | Dreamer ✨",
    userImage:
      "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BvcnRzJTIwcGxheWVyfGVufDB8fDB8fHww&w=1000&q=80",
    firstName: "Rahul",
    lastName: "Sharma",
    username: "rahuls20",
    password: "rahulsharma",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    bio: "Adventurer 🌍 | Nature Lover 🌿 | Coffee Addict ☕️ | Cat Mom 🐾 | Dreamer ✨",
    userImage:
      "https://img.freepik.com/premium-photo/profile-view-beautiful-athletic-girl-exercising-fitness-concept_2221-2275.jpg",
    firstName: "Gunjan",
    lastName: "Nikhare",
    username: "gunjann20",
    password: "gunjannikhare",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    bio: "Adventurer 🌍 | Nature Lover 🌿 | Coffee Addict ☕️ | Cat Mom 🐾 | Dreamer ✨",
    userImage:
      "https://cdn.dribbble.com/users/2813138/screenshots/5594486/media/e84dfbfcd859e7c5ec6c92d0861e64a2.jpg?compress=1&resize=400x300&vertical=center",
    firstName: "Peter",
    lastName: "Parker",
    username: "spidy_003",
    password: "spiderman",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
