import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { Link } from 'react-router-dom';
import dylanResume from './dylanResume.pdf';

const Resume = () => {

  const resume = dylanResume;

  return (
    <div className='resume'>
      <div className='text'>
        <h3 className='resume-title'>Resume</h3>
        <Link className='resumeDownload' to='./dylanResume.pdf' target='_blank' download>Download</Link>
      </div>
      <div className='pdf'>
        <Document
          file={resume}
          className='resumePdf'
          >
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  )
}

export default Resume