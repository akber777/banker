import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import Router
import { BrowserRouter } from "react-router-dom";

// tools
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./web/components/baseCss/_base.scss";
import "./web/components/baseCss/keyframes.css";
import "aos/dist/aos.css";

// recoil

import { RecoilRoot } from "recoil";

import { QueryClient, QueryClientProvider } from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ReactQueryDevtools initialIsOpen={false} />
          <App />
        </RecoilRoot>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
