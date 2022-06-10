import { useEffect } from 'react';

import { gaMeasurementId } from '@/configs/ga';
import { PAGE_TITLES } from '@/constants';

type PageTitleType = typeof PAGE_TITLES[keyof typeof PAGE_TITLES];

const useGtagPageView = (pageTitle: PageTitleType) => {
  useEffect(() => {
    const { href, pathname } = window.location;

    window.gtag('config', gaMeasurementId, {
      page_title: pageTitle,
      page_location: href,
      page_path: pathname,
    });
  }, []);
};

export default useGtagPageView;
