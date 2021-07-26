import React from "react";
import "../../App.css";
import Footer from "../Footer";
import Cards from "../Cards";
import UploadForm from "../UploadForm";

/*import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";*/

function Art() {
  return (
    <div>
      <UploadForm></UploadForm>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
}

export default Art;
