export type AppStackParamList = {
  Login: undefined;
  Signup: undefined;
  ForgetPassword: undefined;
  ResetPassword: { data: any };
  OTPVerify: { data: any };
  Dashboard: undefined
};

export type BottomTabParamList = {
    Home: undefined;
    Messages: undefined;
    Profile: undefined;
    Calendar:undefined;
  };

export type ProfileStackParamList={
  ProfileHome:undefined,
  Family:undefined,
  ChangePassword:undefined,
}

export type AppPublicStackParamList = {
    Login: undefined;
    Signup: undefined;
    OTPVerify: { data: any },
    ForgetPassword:undefined,
    ResetPassword:{ data: ChangePasswordForm },
};
export type ActionType<T>={
    type:string,
    payload:T
}
export type ModelType={
  type?:'info'|'error'|'warning',
  messages:string[],
  modelContent?:JSX.Element
}
export type GlobalStore={
  loading:boolean,
  loggedIn:boolean,
  user?:User,
  tempToken?:string,
  model:ModelType
}

export type User={
  name:string,
  email:string,
  token:string,
  refreshToken:string,
}
export type LoginRquest={
  email:string,
  password:string,
}

export type SignUpForm = {
  name: string
  email: string,
  emailOtp:string,
  password: string
  confirmPassword: string,
}
export type SignInForm = {
  email: string,
  password: string
}
export type ChangePasswordForm = {
  tempPassword?: string,
  oldPassword: string,
  newPassword: string
  confirmPassword: string,
  email?:string
}

export type FamilyMember={
  id?:string|number,
  fullName:string,
  relation:string | number,
  email:string,
  dob:Date,
  gender:'Male'|'Female',
  updatedDate:Date,
}
export interface Option {
  id: string | number; // The unique value to identify the option (mandatory)
  name: string; // The label to display in the dropdown (mandatory)
  [key: string]: any; // Index signature to allow any additional properties
}