import { Provider } from "next-auth/providers";

export interface SignInProps {
    providers: Record<string, Provider>;
    session: any;
  }