import React from 'react';

import { Tab } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import TabsMui from '@mui/material/Tabs';

import { TabsProps } from './tabs.types';

import TabPanel from '../tabPanel/tabPanel';
import useTabs from './useTabs';

const Tabs: React.FC<TabsProps> = (props) => {
  const {
    AddIcon,
    addable,
    tabs,
    getTabsProps,
    getTabProps,
    getAddTabProps,
    getTabPanelProps,
  } = useTabs(props);

  return (
    <div>
      <TabsMui {...getTabsProps()}>
        {/* Show List Tabs */}
        {tabs.map((tab, index) => (
          <Tab {...getTabProps(tab, index)} />
        ))}
        {/* Add New Tab */}
        {addable && <IconButton {...getAddTabProps()}>{AddIcon}</IconButton>}
      </TabsMui>

      {/* Content of Tabs */}
      {tabs.map((tab, index) => (
        <TabPanel {...getTabPanelProps(index)}>{tab.chidlren}</TabPanel>
      ))}
    </div>
  );
};

export default Tabs;
