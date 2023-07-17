export type BottomTabParamList = {
    Home: undefined;
    Messages: undefined;
    Profile: undefined;
    Calendar:undefined;
  };

export type ProfileStackParamList={
  ProfileHome:undefined,
  Family:undefined
}

export type AppPublicStackParamList = {
    Login: undefined;
    Signup: undefined;
    OTPVerify: undefined
};
export type ActionType<T>={
    type:string,
    payload:T
}
export type GlobalStore={
  loading:boolean,
  loggedIn:boolean,
  user?:User,
}

export type User={
  name:string,
  email:string,
  token:string,
}
export type LoginRquest={
  userName:string,
  password:string,
}