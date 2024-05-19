import { TabPanelProps } from './tabPanel.types';

const useTabPanel = (props: TabPanelProps) => {
  const { children, value, index } = props;

  const show = value === index;

  const getContainerProps = () => ({
    role: 'tabpanel',
    hidden: value !== index,
    id: `tabpanel-${index}`,
    'aria-labelledby': `tab-${index}`,
  });

  return {
    show,
    children,
    getContainerProps,
  };
};

export default useTabPanel;
