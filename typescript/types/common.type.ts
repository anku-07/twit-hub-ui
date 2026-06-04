export type userData = {
  _id?: string;
  role: {
    _id?: string;
    role?: string;
    roleDisplayName?: string;
  };
  first_name?: string;
  last_name?: string;
  fullName?: string;
  username?: string;
  phone?: string;
  email?: string;
  bio?: string;
  otp?: string;
  profile_image?: string;
  registerType?: string;
  socialAccount: [];
  createdAt?: string;
  updatedAt?: string;
  address?: string;
  education?: string;
  location?: string;
  about_title?: string;
  about_description?: string;
  cover_picture?: string;
};

export type userFormData = {
  name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
};

export type PostData = {
  _id: string;
  content: string;
  createdAt: string;
  author: {
    name: string;
    username: string;
  };
};

export {};
