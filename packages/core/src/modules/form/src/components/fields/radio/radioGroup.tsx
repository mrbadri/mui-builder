import { FC } from 'react';

import { RadioGroup as MuiRadioGroup } from '@mui/material';

import { RadioGroupProps } from './radio.types';

import Radio from './radio';
import useRadioGroup from './useRadioGroup';

const RadioGroup: FC<RadioGroupProps> = (props) => {
  const { getRadioGroupProps, radioInputsList } = useRadioGroup(props);

  return (
    <MuiRadioGroup {...getRadioGroupProps()}>
      {radioInputsList.map((radio) => (
        <Radio key={radio.id} {...radio} />
      ))}
    </MuiRadioGroup>
  );
};

export default RadioGroup;