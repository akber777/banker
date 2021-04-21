// import components

import Loadable from "react-loadable";

import {useLayoutEffect} from "react";

import Header from "./web/components/header/header";

import Footer from "./web/components/footer/footer";

// web end

// ------------------------------------------------------------------//

// mobile start
import MobileHeader from "./mobile/components/header/header";

// resize
import Resize from "./web/components/hooks/resize";

// import router
import {Switch, Route, useLocation} from "react-router-dom";

// jquery
import $ from "jquery";

const Loading = () => (
    <div className="loadableCom">
        <div class="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
);

const HomePage = Loadable({
    loader: () => import("./web/components/main/components/homePage/homePage"),
    loading: Loading,
});

const NewsDetail = Loadable({
    loader: () => import("./web/components/main/components/news/newsDetail"),
    loading: Loading,
});

const NewsAll = Loadable({
    loader: () => import("./web/components/main/components/news/newsAll"),
    loading: Loading,
});

const NewsList = Loadable({
    loader: () => import("./web/components/main/components/news/newsList"),
    loading: Loading,
});

const Vacancies = Loadable({
    loader: () => import("./web/components/main/components/vacancies/vacancies"),
    loading: Loading,
});

const VacanciesDetail = Loadable({
    loader: () =>
        import("./web/components/main/components/vacancies/vacanciesDetail"),
    loading: Loading,
});

const StaticPage = Loadable({
    loader: () =>
        import("./web/components/main/components/staticPages/staticPage"),
    loading: Loading,
});

const BlogDetail = Loadable({
    loader: () => import("./web/components/main/components/blog/blogDetail"),
    loading: Loading,
});

const BlogList = Loadable({
    loader: () => import("./web/components/main/components/blog/blogList"),
    loading: Loading,
});

const BlogListAll = Loadable({
    loader: () => import("./web/components/main/components/blog/blogListAll"),
    loading: Loading,
});

const OpinionDetail = Loadable({
    loader: () => import("./web/components/main/components/author/opinionDetail"),
    loading: Loading,
});

const AuthorList = Loadable({
    loader: () => import("./web/components/main/components/author/authorList"),
    loading: Loading,
});

const ColumnList = Loadable({
    loader: () => import("./web/components/main/components/author/columnistList"),
    loading: Loading,
});

const CreditCalculator = Loadable({
    loader: () =>
        import(
            "./web/components/main/components/creditCalculator/creditCalculator"
            ),
    loading: Loading,
});

const CalcWork = Loadable({
    loader: () => import("./web/components/main/components/calcWork/calcWork"),
    loading: Loading,
});

const CalcWorkNew = Loadable({
    loader: () =>
        import("./web/components/main/components/calcWorkNew/calcWorkNew"),
    loading: Loading,
});

const Valyuta = Loadable({
    loader: () => import("./web/components/main/components/valyuta/valyuta"),
    loading: Loading,
});

const MobileHome = Loadable({
    loader: () => import("./mobile/components/main/homePage/homePage"),
    loading: Loading,
});


const MobileVacancies = Loadable({
    loader: () => import("./mobile/components/vacancies/vacancies"),
    loading: Loading,
});


const MobileNewsPage = Loadable({
    loader: () => import("./mobile/components/main/newsPage/newsPage"),
    loading: Loading,
});

const MobileNewsList = Loadable({
    loader: () => import("./mobile/components/main/newsPage/newsList"),
    loading: Loading,
});

const MobileBlogList = Loadable({
    loader: () => import("./mobile/components/main/blog/blogList"),
    loading: Loading,
});

function App() {
    let {pathname} = useLocation();

    let windowWith = window.innerWidth;

    useLayoutEffect(() => {
        if (pathname.split("/")[1] !== "category" && pathname.split("/")[1] !== "xeber-lenti") {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return (
        <>
            {windowWith > 992 ? (
                <div className="App">
                    <Resize/>
                    <Header/>
                    <Switch>
                        {/* Home Page */}
                        <Route path="/" exact>
                            <HomePage/>
                        </Route>
                        {pathname !== "/" &&
                        pathname.split("/")[1] !== "jobs" &&
                        pathname.split("/")[1] !== "xeber-lenti" &&
                        pathname.split("/")[1] !== "category" &&
                        pathname.split("/")[1] !== "reklam" &&
                        pathname.split("/")[1] !== "blog" &&
                        pathname.split("/")[1] !== "opinion" &&
                        pathname.split("/")[1] !== "columnist" &&
                        pathname.split("/")[1] !== "kredit-kalkulyatoru" &&
                        pathname.split("/")[1] !== "emekhaqqi" &&
                        pathname.split("/")[1] !== "emekhaqqi2019" &&
                        pathname.split("/")[1] !== "valyuta" && (
                            <Route path="/*">
                                <NewsDetail/>
                            </Route>
                        )}
                        {/* list */}
                        <Route path="/category/*">
                            <NewsList/>
                        </Route>
                        {/* list */}

                        {/* bloglist */}
                        <Route path="/blog/category/*">
                            <BlogList/>
                        </Route>
                        <Route path="/blog/*">
                            <BlogDetail/>
                        </Route>
                        <Route path="/blog">
                            <BlogListAll/>
                        </Route>

                        {/* bloglist */}

                        {/* vacancies */}
                        {pathname === "/jobs" && (
                            <Route path="/jobs">
                                <Vacancies/>
                            </Route>
                        )}
                        {pathname !== "/jobs" && (
                            <Route path="/jobs/*">
                                <VacanciesDetail/>
                            </Route>
                        )}
                        {/* vacancies */}

                        {/* blog */}
                        <Route path="/blog/*">
                            <BlogDetail/>
                        </Route>
                        {/* blog end */}

                        {/* staticpages */}
                        <Route path="/reklam">
                            <StaticPage/>
                        </Route>
                        {/* staticpages end */}

                        {/* author */}
                        <Route path="/opinion/*">
                            <OpinionDetail/>
                        </Route>
                        <Route path="/opinion">
                            <AuthorList/>
                        </Route>
                        <Route path="/columnist/*">
                            <ColumnList/>
                        </Route>
                        {/* author end */}

                        {/* credit calculator */}
                        <Route path="/kredit-kalkulyatoru">
                            <CreditCalculator/>
                        </Route>

                        {/* work calculator */}
                        <Route path="/emekhaqqi">
                            <CalcWork/>
                        </Route>

                        {/* newsAll */}
                        <Route path="/xeber-lenti">
                            <NewsAll/>
                        </Route>
                        {/* work calculator new*/}
                        <Route path="/emekhaqqi2019">
                            <CalcWorkNew/>
                        </Route>

                        {/*valyuta*/}
                        <Route path="/valyuta">
                            <Valyuta/>
                        </Route>

                        {/* author end */}
                    </Switch>
                    <Footer/>
                </div>
            ) : (
                <div className="App">
                    <MobileHeader/>
                    <Switch>
                        <Route path="/" exact>
                            <MobileHome/>
                        </Route>
                        <Route path="/jobs">
                            <MobileVacancies/>
                        </Route>
                        <Route path="/blog">
                            <MobileBlogList/>
                        </Route>
                        <Route path="/category/:slug">
                            <MobileNewsList/>
                        </Route>
                        <Route path="/:slug">
                            <MobileNewsPage/>
                        </Route>

                    </Switch>
                </div>
            )}
        </>
    );
}

export default App;
