export const mockData = {
  logonData: {
    profile: "nathan3@cmail.com",
    password: "Password@1"
  },
  authResponse: {
    status: true,
    message: "you have successfully logged on",
    data: {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjMsInVzZXJUeXBlIjpbImF1dGhvciJdLCJpYXQiOjE1OTA2MTY1NjUsImV4cCI6MTU5MDY0NTM2NX0.7PP-WkQ43E2-AVqrQ3vxpoqR8ajLW9QLDrQwvVKg-Pc"
    }
  },
  user: {
    id: 3,
    userType: "author",
    firstName: "Nathan",
    lastName: "Loveless",
    displayName: "nathan3",
    email: "nathan3@cmail.com",
    country: "USA",
    city: "Northfield",
    state: "VT",
    createdAt: "2020-05-13T02:13:47.032Z"
  },

  contentLibrary: [
    {
      title: "my new note",
      content_url:
        "https://res.cloudinary.com/dzmxxuygs/image/upload/v1589941603/lz1phux77ijqrul87y9q.pdf",
      created_at: "2020-05-20T02:26:44.152Z",
      last_updated: "2020-05-20T02:26:44.152Z"
    },
    {
      title: "Mashed Potatoes",
      content_url:
        "https://res.cloudinary.com/dzmxxuygs/image/upload/v1589941862/akc2803di4rcrtou4syf.pdf",
      created_at: "2020-05-20T02:31:03.180Z",
      last_updated: "2020-05-20T02:31:03.180Z"
    }
  ],
  authorContent: [],
  userAccounts: []
};
