import "@/styles/globals.css";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
        <motion.div
          className="slide-in z-[2]"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div
          className="slide-out z-[2]"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
