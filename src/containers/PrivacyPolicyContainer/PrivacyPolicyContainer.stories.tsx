import { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PrivacyPolicyContainer, { getPrivacyPolicyHtml } from './PrivacyPolicyContainer';

export default {
  title: 'Pages/개인정보 처리방침',
  component: PrivacyPolicyContainer,
  args: {},
} as ComponentMeta<typeof PrivacyPolicyContainer>;

const Template: ComponentStory<typeof PrivacyPolicyContainer> = () => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    (async () => {
      const html = await getPrivacyPolicyHtml();
      setHtml(html);
    })();
  }, []);

  return <PrivacyPolicyContainer html={html} />;
};

export const Default = Template.bind({});
Default.args = {};
