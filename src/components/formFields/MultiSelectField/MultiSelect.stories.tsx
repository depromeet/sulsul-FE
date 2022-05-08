import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import EntityForm from '@/components/EntityForm';

import MultiSelectField from './MultiSelectField';

export default {
  title: 'FormFields/MultiSelectField',
  component: MultiSelectField,
  decorators: [
    (Story) => (
      <EntityForm onSubmit={action('onSubmit')}>
        <div style={{ padding: '20px', backgroundColor: '#000' }}>
          <Story />
        </div>
      </EntityForm>
    ),
  ],
  argTypes: {
    height: { control: 'text' },
  },
} as ComponentMeta<typeof MultiSelectField>;

const Template: ComponentStory<typeof MultiSelectField> = (args) => <MultiSelectField {...args} />;

const options = [
  { value: '1', label: '단 맛이 나요', key: '1' },
  { value: '2', label: '목넘김이 부드러워요', key: '2' },
  { value: '3', label: '쓴 맛이 나요', key: '3' },
  { value: '4', label: '향이 진하고 무거워요', key: '4' },
  { value: '5', label: '단맛과 쓴 맛이 어우러저요', key: '5' },
  { value: '6', label: '톡 쏘는 맛이 강해요', key: '6' },
  { value: '7', label: '탄 맛이 나요', key: '7' },
  { value: '8', label: '깔끔한 맛이예요', key: '8' },
  { value: '9', label: '구수한 맛이 나요', key: '9' },
  { value: '10', label: '텁텁한 느낌이 있어요', key: '10' },
  { value: '11', label: '단 맛이 나요', key: '11' },
  { value: '12', label: '목넘김이 부드러워요', key: '12' },
  { value: '13', label: '쓴 맛이 나요', key: '13' },
  { value: '14', label: '향이 진하고 무거워요', key: '14' },
  { value: '15', label: '단맛과 쓴 맛이 어우러저요', key: '15' },
  { value: '16', label: '톡 쏘는 맛이 강해요', key: '16' },
  { value: '17', label: '탄 맛이 나요', key: '17' },
  { value: '18', label: '깔끔한 맛이예요', key: '18' },
  { value: '19', label: '구수한 맛이 나요', key: '19' },
  { value: '20', label: '텁텁한 느낌이 있어요', key: '20' },
];

export const BasicMultiSelectField = Template.bind({});
BasicMultiSelectField.args = {
  options,
  name: 'multiSelectField',
  height: '400px',
};
