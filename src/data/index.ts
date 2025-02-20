import { User, Post, Comment } from "@/types";

export const users: User[] = [
  {
    "id": 1,
    "name": "John Doe",
    "username": "johndoe",
    "email": "john.doe@example.com",
    "address": {
      "street": "123 Main St",
      "suite": "Apt. 1",
      "city": "Anytown",
      "zipcode": "12345"
    },
    "phone": "123-456-7890",
    "website": "johndoe.com"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "username": "janesmith",
    "email": "jane.smith@example.com",
    "address": {
      "street": "456 Elm St",
      "suite": "Apt. 2",
      "city": "Othertown",
      "zipcode": "67890"
    },
    "phone": "098-765-4321",
    "website": "janesmith.com"
  },
  {
    "id": 3,
    "name": "Alice Johnson",
    "username": "alicej",
    "email": "alice.johnson@example.com",
    "address": {
      "street": "789 Oak St",
      "suite": "Apt. 3",
      "city": "Sometown",
      "zipcode": "54321"
    },
    "phone": "555-123-4567",
    "website": "alicej.com"
  },
  {
    "id": 4,
    "name": "Bob Brown",
    "username": "bobbrown",
    "email": "bob.brown@example.com",
    "address": {
      "street": "101 Pine St",
      "suite": "Apt. 4",
      "city": "Newtown",
      "zipcode": "98765"
    },
    "phone": "444-555-6667",
    "website": "bobbrown.com"
  },
  {
    "id": 5,
    "name": "Charlie Davis",
    "username": "charlied",
    "email": "charlie.davis@example.com",
    "address": {
      "street": "202 Maple St",
      "suite": "Apt. 5",
      "city": "Oldtown",
      "zipcode": "13579"
    },
    "phone": "777-888-9990",
    "website": "charlied.com"
  },
  {
    "id": 6,
    "name": "Diana Evans",
    "username": "dianaevans",
    "email": "diana.evans@example.com",
    "address": {
      "street": "303 Birch St",
      "suite": "Apt. 6",
      "city": "Midtown",
      "zipcode": "24680"
    },
    "phone": "111-222-3334",
    "website": "dianaevans.com"
  },
  {
    "id": 7,
    "name": "Ethan Foster",
    "username": "ethanf",
    "email": "ethan.foster@example.com",
    "address": {
      "street": "404 Cedar St",
      "suite": "Apt. 7",
      "city": "Uptown",
      "zipcode": "90123"
    },
    "phone": "555-666-7778",
    "website": "ethanf.com"
  },
  {
    "id": 8,
    "name": "Fiona Green",
    "username": "fionag",
    "email": "fiona.green@example.com",
    "address": {
      "street": "505 Redwood St",
      "suite": "Apt. 8",
      "city": "Downtown",
      "zipcode": "87654"
    },
    "phone": "987-654-3210",
    "website": "fionag.com"
  },
  {
    "id": 9,
    "name": "George Hill",
    "username": "georgeh",
    "email": "george.hill@example.com",
    "address": {
      "street": "606 Spruce St",
      "suite": "Apt. 9",
      "city": "Hometown",
      "zipcode": "34567"
    },
    "phone": "123-456-7890",
    "website": "georgeh.com"
  },
  {
    "id": 10,
    "name": "Hannah King",
    "username": "hannahk",
    "email": "hannah.king@example.com",
    "address": {
      "street": "707 Aspen St",
      "suite": "Apt. 10",
      "city": "Fowntown",
      "zipcode": "98765"
    },
    "phone": "098-765-4321",
    "website": "hannahk.com"
  },
  {
    "id": 11,
    "name": "Isaac Lee",
    "username": "isaacle",
    "email": "isaac.lee@example.com",
    "address": {
      "street": "808 Poplar St",
      "suite": "Apt. 11",
      "city": "Grove",
      "zipcode": "54321"
    },
    "phone": "555-123-4567",
    "website": "isaacle.com"
  },
  {
    "id": 12,
    "name": "Jack Miller",
    "username": "jackm",
    "email": "jack.miller@example.com",
    "address": {
      "street": "909 Walnut St",
      "suite": "Apt. 12",
      "city": "Bluff",
      "zipcode": "98765"
    },
    "phone": "444-555-6667",
    "website": "jackm.com"
  },
  {
    "id": 13,
    "name": "Katherine Nelson",
    "username": "katherinen",
    "email": "katherine.nelson@example.com",
    "address": {
      "street": "1010 Oak St",
      "suite": "Apt. 13",
      "city": "Haven",
      "zipcode": "13579"
    },
    "phone": "777-888-9990",
    "website": "katherinen.com"
  },
  {
    "id": 14,
    "name": "Liam O'Connor",
    "username": "liamo",
    "email": "liam.oconnor@example.com",
    "address": {
      "street": "1111 Pine St",
      "suite": "Apt. 14",
      "city": "Cove",
      "zipcode": "24680"
    },
    "phone": "111-222-3334",
    "website": "liamo.com"
  },
  {
    "id": 15,
    "name": "Mia Parker",
    "username": "miap",
    "email": "mia.parker@example.com",
    "address": {
      "street": "1212 Maple St",
      "suite": "Apt. 15",
      "city": "Grove",
      "zipcode": "90123"
    },
    "phone": "555-666-7778",
    "website": "miap.com"
  },
  {
    "id": 16,
    "name": "Nathan Quinn",
    "username": "nathanq",
    "email": "nathan.quinn@example.com",
    "address": {
      "street": "1313 Birch St",
      "suite": "Apt. 16",
      "city": "Bluff",
      "zipcode": "87654"
    },
    "phone": "987-654-3210",
    "website": "nathanq.com"
  },
  {
    "id": 17,
    "name": "Olivia Roberts",
    "username": "olivialr",
    "email": "olivia.roberts@example.com",
    "address": {
      "street": "1414 Cedar St",
      "suite": "Apt. 17",
      "city": "Haven",
      "zipcode": "34567"
    },
    "phone": "123-456-7890",
    "website": "olivialr.com"
  },
  {
    "id": 18,
    "name": "Peter Scott",
    "username": "peters",
    "email": "peter.scott@example.com",
    "address": {
      "street": "1515 Redwood St",
      "suite": "Apt. 18",
      "city": "Cove",
      "zipcode": "98765"
    },
    "phone": "098-765-4321",
    "website": "peters.com"
  },
  {
    "id": 19,
    "name": "Quinn Thomas",
    "username": "quinnt",
    "email": "quinn.thomas@example.com",
    "address": {
      "street": "1616 Spruce St",
      "suite": "Apt. 19",
      "city": "Grove",
      "zipcode": "54321"
    },
    "phone": "555-123-4567",
    "website": "quinnt.com"
  },
  {
    "id": 20,
    "name": "Rachel White",
    "username": "rachelw",
    "email": "rachel.white@example.com",
    "address": {
      "street": "1717 Aspen St",
      "suite": "Apt. 20",
      "city": "Bluff",
      "zipcode": "98765"
    },
    "phone": "444-555-6667",
    "website": "rachelw.com"
  }
];

export const posts: Post[] = [
  {
    "userId": 1,
    "id": 1,
    "title": "Post Title 1",
    "body": "This is the body of post 1."
  },
  {
    "userId": 2,
    "id": 2,
    "title": "Post Title 2",
    "body": "This is the body of post 2."
  },
  {
    "userId": 3,
    "id": 3,
    "title": "Post Title 3",
    "body": "This is the body of post 3."
  },
  {
    "userId": 4,
    "id": 4,
    "title": "Post Title 4",
    "body": "This is the body of post 4."
  },
  {
    "userId": 5,
    "id": 5,
    "title": "Post Title 5",
    "body": "This is the body of post 5."
  },
  {
    "userId": 6,
    "id": 6,
    "title": "Post Title 6",
    "body": "This is the body of post 6."
  },
  {
    "userId": 7,
    "id": 7,
    "title": "Post Title 7",
    "body": "This is the body of post 7."
  },
  {
    "userId": 8,
    "id": 8,
    "title": "Post Title 8",
    "body": "This is the body of post 8."
  },
  {
    "userId": 9,
    "id": 9,
    "title": "Post Title 9",
    "body": "This is the body of post 9."
  },
  {
    "userId": 10,
    "id": 10,
    "title": "Post Title 10",
    "body": "This is the body of post 10."
  },
  {
    "userId": 11,
    "id": 11,
    "title": "Post Title 11",
    "body": "This is the body of post 11."
  },
  {
    "userId": 12,
    "id": 12,
    "title": "Post Title 12",
    "body": "This is the body of post 12."
  },
  {
    "userId": 13,
    "id": 13,
    "title": "Post Title 13",
    "body": "This is the body of post 13."
  },
  {
    "userId": 14,
    "id": 14,
    "title": "Post Title 14",
    "body": "This is the body of post 14."
  },
  {
    "userId": 15,
    "id": 15,
    "title": "Post Title 15",
    "body": "This is the body of post 15."
  },
  {
    "userId": 16,
    "id": 16,
    "title": "Post Title 16",
    "body": "This is the body of post 16."
  },
  {
    "userId": 17,
    "id": 17,
    "title": "Post Title 17",
    "body": "This is the body of post 17."
  },
  {
    "userId": 18,
    "id": 18,
    "title": "Post Title 18",
    "body": "This is the body of post 18."
  },
  {
    "userId": 19,
    "id": 19,
    "title": "Post Title 19",
    "body": "This is the body of post 19."
  },
  {
    "userId": 20,
    "id": 20,
    "title": "Post Title 20",
    "body": "This is the body of post 20."
  }
];

export const comments: Comment[] = [
  {
    "postId": 1,
    "id": 1,
    "name": "Commenter 1",
    "email": "commenter1@example.com",
    "body": "This is a comment on post 1."
  },
  {
    "postId": 1,
    "id": 2,
    "name": "Commenter 2",
    "email": "commenter2@example.com",
    "body": "Another comment on post 1."
  },
  {
    "postId": 2,
    "id": 3,
    "name": "Commenter 3",
    "email": "commenter3@example.com",
    "body": "This is a comment on post 2."
  },
  {
    "postId": 2,
    "id": 4,
    "name": "Commenter 4",
    "email": "commenter4@example.com",
    "body": "Another comment on post 2."
  },
  {
    "postId": 3,
    "id": 5,
    "name": "Commenter 5",
    "email": "commenter5@example.com",
    "body": "This is a comment on post 3."
  },
  {
    "postId": 3,
    "id": 6,
    "name": "Commenter 6",
    "email": "commenter6@example.com",
    "body": "Another comment on post 3."
  },
  {
    "postId": 4,
    "id": 7,
    "name": "Commenter 7",
    "email": "commenter7@example.com",
    "body": "This is a comment on post 4."
  },
  {
    "postId": 4,
    "id": 8,
    "name": "Commenter 8",
    "email": "commenter8@example.com",
    "body": "Another comment on post 4."
  },
  {
    "postId": 5,
    "id": 9,
    "name": "Commenter 9",
    "email": "commenter9@example.com",
    "body": "This is a comment on post 5."
  },
  {
    "postId": 5,
    "id": 10,
    "name": "Commenter 10",
    "email": "commenter10@example.com",
    "body": "Another comment on post 5."
  },
  {
    "postId": 6,
    "id": 11,
    "name": "Commenter 11",
    "email": "commenter11@example.com",
    "body": "This is a comment on post 6."
  },
  {
    "postId": 6,
    "id": 12,
    "name": "Commenter 12",
    "email": "commenter12@example.com",
    "body": "Another comment on post 6."
  },
  {
    "postId": 7,
    "id": 13,
    "name": "Commenter 13",
    "email": "commenter13@example.com",
    "body": "This is a comment on post 7."
  },
  {
    "postId": 7,
    "id": 14,
    "name": "Commenter 14",
    "email": "commenter14@example.com",
    "body": "Another comment on post 7."
  },
  {
    "postId": 8,
    "id": 15,
    "name": "Commenter 15",
    "email": "commenter15@example.com",
    "body": "This is a comment on post 8."
  },
  {
    "postId": 8,
    "id": 16,
    "name": "Commenter 16",
    "email": "commenter16@example.com",
    "body": "Another comment on post 8."
  },
  {
    "postId": 9,
    "id": 17,
    "name": "Commenter 17",
    "email": "commenter17@example.com",
    "body": "This is a comment on post 9."
  },
  {
    "postId": 9,
    "id": 18,
    "name": "Commenter 18",
    "email": "commenter18@example.com",
    "body": "Another comment on post 9."
  },
  {
    "postId": 10,
    "id": 19,
    "name": "Commenter 19",
    "email": "commenter19@example.com",
    "body": "This is a comment on post 10."
  },
  {
    "postId": 10,
    "id": 20,
    "name": "Commenter 20",
    "email": "commenter20@example.com",
    "body": "Another comment on post 10."
  }
];

export const generateRandomPosts = (userId: number): Post[] => {
  const titles = [
    "Amazing Discovery",
    "Breaking News",
    "Tech Update",
    "Industry Insights",
    "Future Trends",
  ];
  
  const bodies = [
    "Exploring new possibilities in technology...",
    "Recent developments have shown promising results...",
    "Industry experts weigh in on the latest trends...",
    "A comprehensive analysis of market conditions...",
    "Breaking down the most important factors...",
  ];

  return Array.from({ length: 3 }, (_, index) => ({
    userId,
    id: Math.floor(Math.random() * 1000) + 100,
    title: titles[Math.floor(Math.random() * titles.length)],
    body: bodies[Math.floor(Math.random() * bodies.length)],
  }));
};
