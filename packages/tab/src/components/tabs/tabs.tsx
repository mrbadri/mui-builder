import React from 'react';

import { Stack, Tab } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import TabsMui from '@mui/material/Tabs';

import { TabsProps } from './tabs.types';

import TabPanel from '../tabPanel/tabPanel';
import useTabs from './useTabs';

const Tabs: React.FC<TabsProps> = (props) => {
  const {
    tabs,
    getTabsProps,
    getTabProps,
    getDeleteTabProps,
    showDeleteIcon,
    getAddTabProps,
    getTabPanelProps,
  } = useTabs(props);

  return (
    <div>
      <TabsMui {...getTabsProps()}>
        {tabs.map((tab, index) => (
          <Tab
            {...getTabProps(tab, index)}
            icon={
              <div {...getDeleteTabProps(index)}>
                {showDeleteIcon(index) && 'x'}
              </div>
            }
          />
        ))}
        <IconButton {...getAddTabProps()}>+</IconButton>
      </TabsMui>

      {tabs.map((tab, index) => (
        <TabPanel {...getTabPanelProps(index)}>{tab.content}</TabPanel>
      ))}
    </div>
  );
};

export default Tabs;
