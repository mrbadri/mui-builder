# MUI Builder

Create dynamic dashboards and forms with JSON using the `@mui-builder` package. 

## Installation

Note: `@mui-builder` requires Node.js version `18` or higher.

Before you start, make sure you have installed the `@mui-builder` package in your project. If not, you can add it using npm, yarn or pnpm:

```bash
npm install @mui-builder/core 
```
 or
 ```bash
yarn add @mui-builder/core 
```
 or
 ```bash
pnpm add @mui-builder/core 
```

## Usage

To create a dynamic form, you need to import the `Builder` component from `@mui-builder/core` and define your form configuration.

## Example

Below is an example demonstrating how to create a dynamic form with the `Builder` component. The form includes several fields and actions, dynamically configured through the `groupList` prop.

```tsx
import React from 'react';
import { Builder } from '@mui-builder/core';

// Define your form fields and actions
const groupList = [
  // Fields
  {
    id: 'form-field-1',
    groupType: 'form',
    type: 'field-text',
    props: {
      id: 'Field-One',
      formId: '20',
      label: 'Field One (Form Id: 20)',
      dependencies: ['FieldTwo'],
      script: `
        if(formMethod.getValues()?.FieldTwo === "erfan"){
          return {
              label: "blue"
          }
        }`,
      api: {
        configs: {
          url: `return ("https://jsonplaceholder.typicode.com/todos/" + formMethod.getValues()?.FieldTwo);`,
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
    },
  },
  // Other fields and actions...
];

const App = () => {
  return <Builder groupList={groupList} />;
};

export default App;
```

This example demonstrates the basic setup for creating dynamic forms with the `@mui-builder` package. You can define various types of fields and actions, and control their behavior dynamically based on user input or API interactions.

Remember to replace the url in the api configurations with your actual endpoint.




# JSON Input Schema for Dynamic Forms

This document outlines the structure of the JSON input required to dynamically create forms using the `@mui-builder` package. The JSON input consists of an array of `groupList`, where each item can be a field, action, or any custom group type defined by the system. 

## GroupTypes

Each item in the `groupList` array has a `groupType`, which defines the general category of the item, such as `form`, `action`, etc. The `type` and `props` of an item are determined based on its `groupType`.

### Structure

- `id`: A unique identifier for the item.
- `groupType`: The category of the item (`form`, etc.).
- `type`: The specific type of the item, which further defines its behavior and appearance.
- `props`: An object containing properties specific to the `groupType` and `type` of the item.


### Example

```json
[
  {
    "id": "unique-item-id",
    "groupType": "form",
    "type": "field-text",
    "props": {
      "id": "Field-One",
      "label": "Your Label Here",
      // Additional properties...
    },
    "script": "if(condition){ // Alter properties dynamically }",
    "api": {
      "configs": {
        "url": "https://your-api-endpoint.com",
        "method": "GET",
        // Additional API configurations...
      },
      "queries": {
        "enable": "if(condition){ return true; } return false;",
        // Additional queries...
      }
    }
  },
  // Additional items...
]
```

## Types and Props

The `type` and `props` are dependent on the `groupType` of each item. Below are the common `groupTypes` and their corresponding `types` and `props`.

### Form Fields

- **groupType**: `form`
  - **Types**:
    - `field-text`: A text input field.
  - **Props**:
    - `id`: Unique identifier for the field.
     - `formId`: The ID of the form this action is associated with.
    - `label`: The label of the field.
    - `defaultValue`: The default value of the field.
    - `required`: Whether the field is required.
    - `helperText`: Additional information about the field.
    - `script`: Optional. A script that can dynamically alter the item's properties based on certain conditions.
    - `api`: Optional. Defines API interactions related to the item.
    - Additional props specific to each field type.

### Form Actions

- **groupType**: `form`
  - **Types**:
    - `action-submit`: A submit button for the form.
    - `action-reset`: A reset button that clears form fields.
  - **Props**:
    - `formId`: The ID of the form this action is associated with.
    - `children`: The text or content displayed on the action element.
    - `onAction`: The script or function that runs when the action is triggered.
    - `script`: Optional. A script that can dynamically alter the item's properties based on certain conditions.
    - `api`: Optional. Defines API interactions related to the item.
    - Additional props specific to each action type.

## Scripting and API Interaction

- **Script**: Allows for dynamic adjustments to the item's properties based on certain conditions or form states.
- **API**:
  - **Configs**: Defines the API call configurations, such as URL, method, and data to be sent.
  - **Queries**: Conditions under which the API call should be enabled or specific data fetched.

This JSON schema provides a flexible and powerful way to define dynamic forms and interactions within your application using the `@mui-builder` package. Ensure to replace placeholder values with your specific configurations and requirements.

--- 

This template offers a foundational structure for documenting the JSON input schema for your dynamic form system, which can be expanded or modified based on the specific functionalities and configurations of `@mui-builder`.
