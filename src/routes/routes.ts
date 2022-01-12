import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

export interface IRoute {
    to: string,
    path: string,
    name: string,
    component: LazyExoticComponent<JSXComponent> | JSXComponent,
}


const LayoutLazy = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'))

export const routes: IRoute[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload',
        name: 'LazyLayout - Dash',
        component: LayoutLazy,
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        name: 'No Lazy',
        component: NoLazy,
    },
]