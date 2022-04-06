import React from "react";
import Card from "../shared/Card";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";

export default function AboutPage() {
  return (
    <>
      <Header/>
      <SideNav/>
      <Card>
        <h1>About this application</h1>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </Card>
      <Footer />
    </>
  );
}
