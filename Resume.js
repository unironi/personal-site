import React, { useState } from "react";
import "../../App.css";
import "../Resume.css";
import Footer from "../Footer";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function previousPage() {
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  }

  function nextPage() {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Document
          file="/FINAL_RESUME_V2.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber}></Page>
        </Document>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className="btn btn-dark btn-lg"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Back
        </button>
        <button
          className="btn btn-dark btn-lg"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Resume;
