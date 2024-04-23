import { Link, Route, Routes } from 'react-router-dom';

import { Stack } from '@mui/material';

import Builder, { BuilderProps } from '@mui-builder/core';

export function App() {
  const children: BuilderProps[] = [
    // Fields
    {
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
    {
      id: 'form-field-2',
      groupType: 'form',
      type: 'field-text',
      props: {
        id: 'FieldTwo',
        formId: '20',
        label: 'Field Two (Form Id: 20)',
      },
    },

    {
      id: 'form-field-273',
      groupType: 'grid',
      type: 'container',
      props: {
        rowSpacing: 2,
        columnSpacing: 2,
        children: [
          {
            id: 'form-field-4kldjd',
            groupType: 'grid',
            type: 'item',
            props: {
              children: {
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
              children: {
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

    {
      id: 'form-field-3',
      groupType: 'form',
      type: 'field-text',
      props: {
        id: 'Field-Three',
        formId: '21',
        label: 'Field Three (Form Id: 21)',
        // helperText: 'Helper Text',
        rule: {
          // required: {
          //   message: 'this is required',
          //   value: true,
          // },
          // validate: (value, formValues) => {
          //   if(value === 'val')
          //   return 'rule validate';
          // },
          validate: `
          if(value === 'val')
            return 'rule validate';
          `,
        },
      },
    },

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
  ];

  return (
    <div>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/grid">Grid</Link>
          </li>
          <li>
            <Link to="/utils">Utils</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/core">Core</Link>
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
