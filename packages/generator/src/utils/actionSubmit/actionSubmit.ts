import { SubmitFieldProps } from 'packages/components/form/src/components/actions/submit/submit.types';

import { Generator } from '../../types/public.types';

import generateID from '../id/id';

const generateActionSubmit: Generator<SubmitFieldProps, string> = ({
  props,
  configs,
}) => {
  return {
    id: generateID(),
    groupType: 'form',
    type: 'action-submit',
    props: {
      ...(props as SubmitFieldProps),
    },
    configs,
  };
};

export default generateActionSubmit;
