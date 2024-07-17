import { Flow } from './flow.types';

const FLOW = {
  form: {
    'field-text': {
      id: { isFlow: true },
      formId: { isFlow: true },
      defaultValue: { isFlow: true },
      script: { isFlow: true },
      api: {
        configs: {
          url: { isFlow: true },
          method: { isFlow: true },
        },
        queries: {
          enable: { isFlow: true },
        },
      },
    },
  },
  grid: {
    container: {
      childs: [],
    },
    item: {
      childs: [],
    },
  },
};

export default FLOW;
