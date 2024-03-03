import { Route, Routes, Link } from 'react-router-dom';

// import { Form } from '@mui-builder/form';
import { Builder, GROUP_TYPE } from '@mui-builder/core';

export function App() {
  return (
    <div>
      <br />
      <hr />
      <br />
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
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        {/* <Route path="/form" element={<Form />} /> */}
        <Route
          path="/core"
          element={
            <Builder
              groupList={[
                { groupType: GROUP_TYPE.FORM, id: '1' },
                { groupType: GROUP_TYPE.FORM, id: '2' },
              ]}
            />
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
