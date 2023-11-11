import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'

import { HashRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter'
import Loader from './layouts/loader/Loader';
import "./assets/scss/style.scss";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <HashRouter>

        <AppRouter />

      </HashRouter>
    </Suspense>
  </React.StrictMode>,
)
