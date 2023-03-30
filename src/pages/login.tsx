import { NextPageContext } from "next";
import { getProviders, signIn, getSession } from "next-auth/react";
import { Provider } from "next-auth/providers";
import { AiFillGithub } from "react-icons/ai";
import global from "../state/global";
import { useRouter } from "next/router";
import Loader from "@/components/Loader/Loader.component";
import { SignInProps } from "@/types/ComponentTypes/Authentication";

export default function SignIn(props: SignInProps) {
  const { providers } = props;
  const { loading } = global();
  const router = useRouter();

  const handleLogin = (provider: any) => {
    global.setState({ loading: true });
    signIn(provider.id);
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  return (
    <div className=" p-4 md:p-10">
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          {loading ? (
            <Loader />
          ) : (
            <button
              className="bg-neutral-900 p-4 flex items-center gap-2"
              onClick={() => handleLogin(provider)}
            >
              {provider.name === "GitHub" ? (
                <AiFillGithub className="text-2xl text-white" />
              ) : null}
              Sign in with {provider.name}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(ctx: any) {
  const providers = await getProviders();
  const {
    res: { end },
    res: { writeHead: redirect },
    req,
  } = ctx;
  const session = await getSession({ req });

  if (session) {
    redirect(302, {
      Location: "/",
    });
    end();
  }

  return {
    props: {
      session: session,
      providers: providers,
    },
  };
}
