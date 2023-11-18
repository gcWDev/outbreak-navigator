import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import PlacesMap from "./page/PlacesMap/PlacesMap";
import HomePage from "./page/HomePage/HomePage";
import HomeLayout from "./layouts/HomeLayout";
import "bootstrap/dist/css/bootstrap.css";
import MapLayout from "./layouts/MapLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<HomeLayout />}>
      <Route element={<MapLayout />}>
        <Route
          path="/places"
          element={
            <PlacesMap
            // coordinates={coordinates}
            // setCoordinates={setCoordinates}
            />
          }
        />
      </Route>
      <Route index element={<HomePage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
