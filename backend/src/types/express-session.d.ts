declare module 'express-session' {
  interface SessionData {
    passport?: {
      user?: any;
    };
  }
}

declare global {
  namespace Express {
    interface User {
      id?: string;
      _id?: any;
      email?: string;
      name?: string;
      profilePicture?: string;
      googleId?: string;
    }
  }
}

export {};
