import { TSxStyles } from '../../../../../types/styles.types';

const tableContainerSx: TSxStyles = () => ({
  maxHeight: 500,
  borderRadius: '12px',
});

const tableSx: TSxStyles<{ width: number }> = (props) => ({
  width: `${props?.width}px`,
});

const tableCellSx: TSxStyles<{ width: string | number; padding: string | 'none' }> = (props) => ({
  width: props?.width,
  padding: props?.padding
});

const headerPlaceholderSx: TSxStyles = () => ({
  cursor: 'pointer',
  display: 'inline-flex'
});

const resizeBoxSx: TSxStyles = (props) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  right: '0px',
  height: '22px',
  width: '1px',
  backgroundColor: props?.theme?.palette.grey[400],
  cursor: 'col-resize',
  userSelect: 'none',
  touchAction: 'none'
});

const tableHeadStyles = { tableContainerSx, tableSx, tableCellSx, headerPlaceholderSx, resizeBoxSx };
export default tableHeadStyles;
