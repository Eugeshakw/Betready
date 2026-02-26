import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { SharedLayout } from './components/SharedLayout'
// import { lazy, useEffect } from "react";
// import { useDispatch} from "react-redux";
// import { PrivateRoute } from "./PrivateRoute";
// import { RestrictedRoute } from "./RestrictedRoute";

const HomePage = lazy(() => import('./pages/Home'))
const TopEventsPage = lazy(() => import('./pages/TopEvents'))

export const App = () => {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<SharedLayout />}
				>
					<Route
						index
						element={<HomePage />}
					/>
					<Route
						path="top-event"
						element={<TopEventsPage />}
					/>
					<Route
						path="*"
						element={<Navigate to="/" />}
					/>
				</Route>
			</Routes>
		</>
	)
}
