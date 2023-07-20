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
    OTPVerify: { data: any }
};
export type ActionType<T>={
    type:string,
    payload:T
}
export type ModelType={
  type?:'info'|'error'|'warning',
  messages:string[],
  modelContent?:React.ReactElement
}
export type GlobalStore={
  loading:boolean,
  loggedIn:boolean,
  user?:User,
  model:ModelType
}

export type User={
  name:string,
  email:string,
  token:string,
  refreshToken:string,
}
export type LoginRquest={
  userName:string,
  password:string,
}

export type SignUpForm = {
  name: string
  email: string,
  emailOtp:string,
  password: string
  confirmPassword: string,
}
