// import components

import { useLayoutEffect } from 'react';

import Header from './web/components/header/header';

import Footer from './web/components/footer/footer';

import HomePage from './web/components/main/components/homePage/homePage';

import NewsDetail from './web/components/main/components/news/newsDetail';

import NewsList from './web/components/main/components/news/newsList';

import Vacancies from './web/components/main/components/vacancies/vacancies';

import VacanciesDetail from './web/components/main/components/vacancies/vacanciesDetail';

import StaticPage from './web/components/main/components/staticPages/staticPage';

import BlogDetail from './web/components/main/components/blog/blogDetail';

import BlogList from './web/components/main/components/blog/blogList';

import BlogListAll from './web/components/main/components/blog/blogListAll';


import OpinionDetail from './web/components/main/components/author/opinionDetail';

import AuthorList from './web/components/main/components/author/authorList';

import ColumnList from './web/components/main/components/author/columnistList';

import CreditCalculator from './web/components/main/components/creditCalculator/creditCalculator';

import CalcWork from './web/components/main/components/calcWork/calcWork';

import CalcWorkNew from './web/components/main/components/calcWorkNew/calcWorkNew';

import Valyuta from './web/components/main/components/valyuta/valyuta';

// web end



// ------------------------------------------------------------------//



// mobile start
import MobileHeader from './mobile/components/header/header';
import MobileHome from './mobile/components/main/homePage/homePage';



// resize
import Resize from './web/components/hooks/resize';

// import router
import {
  Switch,
  Route,
  useLocation,
} from "react-router-dom";



function App() {

  let { pathname } = useLocation();


  let windowWith = window.innerWidth;

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <>
      {
        windowWith > 992 ?
          <div className="App" >
            <Resize />
            <Header />
            <Switch>
              {/* Home Page */}
              <Route path="/" exact>
                <HomePage />
              </Route>
              {
                pathname !== '/'
                && pathname.split('/')[1] !== 'jobs'
                && pathname.split('/')[1] !== 'category'
                && pathname.split('/')[1] !== 'reklam'
                && pathname.split('/')[1] !== 'blog'
                && pathname.split('/')[1] !== 'opinion'
                && pathname.split('/')[1] !== 'columnist'
                && pathname.split('/')[1] !== 'kredit-kalkulyatoru'
                && pathname.split('/')[1] !== 'emekhaqqi'
                && pathname.split('/')[1] !== 'emekhaqqi2019'
                && pathname.split('/')[1] !== 'valyuta'
                && (
                  <Route path="/*" >
                    <NewsDetail />
                  </Route>
                )
              }
              {/* list */}
              <Route path="/category/*" >
                <NewsList />
              </Route>
              {/* list */}



              {/* bloglist */}
              <Route path="/blog/category/*" >
                <BlogList />
              </Route>
              <Route path="/blog" >
                <BlogListAll />
              </Route>
              {/* bloglist */}



              {/* vacancies */}
              {
                pathname === '/jobs' && (
                  <Route path="/jobs" >
                    <Vacancies />
                  </Route>
                )
              }
              {
                pathname !== '/jobs' && (
                  <Route path="/jobs/*" >
                    <VacanciesDetail />
                  </Route>
                )
              }
              {/* vacancies */}

              {/* blog */}
              <Route path="/blog/*" >
                <BlogDetail />
              </Route>
              {/* blog end */}

              {/* staticpages */}
              <Route path="/reklam" >
                <StaticPage />
              </Route>
              {/* staticpages end */}

              {/* author */}
              <Route path="/opinion/*" >
                <OpinionDetail />
              </Route>
              <Route path="/opinion" >
                <AuthorList />
              </Route>
              <Route path="/columnist/*" >
                <ColumnList />
              </Route>
              {/* author end */}


              {/* credit calculator */}
              <Route path="/kredit-kalkulyatoru" >
                <CreditCalculator />
              </Route>

              {/* work calculator */}
              <Route path="/emekhaqqi" >
                <CalcWork />
              </Route>


              {/* work calculator new*/}
              <Route path="/emekhaqqi2019" >
                <CalcWorkNew />
              </Route>


              {/*valyuta*/}
              <Route path="/valyuta" >
                <Valyuta />
              </Route>

              {/* author end */}

            </Switch>
            <Footer />
          </div >
          :
          <div className="App" >
            <MobileHeader />
            <Switch>
              <Route path="/" exact>
                <MobileHome />
              </Route>
            </Switch>
          </div>
      }
    </>
  );
}

export default App;
