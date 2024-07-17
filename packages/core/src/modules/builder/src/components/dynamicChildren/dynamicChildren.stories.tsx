import { action } from '@storybook/addon-actions';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Decorator, Meta, StoryObj } from '@storybook/react';
import { TextProps } from 'packages/core/src/modules/form/src/components/fields/text/text.types';
import type { TypeWithDeepControls } from 'storybook-addon-deep-controls';

import { DynamicChildrenProps } from '@mui-builder/builder';
import FLOW from '@mui-builder/core/src/constant/flow/flow';
import { DynamicBuilderProps } from '@mui-builder/types/builder.type';
import extractKeys from '@mui-builder/utils/extractKeys/extractsKeys';

import Builder from './dynamicChildren';

const withSubmitButton: Decorator = (Story) => (
  <>
    <Story />
    <br />
    <Story
      args={{
        childs: {
          id: 'form-action-1',
          groupType: 'form',
          type: 'action-submit',
          props: {
            formId: '20',
            childs: 'Submit (20)',
            onAction: action('submit clicked!', {
              allowFunction: true,
            }),
            sx: {
              bgcolor: 'HighlightText',
            },
          },
        },
      }}
    />
  </>
);

type Story = TypeWithDeepControls<StoryObj<DynamicChildrenProps>>;

const meta: Meta<typeof Builder> = {
  component: Builder,
};

export default meta;

export const TextField: Story = {
  args: {
    childs: {
      id: 'form-field-1',
      groupType: 'form',
      type: 'field-text',
      props: {
        id: 'Field-One',
        formId: '20',
        label: 'Initial Label',
        script: `
            if(formMethod.getValues()?.FieldTwo === "erfan"){
              setProps('FieldTwo' , {label:'i can'});
              return {};
            }`,
        api: {
          configs: {
            url: `return ("https://jsonplaceholder.typicode.com/todo8888s/" + formMethod.getValues()?.FieldTwo);`,
            method: 'post',
            data: {
              test: '1',
            },
          },
          queries: {
            enable: `
              if(formMethod.getValues()?.FieldTwo === 'api'){
                return true;
              }
              return false;
              `,
          },
        },
        defaultValue: 'default value field one',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    'childs.groupType': {
      control: 'radio',
      options: ['form', 'grid'],
    },
    'childs.props.label': {
      if: { arg: 'childs.groupType', eq: 'form' },
      description: 'Description for the label property',
      // control: 'text',
      name: 'label',
      type: 'string',
      disable: true,
    },
    // 'childs.props': {
    //   if: { arg: 'childs.groupType', eq: 'form' },
    //   description: 'Description for the label property',
    //   // control: 'text',
    //   name: 'props',
    //   type: 'string',
    //   disable: true,
    // },
  },
  decorators: [withSubmitButton],
};

const keys = extractKeys(FLOW.form['field-text']);
console.log(keys);
