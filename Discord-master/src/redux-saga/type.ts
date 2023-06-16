
  
  // export interface AppState {
  //   isLoggedIn: boolean;
  //   username: string;
  //   password:string;
  //   repass:string;
  //   email:string;
  // }
  interface SignInState {
    userInfo: any;
  }
  
  export interface AppState {
    signIn: SignInState;
  }