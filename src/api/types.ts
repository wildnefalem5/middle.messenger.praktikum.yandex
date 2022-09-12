export interface RequestLoginData {
  login: string;
  password: string;
}

export interface RequestChatData {
  title: string;
}

export interface RequestChatUserData {
  users: number[];
  chatId: number;
}

export interface RequestUserAvatarData {
  avatar: FormData;
}

export interface RequestUserPasswordData {
  oldPassword: string;
  newPassword: string;
}

export interface RequestUserData {
  login: string;
  email: string;
  first_name: string;
  second_name: string;
  display_name?: string;
  phone: string | number;
  avatar: string;
}
