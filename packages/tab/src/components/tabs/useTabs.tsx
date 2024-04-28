import React, { useState } from 'react';

import { TabsProps as TabsPropsMui } from '@mui/material';
import { TabProps as TabPropsMui } from '@mui/material';

import { TabData, TabsProps } from './tabs.types';

const useTabs = (props: TabsProps) => {
  const { tabs, setTabs } = props;
  const [value, setValue] = useState<number | null>(0);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: number | null
  ) => {
    setValue(newValue);
  };

  const handleAddTab = () => {
    const newTabs = [
      ...tabs,
      {
        label: `Tab ${tabs.length + 1}`,
        content: `Content for Tab ${tabs.length + 1}`,
      },
    ];
    setTabs(newTabs);
    setValue(newTabs.length - 1);
  };

  const handleDeleteTab = (index: number) => {
    const newTabs = tabs.filter((_, i) => i !== index);
    setTabs(newTabs);
    setValue(Math.min(value as number, newTabs.length - 1));
    setDeleteIndex(null);
  };

  const showDeleteIcon = (index: number) => deleteIndex === index;

  // Props
  const getTabsProps = (): TabsPropsMui => ({
    value,
    onChange: handleChange,
    'aria-label': 'dynamic tabs example',
  });

  const getTabProps = (tab: TabData, index: number): TabPropsMui => ({
    key: index,
    label: tab.label,
    onMouseEnter: () => setDeleteIndex(index), // Set deleteIndex on hover
    onMouseLeave: () => setDeleteIndex(null), // Reset deleteIndex when mouse leaves
    iconPosition: 'end',
    onClick: () => setValue(index),
  });

  const getDeleteTabProps = (index: number) => ({
    onClick: () => handleDeleteTab(index),
    style: { fontSize: '14px' },
  });

  const getAddTabProps = () => ({
    onClick: handleAddTab,
    sx: { width: '72px' },
  });

  const getTabPanelProps = (index: number) => ({
    key: index,
    value: value,
    index: index,
  });

  return {
    tabs,
    showDeleteIcon,
    getTabsProps,
    getTabProps,
    getDeleteTabProps,
    getAddTabProps,
    getTabPanelProps,
  };
};

export default useTabs;
