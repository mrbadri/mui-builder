import React from 'react';

import { TabPanelProps } from './tabPanel.types';

import useTabPanel from './useTabPanel';

const TabPanel: React.FC<TabPanelProps> = (props) => {
  const { show, children, getContainerProps } = useTabPanel(props);

  return <div {...getContainerProps}>{show && children}</div>;
};
export default TabPanel;
