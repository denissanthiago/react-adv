import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import { routes } from './routes';
import { IRoute } from './routes';
import logo from '../logo.svg';

interface IRouteComponent {
  route: IRoute,
  [x: string]: any,
}

const RouteComponent = ({ route, ...restProps } : IRouteComponent) => {
  return (
    <li {...restProps}>
      <NavLink to={route.to} className={ ({ isActive }) => isActive ? 'nav-active' : '' } >{route.name}</NavLink>
    </li>
  );
}

export const Navigation = () => {
  return (
    <Suspense fallback={<span>loading ...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
              { routes.map(route => ( <RouteComponent key={route.name} route={route}/>)) }
            </ul>
          </nav>
          <Routes>
            { routes.map(({ name, path, component: Component}) => ( <Route key={name} path={path} element={<Component />} />)) }
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}