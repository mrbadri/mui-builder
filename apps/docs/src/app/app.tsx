import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { Stack } from '@mui/material';

import Builder, { BuilderProps } from '@mui-builder/core';
import Tabs, { TabData } from '@mui-builder/tab';

export function App() {
  const children: BuilderProps[] = [
    // Fields
    // {
    //   id: 'form-field-1',
    //   groupType: 'form',
    //   type: 'field-text',
    //   props: {
    //     id: 'Field-One',
    //     formId: '20',
    //     label: 'Field One (Form Id: 20)',
    //     dependencies: ['FieldTwo'],
    //     script: `
    //       if(formMethod.getValues()?.FieldTwo === "erfan"){
    //         setProps('FieldTwo' , {label:'i can'});
    //         return {};
    //       }`,
    //     api: {
    //       configs: {
    //         url: `return ("https://jsonplaceholder.typicode.com/todo8888s/" + formMethod.getValues()?.FieldTwo);`,
    //         method: 'post',
    //         data: {
    //           test: '1',
    //         },
    //       },
    //       queries: {
    //         enable: `
    //         if(formMethod.getValues()?.FieldTwo === 'api'){
    //           return true;
    //         }
    //         return false;
    //         `,
    //       },
    //     },
    //     defaultValue: 'default value field one',
    //   },
    // },
    // {
    //   id: 'form-field-2',
    //   groupType: 'form',
    //   type: 'field-text',
    //   props: {
    //     id: 'FieldTwo',
    //     formId: '20',
    //     label: 'Field Two (Form Id: 20)',
    //   },
    // },

    // {
    //   id: 'form-field-273',
    //   groupType: 'grid',
    //   type: 'container',
    //   props: {
    //     rowSpacing: 2,
    //     columnSpacing: 2,
    //     children: [
    //       {
    //         id: 'form-field-4kldjd',
    //         groupType: 'grid',
    //         type: 'item',
    //         props: {
    //           children: {
    //             id: 'form-field-4',
    //             groupType: 'form',
    //             type: 'field-text',
    //             props: {
    //               id: 'Field4',
    //               formId: '20',
    //               label: 'Field 4 (Form Id: 20)',
    //             },
    //           },
    //         },
    //       },

    //       {
    //         id: 'form-field-5',
    //         groupType: 'grid',
    //         type: 'item',
    //         props: {
    //           children: {
    //             id: 'form-field-4',
    //             groupType: 'form',
    //             type: 'field-text',
    //             props: {
    //               id: 'Field4',
    //               formId: '20',
    //               label: 'Field 5 (Form Id: 20)',
    //             },
    //           },
    //         },
    //       },
    //     ],
    //   },
    // },

    // {
    //   id: 'form-field-3',
    //   groupType: 'form',
    //   type: 'field-text',
    //   props: {
    //     id: 'Field-Three',
    //     formId: '21',
    //     label: 'Field Three (Form Id: 21)',
    //     // helperText: 'Helper Text',
    //     rule: {
    //       // required: {
    //       //   message: 'this is required',
    //       //   value: true,
    //       // },
    //       // validate: (value, formValues) => {
    //       //   if(value === 'val')
    //       //   return 'rule validate';
    //       // },
    //       validate: `
    //       if(value === 'val')
    //         return 'rule validate';
    //       `,
    //     },
    //   },
    // },

    // Actions
    {
      id: 'form-action-1',
      groupType: 'form',
      type: 'action-submit',
      props: {
        formId: '20',
        children: 'Submit (20)',
        onAction: 'console.log("Form 20: " , values);',
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
    {
      id: 'form-action-2',
      groupType: 'form',
      type: 'action-submit',
      props: {
        formId: '21',
        children: 'Submit (21)',
        onAction: 'console.log("Form 21: " , values)',
      },
      configs: {
        loading: {
          sx: {
            bgcolor: '#c28d2b',
          },
        },
      },
    },
    {
      id: 'form-auto-complete-1',
      groupType: 'form',
      type: 'auto-complete',
      props: {
        id: 'auto-complete-1',
        formId: '21',
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
    {
      id: 'form-radio-1',
      groupType: 'form',
      type: 'radio',
      props: {
        formId: '20',
        id: 'radio-1',
        name: 'fol',
        defaultValue: '2',
        radioInputsList: [
          { label: 'radio-num-1', value: '1' },
          { label: 'radio-num-2', value: '2' },
        ],
      },
    },
    {
      id: 'form-checkbox-1',
      groupType: 'form',
      type: 'checkbox',
      props: {
        id: 'checkbox-1',
        formId: '21',
        label: 'label 1',
        checkboxProps: {},
      },
    },
    {
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
    {
      id: 'form-password-1',
      groupType: 'form',
      type: 'password',
      props: {
        id: 'password-one',
        formId: '20',
        label: 'Password Field (Form Id: 20)',
      },
    },
    {
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
          children: "input label"
        },
        options: [
          { name: 'first', id: '1' },
          { name: 'second', id: '2' },
        ],
      },
    },
    //   id: 'select-form-1',
    //   groupType: 'form',
    //   type: 'select',
    //   props:{
    //     formId: '18',
    //     variant: 'contained',
    //     options:[{
    //       title: 'menu 1',
    //       value: 'm1'
    //     }],
    //     formControlProps:{
    //       title: 'select input',
    //       variant: 'standard'
    //     },
    //   }
    // }
  ];

  const [tabs, setTabs] = useState<TabData[]>([
    { label: 'Tab 1', chidlren: <>test</> },
  ]);

  return (
    <div>
      <div role="navigation">
        ----
        {/* <Tabs tabs={tabs} setTabs={setTabs} addable /> */}
        ---
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/core"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/"
          element={
            <Stack direction="row" alignItems="flex-end">
              <Builder children={children} />
            </Stack>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
