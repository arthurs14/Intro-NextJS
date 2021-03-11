import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const errorPage = () => (
  <div>
    <h1>Well That Was Not Supposed to Happen...</h1>
    <p>Try <Link href="/"><a>Go Back</a></Link></p>
  </div>
);

export default errorPage;