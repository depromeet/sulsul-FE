import { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TermsOfServiceContainer, { getTermsOfServiceHtml } from './TermsOfServiceContainer';

export default {
  title: 'Pages/이용약관',
  component: TermsOfServiceContainer,
  args: {},
} as ComponentMeta<typeof TermsOfServiceContainer>;

const Template: ComponentStory<typeof TermsOfServiceContainer> = () => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    (async () => {
      const html = await getTermsOfServiceHtml();
      setHtml(html);
    })();
  }, []);

  return <TermsOfServiceContainer html={html} />;
};
export const Default = Template.bind({});
Default.args = {};
