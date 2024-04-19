import { TextProps } from 'packages/components/form/src/components/fields/text/text.types';

import { Generator } from '../../types/public.types';

import generateID from '../id/id';

const generateFieldText: Generator<TextProps> = ({ props }) => {
  return {
    id: generateID(),
    groupType: 'form',
    type: 'field-text',
    props: {
      ...props,
    },
  };
};

export default generateFieldText;
