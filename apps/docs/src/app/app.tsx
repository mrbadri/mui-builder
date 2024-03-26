import { Link, Route, Routes } from 'react-router-dom';
import { Builder } from '@mui-builder/core';
import { FormBuilderProps } from 'packages/core/src/components/builder/builder.types';

export function App() {
  const groupList: FormBuilderProps[] = [
    // Fields
    {
      id: 'form-field-1',
      groupType: 'form',
      type: 'field-text',
      props: {
        id: 'Field-One',
        formId: '20',
        label: 'Field One (Form Id: 20)',
        script: {
          fn: `
          if(formMethods.getValues()?.FieldTwo === "erfan"){
            return {
                label: "blue"
            }
          }`,
          dependesies: ['FieldTwo'],
        },
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
      id: 'form-field-3',
      groupType: 'form',
      type: 'field-text',
      props: {
        id: 'Field-Three',
        formId: '21',
        label: 'Field Three (Form Id: 21)',
        helperText: 'Helper Text',
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
        <Route path="/" element={<Builder groupList={groupList} />} />
      </Routes>
    </div>
  );
}

export default App;
