import Home from "../components/Home";
import Messages from "../components/Message";
import React from "react";
import { Route } from "react-router-dom";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/messages",
    component: Messages
  }
];

export { routes };
