// seed code for reviews & users
const faker = require('faker');
const db = require('./index.js');
const Reviews = require('./Reviews.js');
const Users = require('./Users.js');

const sampleUsers = [];
const sampleReviews = [];

const categories = ['Responsive host', 'Great location', 'Helpful host', 'Comfortable beds', 'Easy check-in', 'Great views', 'A quiet neighborhood', 'Central location', 'Thoughtful touches', 'Friendly host', 'Great restaurants'];

for (let i = 0; i < 100; i += 1) {
  const listingId = 30506100 + i;
  const allReviews = [];

  const numberReviews = Math.floor(Math.random() * 50);

  for (let k = 0; k < numberReviews; k += 1) {
    const listingCategory = categories[Math.floor(Math.random() * 11)];
    const userId = 2000 + k;
    allReviews.push({
      user_id: userId,
      body: faker.lorem.paragraph(),
      entry_date: faker.date.past(),
      category: listingCategory,
    });
  }

  sampleReviews.push({

    listing_id: listingId,
    all_reviews: allReviews,
    review_ratings: {
      number_reviews: faker.random.number({ min: 3, max: 5 }),
      cleanliness_avg: faker.random.number({ min: 3, max: 5 }),
      communication_avg: faker.random.number({ min: 3, max: 5 }),
      checkIn_avg: faker.random.number({ min: 3, max: 5 }),
      accuracy_avg: faker.random.number({ min: 3, max: 5 }),
      lcoation_avg: faker.random.number({ min: 3, max: 5 }),
      value_avg: faker.random.number({ min: 3, max: 5 }),
    },
  });
}

for (let i = 0; i < 100; i += 1) {
  const userId = 2000 + i;

  sampleUsers.push({
    user_id: userId,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    pictureUrl: faker.image.imageUrl(),
    password: faker.internet.password(),
  });
}

const insertSampleReviews = () => Reviews.create(sampleReviews);
const insertSampleUsers = () => Users.create(sampleUsers);

console.table(sampleReviews[0])
console.table(sampleUsers)

Promise.all([insertSampleReviews(), insertSampleUsers()])
  .then(() => {
    db.close();
  })
  .catch();
