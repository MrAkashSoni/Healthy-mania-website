import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import './index.scss';

// Import custom components
import store from './store';
import translations from './constants/translations'
import { getAllCategory, getAllProducts } from './actions/productActions'
import Landing from './components/landing'


// Layouts
import Nutrients from './components/layouts/nutrients/main';


//Collection Pages
import Shop from "./components/collection/shop";

// Product Pages
import Product from "./components/products/product";

// Features
import Layout from './components/app'
import Cart from './components/cart'
import wishList from './components/wishlist'
import checkOut from './components/checkout'
import orderSuccess from './components/checkout/success-page'

// Extra Pages
import aboutUs from './components/pages/about-us'
import PageNotFound from './components/pages/404'
import lookbook from './components/pages/lookbook'
import Login from './components/pages/login'
import Register from './components/pages/register'
import Search from './components/pages/search'
import Collection from './components/pages/collection'
import ForgetPassword from './components/pages/forget-password'
import Contact from './components/pages/contact'
import Dashboard from './components/pages/dashboard'
import Faq from './components/pages/faq'

// Blog Pages
import RightSide from './components/blogs/right-sidebar'
import Details from './components/blogs/details'
import BlogPage from './components/blogs/blog-page'

// Theme Element
import ElementTitle from "./components/features/theme/element-title"
import ElementBanner from "./components/features/theme/element-banner";
import ElementSlider from "./components/features/theme/element-slider";
import ElementCategory from "./components/features/theme/element-category";
import ElementService from "./components/features/theme/element-service";
import ElementRatio from "./components/features/theme/element-ratio";

// Product Elements
import ElementProductBox from "./components/features/product/element-product-box"
import ElementProductSlider from "./components/features/product/element-product-slider"
import ElementProductNoSlider from "./components/features/product/element-product-no-slider"
import ElementMultipleSlider from "./components/features/product/element-multiple-slider"
import ElementProductTab from "./components/features/product/element-product-tab"

// Portfolio Features
import GridCols from "./components/features/portfolio/grid-cols"
import MasonaryGridCols from "./components/features/portfolio/masonary-grid-cols"


class Root extends React.Component {

    render() {
        store.dispatch(getAllProducts());
        store.dispatch(getAllCategory());

        return (
            <Provider store={store}>
                <IntlProvider translations={translations} locale='en'>
                    <BrowserRouter basename={'/'} >
                        <ScrollContext>
                            <Switch>
                                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Nutrients} />
                                <Layout>

                                    {/*Routes For Features (Product Collection) */}
                                    <Route path={`${process.env.PUBLIC_URL}/shop`} component={Shop} />

                                    {/*Routes For Single Product*/}
                                    <Route path={`${process.env.PUBLIC_URL}/product`} component={Product} />
                                    <Route path={`${process.env.PUBLIC_URL}/product/:id`} component={Product} />

                                    {/*Routes For custom Features*/}
                                    <Route path={`${process.env.PUBLIC_URL}/cart`} component={Cart} />
                                    <Route path={`${process.env.PUBLIC_URL}/wishlist`} component={wishList} />
                                    <Route path={`${process.env.PUBLIC_URL}/checkout`} component={checkOut} />
                                    <Route path={`${process.env.PUBLIC_URL}/order-success`} component={orderSuccess} />

                                    <Route path={`${process.env.PUBLIC_URL}/sales/orders`} component={aboutUs} />

                                    {/*Routes For Extra Pages*/}
                                    <Route path={`${process.env.PUBLIC_URL}/pages/about-us`} component={aboutUs} />
                                    <Route path={`${process.env.PUBLIC_URL}/pages/404`} component={PageNotFound} />
                                    <Route path={`${process.env.PUBLIC_URL}/pages/lookbook`} component={lookbook} />
                                    <Route path={`${process.env.PUBLIC_URL}/pages/login`} component={Login} />
                                    <Route path={`${process.env.PUBLIC_URL}/pages/register`} component={Register} />
                                    <Route path={`${process.env.PUBLIC_URL}/pages/search`} component={Search} />
                                    <Route path={`${process.env.PUBLIC_URL}/pages/collection`} component={Collection} />
                                    <Route path={`${process.env.PUBLIC_URL}/pages/forget-password`} component={ForgetPassword} />
                                    <Route path={`${process.env.PUBLIC_URL}/pages/contact`} component={Contact} />
                                    <Route path={`${process.env.PUBLIC_URL}/pages/dashboard`} component={Dashboard} />
                                    <Route path={`${process.env.PUBLIC_URL}/pages/faq`} component={Faq} />

                                    {/*Features*/}
                                    {/*Theme Elements*/}
                                    <Route path={`${process.env.PUBLIC_URL}/features/element-title`} component={ElementTitle} />
                                    <Route path={`${process.env.PUBLIC_URL}/features/element-banner`} component={ElementBanner} />
                                    <Route path={`${process.env.PUBLIC_URL}/features/element-slider`} component={ElementSlider} />
                                    <Route path={`${process.env.PUBLIC_URL}/features/element-category`} component={ElementCategory} />
                                    <Route path={`${process.env.PUBLIC_URL}/features/element-service`} component={ElementService} />
                                    <Route path={`${process.env.PUBLIC_URL}/features/element-ratio`} component={ElementRatio} />

                                    {/*Product Elements*/}
                                    <Route path={`${process.env.PUBLIC_URL}/features/element-product-box`} component={ElementProductBox} />
                                    <Route path={`${process.env.PUBLIC_URL}/features/element-product-slider`} component={ElementProductSlider} />
                                    <Route path={`${process.env.PUBLIC_URL}/features/element-product-no-slider`} component={ElementProductNoSlider} />
                                    <Route path={`${process.env.PUBLIC_URL}/features/element-product-multiple-slider`} component={ElementMultipleSlider} />
                                    <Route path={`${process.env.PUBLIC_URL}/features/element-product-tab`} component={ElementProductTab} />

                                    {/*Portfolios*/}
                                    <Route path={`${process.env.PUBLIC_URL}/features/portfolio-grid/:columns`} component={GridCols} />
                                    <Route path={`${process.env.PUBLIC_URL}/features/portfolio-masonary/:columns`} component={MasonaryGridCols} />

                                    {/*Blog Pages*/}
                                    <Route path={`${process.env.PUBLIC_URL}/blog/right-sidebar`} component={RightSide} />
                                    <Route path={`${process.env.PUBLIC_URL}/blog/details`} component={Details} />
                                    <Route path={`${process.env.PUBLIC_URL}/blog/blog-page`} component={BlogPage} />

                                    {/* <Route exact path="*" component={PageNotFound} /> */}
                                </Layout>
                            </Switch>
                        </ScrollContext>
                    </BrowserRouter>
                </IntlProvider>
            </Provider>
        );
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));


