import { useEffect } from 'react';

import { gaMeasurementId } from '@/configs/ga';

const useGtagPageView = (pageTitle?: string) => {
  useEffect(() => {
    const { title } = window.document;
    const { href, pathname } = window.location;

    window.gtag('config', gaMeasurementId, {
      page_title: pageTitle || title,
      page_location: href,
      page_path: pathname,
    });
  }, []);
};

export default useGtagPageView;
