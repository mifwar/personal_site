// pages/resume.pdf.js

import { useRouter } from 'next/router';
import React, { useEffect } from "react";

const ResumePDF = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/resume');
  }, []);

  return null;
};

export default ResumePDF;
