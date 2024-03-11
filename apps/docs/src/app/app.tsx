import { Link, Route, Routes } from 'react-router-dom';
import { Builder, FormBuilderProps } from '@mui-builder/core';

export function App() {
  const groupList: FormBuilderProps[] = [
    {
      id: '1',
      groupType: 'form',
      type: 'field-text',
      props: {
        id: 'type-1',
        formId: '20',
      },
    },
    {
      id: '2',
      groupType: 'form',
      type: 'field-text',
      props: {
        id: 'type-2',
        formId: '20',
        helperText: 'mmd',
      },
    },
    {
      id: '3',
      groupType: 'form',
      type: 'field-text',
      props: {
        id: 'type-2',
        formId: '21',
        helperText: 'mmd',
      },
    },
    {
      id: '4',
      groupType: 'form',
      type: 'action-submit',
      props: {
        formId: '21',
        children: 'submit 21',
      },
    },
    {
      id: '5',
      groupType: 'form',
      type: 'action-submit',
      props: {
        formId: '20',
        children: 'submit 20',
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
