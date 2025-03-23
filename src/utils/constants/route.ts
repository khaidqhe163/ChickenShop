import ProductList from '~/pages/product-list/ProductList';
import Home from '../../pages/home/Home';
import { IRouteModel } from '../interfaces/common'
import ProductDetail from '~/pages/product-detail/ProductDetail';
import AboutMe from '~/pages/about-me/AboutMe';
export const clientRoute = {
    base: '/',
    home: '/trang-chu',
    productList: '/danh-sach-san-pham',
    productDetail: '/chi-tiet-san-pham',
    aboutMe: '/gioi-thieu',
};

export const publicClientRoutes: IRouteModel[] = [
    {
        path: clientRoute.base + clientRoute.home,
        component: Home
    },
    {
        path: clientRoute.base + clientRoute.productList,
        component: ProductList,
    },
    {
        path: clientRoute.base + clientRoute.productDetail + "/:id",
        component: ProductDetail,
    },
    {
        path: clientRoute.base + clientRoute.aboutMe,
        component: AboutMe,
    },
]

export const routerAbsolute = {
    productList: `${clientRoute.productList}`,
    productDetail: `${clientRoute.productDetail}`
}

