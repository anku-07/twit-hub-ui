export const endpoints = {
  auth: {
    register: 'auth/register',
    login: 'auth/login',
  },

  profile: {
    userProfile: 'profile/me',
    editProfile: 'profile/edit-profile',
    getUserProfile: 'profile',
  },

  userPost: {
    getAllPosts: 'posts',
    createPost: '/posts/create',
    myPosts: 'posts/my-posts',
    editPost: 'posts',
    likePost: 'posts',
  },
};
