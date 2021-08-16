import { Provider } from "react-redux";
import { Provider as AuthProvider } from "next-auth/client";
import "tailwindcss/tailwind.css";
import { store } from "../app/store";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider {...pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  );
}

export default MyApp;
