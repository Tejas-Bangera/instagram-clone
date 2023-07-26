import Header from "@/components/Header";
import { getProviders, signIn as signInProvider } from "next-auth/react";
import Head from "next/head";

// Browser
const signIn = ({ providers }) => {
  return (
    <>
      <Head>
        <title>SignIn | Instagram Clone</title>
      </Head>
      <Header />
      <div className="h-[700px] flex flex-col items-center justify-center">
        <div className="border p-5 flex flex-col items-center justify-center rounded-lg shadow-md">
          <img
            className="h-20 object-contain"
            src="https://links.papareact.com/ocw"
            alt="Brand logo"
          />
          {Object.values(providers).map((provider) => (
            <div
              className="mt-5 flex flex-col justify-center"
              key={provider.name}
            >
              <button
                className="flex p-3 border rounded-lg items-center justify-evenly active:shadow-inner"
                onClick={() =>
                  signInProvider(provider.id, {
                    callbackUrl: "/",
                  })
                }
              >
                <img
                  className="h-10 mr-2"
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  alt="Google logo"
                />
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// Middleware
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signIn;
