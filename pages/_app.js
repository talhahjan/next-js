import "../public/assets/css/bootstrap.css";
import "../public/assets/css/style.css";
import Layout from "../components/layout";
import { SessionProvider } from "next-auth/react";
import axios from "axios";
// axios.defaults.baseURL = process.env.LARAVEL_API_BASE_URI;
axios.defaults.baseURL = "http://localhost/l8ecom/";
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Conent-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  if (Component.getlayout)
    return Component.getlayout(
      <SessionProvider session={pageProps.session}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </SessionProvider>
    );
  else
    return (
      <>
        <SessionProvider session={pageProps.session}>
          <RecoilRoot>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RecoilRoot>
        </SessionProvider>
      </>
    );
}

export default MyApp;
