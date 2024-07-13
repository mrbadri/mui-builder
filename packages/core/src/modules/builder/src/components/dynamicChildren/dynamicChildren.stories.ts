import type { Meta, StoryObj } from '@storybook/react';

import Builder from './dynamicChildren';

const meta: Meta<typeof Builder> = {
  component: Builder,
};

export default meta;
type Story = StoryObj<typeof Builder>;

export const TextField: Story = {
  args: {
    childs: {
      id: 'form-field-1',
      groupType: 'form',
      type: 'field-text',
      props: {
        id: 'Field-One',
        formId: '20',
        label: 'Field One (Form Id: 20)',
        dependesies: ['FieldTwo'],
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
  argTypes: {
    childs: {},
  },
};

export const Gird: Story = {
  args: {
    childs: {
      id: 'form-field-273',
      groupType: 'grid',
      type: 'container',
      props: {
        rowSpacing: 2,
        columnSpacing: 2,
        childs: [
          {
            id: 'form-field-4kldjd',
            groupType: 'grid',
            type: 'item',
            props: {
              childs: {
                id: 'form-field-4',
                groupType: 'form',
                type: 'field-text',
                props: {
                  id: 'Field4',
                  formId: '20',
                  label: 'Field 4 (Form Id: 20)',
                },
              },
            },
          },

          {
            id: 'form-field-5',
            groupType: 'grid',
            type: 'item',
            props: {
              childs: {
                id: 'form-field-4',
                groupType: 'form',
                type: 'field-text',
                props: {
                  id: 'Field4',
                  formId: '20',
                  label: 'Field 5 (Form Id: 20)',
                },
              },
            },
          },
        ],
      },
    },
  },
  argTypes: {
    childs: {},
  },
};

export const ActionSubmit: Story = {
  args: {
    childs: {
      id: 'form-action-1',
      groupType: 'form',
      type: 'action-submit',
      props: {
        formId: '20',
        childs: 'Submit (20)',
        onAction: 'console.log("Form 20: " , values);',
        sx: {
          bgcolor: 'HighlightText',
        },
        api: {
          configs: {
            url: `return ("https://jsonplaceholder.typicode.com/Actions/");`,
            method: 'post',
            data: `return formMethod.getValues();`,
          },
          queries: {
            enable: false,
          },
        },
      },
    },
  },
};

export const AutoComplete: Story = {
  args: {
    childs: {
      id: 'form-auto-complete-1',
      groupType: 'form',
      type: 'auto-complete',
      props: {
        id: 'auto-complete-1',
        formId: '18',
        options: [
          { name: 'folan lab', id: 'fo val' },
          { name: 'folan lab22', id: 'fo val22' },
        ],
        innerTextFieldProps: {
          sx: {
            width: '200px',
          },
          label: 'autoComplete',
        },
      },
    },
  },
};

export const Checkbox: Story = {
  args: {
    childs: {
      id: 'form-checkbox-1',
      groupType: 'form',
      type: 'checkbox',
      props: {
        id: 'checkbox-1',
        formId: '21',
        label: 'label 1',
        checkboxProps: {},
        childs: [
          {
            id: 'form-checkbox-1-nested-1',
            groupType: 'form',
            type: 'checkbox',
            props: {
              id: 'checkbox-1-nested-1',
              formId: '18',
              label: 'label 2',
              checkboxProps: {},
            },
          },
          {
            id: 'form-checkbox-1-nested-13',
            groupType: 'form',
            type: 'checkbox',
            props: {
              id: 'checkbox-1-nested-13',
              formId: '18',
              label: 'label 23',
              checkboxProps: {},
            },
          },
        ],
      },
    },
  },
};

export const NumberField: Story = {
  args: {
    childs: {
      id: 'form-number',
      groupType: 'form',
      type: 'number',
      props: {
        id: 'number one',
        seperator: ',',
        defaultValue: '12345',
        formId: '20',
        label: 'number field (Form Id: 20)',
      },
    },
  },
};

export const Select: Story = {
  args: {
    childs: {
      id: 'select-form-1',
      groupType: 'form',
      type: 'select',
      props: {
        formId: '20',
        children: 'child',
        id: 'select-1',
        sx: { width: '200px' },
        fullWidth: true,
        // multiple: true,
        defaultValue: '',
        inputLabelProps: {
          children: 'select label',
        },
        options: [
          { name: 'first', id: '1' },
          { name: 'second', id: '2' },
        ],
      },
    },
  },
};
