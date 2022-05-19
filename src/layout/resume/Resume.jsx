import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { Link } from 'react-router-dom';
import dylanResume from './dylanResume.pdf';

const Resume = () => {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const resume = dylanResume;
  
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div className='resume'>
      <div className='text'>
        <h3>Resume</h3>
        <Link className='resumeDownload' to='./dylanResume.pdf' target='_blank' download>Download</Link>
      </div>
      <Document
        file={resume}
        onLoadSuccess={onDocumentLoadSuccess}
        className='resumePdf'
        >
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  )
}

export default Resume