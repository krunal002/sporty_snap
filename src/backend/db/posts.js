import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    img:"https://cdn.cdnparenting.com/articles/2018/03/522565846-H.webp",
    category:"football",
    content:
      "Count me in for a game of football! ⚽️ Let's lace up our boots and hit the field for some exciting matches. Tag me when you're organizing the next game, and I'll be there with full enthusiasm! 🙌🏼🏃🏻‍♂️ #FootballPassion #ReadyToPlay",
    likes: {
      likeCount: 110,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    userImage:"https://media.istockphoto.com/id/610664694/photo/isolated-athlete-runner.jpg?s=612x612&w=0&k=20&c=c6Yks7L_0V-UZCpJPn-9ZkDhX7vTPHADrcZvg6OTtKU=",

    createdAt: "2023-05-02",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "rahul_J44",
        text: "Keep going keeds!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "akshsingh8",
        text: "Awesome",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  {
    _id: uuid(),
    img:"https://img.freepik.com/premium-photo/group-indian-children-running_73899-1291.jpg",
    category:"outdoor",
    content:
      "Ready, set, run! Lace up your shoes, feel the wind in your face, and let the rhythm of your steps propel you forward. In this game of running, it's just you against your limits. Push yourself, find your stride, and embrace the exhilaration of the run. 🏃🏻‍♂️🏃🏻‍♂️🏃🏻‍♂️🔥 #RunGameStrong #FindYourStride #UnleashTheRunnerWithin",
    likes: {
      likeCount: 124,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rajat_j55",
    userImage:"https://static.vecteezy.com/system/resources/thumbnails/007/032/658/small/a-half-thai-indian-boy-play-secretly-behind-a-big-tree-in-a-park-while-learning-outside-of-school-free-photo.jpg",

    createdAt: "2023-05-13",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "jagga88",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  {
    _id: uuid(),
    img:"https://www.tennis.nl/media/jcqj1lkk/mf-nojk2021-3-dec-12-en-16-jaardsc01902.jpeg?width=2500&height=1097&rnd=133102128324230000",
    category:"tennis",
    content:
      "Game, set, match! 🎾 I'm always up for some intense tennis action. Let's rally, serve, and smash our way to a thrilling match. Tag me when you're planning the next tennis session, and I'll bring my A-game! 🙌🏼💪🏼 #TennisTime #ReadyToPlay",
    likes: {
      likeCount: 140,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    userImage: "https://media.istockphoto.com/id/497279633/photo/sending-a-fast-ball-down-the-pitch.jpg?s=612x612&w=0&k=20&c=M4tlLzQFYupKa8sylo0zdKPWrC5uZ23IaO2ZILwf1Pg=",
    
    comments: [
      {
        _id: uuid(),
        username: "meenu_arora",
        text: "Favorite game!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2023-05-04",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    img:"https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/10/11/Photos/Processed/nana-kKp--621x414@LiveMint.jpg",
    category:"hockey",
    content:
      "Stick in hand, ready to hit the ice! 🏒 Count me in for some hockey action. Let's lace up our skates, work on our slap shots, and create some unforgettable moments on the rink. Tag me when you're organizing the next game, and I'll be there to join in the fun! 🙌🏒 #HockeyLove #ReadyToPlay",
    likes: {
      likeCount: 98,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rahulsharma",
    userImage: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BvcnRzJTIwcGxheWVyfGVufDB8fDB8fHww&w=1000&q=80",

    createdAt: "2023-05-05",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  {
    _id: uuid(),
    img:"https://t3.ftcdn.net/jpg/01/40/69/18/360_F_140691867_CGvtweOnL2OidImd9s8NbpLPDPN7exLh.jpg",
    category:"cricket",
    content:
      "Cricket season is here! 🏏 I'm all set to bat, bowl, and field in some thrilling matches. Let's gather the team, play some cover drives, unleash spinners, and celebrate those wickets! Tag me when you're planning the next cricket game, and I'll be there to showcase my skills on the pitch! 🙌🏏 #CricketPassion #ReadyToPlay",
    likes: {
      likeCount: 56,
      likedBy: [],
      dislikedBy: [],
    },
    username: "kedarj20",
    userImage: "https://www.planetsport.com/image-library/square/1200/k/kylian-mbappe-psg-france-3-april-2022.jpg",

    createdAt: "2023-05-06",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "rastogi23",
        text: "Enjoy the game",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "jeena_rane",
        text: "Nice!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  {
    _id: uuid(),
    img:"https://sa.kapamilya.com/absnews/abscbnnews/media/2019/life/10/17/20191017-swimming-md.jpg",
    category:"swim",
    content:
      "Dive into the deep blue, embrace the serenity of the water. Let the waves carry you, and feel the freedom of swimming. Swim like there's no tomorrow, and let the water be your sanctuary. 🌊💦 #SwimLife #WaterEnthusiast #EmbraceTheBlue",
    likes: {
      likeCount: 152,
      likedBy: [],
      dislikedBy: [],
    },
    username: "kedarj20",
    userImage: "https://www.planetsport.com/image-library/square/1200/k/kylian-mbappe-psg-france-3-april-2022.jpg",

    createdAt: "2023-05-07",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "adarshbalika",
        text: "Swim deep",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  {
    _id: uuid(),
    img:"https://bronchiectasis.com.au/wp-content/uploads/2015/09/Exercise-team.jpg",
    category:"football",
    content:
      "Count me in for a game of football! ⚽️ Let's lace up our boots and hit the field for some exciting matches. Tag me when you're organizing the next game, and I'll be there with full enthusiasm! 🙌🏼🏃🏻‍♂️ #FootballPassion #ReadyToPlay",
    likes: {
      likeCount: 170,
      likedBy: [],
      dislikedBy: [],
    },
    username: "gunjann20",
    userImage:"https://img.freepik.com/premium-photo/profile-view-beautiful-athletic-girl-exercising-fitness-concept_2221-2275.jpg",

    createdAt: "2023-05-08",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Setting ground on fire",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Mindblowing!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  {
    _id: uuid(),
    img:"https://smartcdn.gprod.postmedia.digital/calgaryherald/wp-content/uploads/2019/03/aptopix-mud-day.jpg?quality=90&strip=all&w=400&sig=VPYmuTxtgVMB1j2yTLlavg",
    category:"outdoor",
    content:
      "Embrace the mess, unleash the fun! Playing in mud is where unforgettable memories are made. Let's dive in, get dirty, and enjoy every muddy moment to the fullest. Life's too short to stay clean all the time! 🌧️🌱💦 #MudPlay #DirtyAdventures #UnleashTheChildWithin",
    likes: {
      likeCount: 146,
      likedBy: [],
      dislikedBy: [],
    },
    username: "spidy_003",
    userImage: "https://cdn.dribbble.com/users/2813138/screenshots/5594486/media/e84dfbfcd859e7c5ec6c92d0861e64a2.jpg?compress=1&resize=400x300&vertical=center",
    
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Mudplay is dream",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "lovely007",
        text: "Love soil!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2023-05-09",
    updatedAt: formatDate(),
  },


  {
    _id: uuid(),
    img:"https://www.ahockeyworld.net/wp-content/uploads/ahw-1.jpg",
    category:"hockey",
    content:
      "Let's hit the turf and play some electrifying hockey! 🏑 I'm always up for the fast-paced action, intense stick skills, and epic team spirit that hockey brings. Count me in for the next game, and let's create some unforgettable moments on the field! 🙌🏑 #HockeyLove #ReadyToPlay",
    likes: {
      likeCount: 120,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    userImage: "https://media.istockphoto.com/id/497279633/photo/sending-a-fast-ball-down-the-pitch.jpg?s=612x612&w=0&k=20&c=M4tlLzQFYupKa8sylo0zdKPWrC5uZ23IaO2ZILwf1Pg=",
    
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting, Interesting, Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "beauty!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2023-05-15",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    img:"https://img.freepik.com/premium-photo/rural-indian-child-playing-cricket-ground_54391-914.jpg",
    category:"cricket",
    content:
      " I'm ready to showcase my batting, bowling, and fielding skills on the pitch. Count me in for an exciting game of cricket, and let's hit those boundaries, take stunning catches, and celebrate like champions! Tag me when you're organizing the next match, and I'll be there with full enthusiasm! 🙌🏏 #CricketPassion #ReadyToPlay",
    likes: {
      likeCount: 113,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rahulsharma",
    userImage: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BvcnRzJTIwcGxheWVyfGVufDB8fDB8fHww&w=1000&q=80",

    createdAt: "2023-05-11",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
