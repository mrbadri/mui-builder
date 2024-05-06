import { TSxStyles } from "../../../../../../types/styles.types";

const draggableBoxSx: TSxStyles<{ isDragging: boolean; transform: string | undefined }> = (props) => ({
  padding: '4px 4px 4px 16px',
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: props?.theme?.palette.grey[100],
  border: `1px solid ${props?.theme?.palette.grey[400]}`,
  borderRadius: '12px',
  opacity: props?.isDragging ? 0.8 : 1,
  transform: props?.transform,
  whiteSpace: 'nowrap',
  transition: 'width transform 0.2s ease-in-out',
  cursor: props?.isDragging ? 'grabbing' : 'grab',
  zIndex: props?.isDragging ? 1 : 0
});

const dividerSx: TSxStyles<{ mx?: string; my?: string }> = (props) => ({
  mx: props?.mx,
  my: props?.my
});

const searchInputSx: TSxStyles = (props) => ({
  pr: '16px',
  my: '22px',
  '& > div': {
    backgroundColor: 'transparent !important',
    borderColor: props?.theme?.palette.grey[200],
    borderRadius: '12px !important',
    maxHeight: '48px'
  },
  '& input': {
    backgroundColor: 'transparent !important',
    borderColor: props?.theme?.palette.grey[200],
    borderRadius: '12px !important'
  },
  '& fieldset': {
    borderColor: props?.theme?.palette.grey[200],
    borderRadius: '12px !important'
  }
});

const searchInputElementSx: TSxStyles = () => ({
  marginLeft: '4px'
});

const visibleColumnsContainerSx: TSxStyles = () => ({
  display: 'inline-flex',
  maxHeight: '350px',
  overflow: 'auto',
  flexWrap: 'nowrap',
  gap: '16px',
  pl: '14px',
  pr: '10px',
  '& .MuiButtonBase-root': { padding: 0 },
  '& .MuiFormControlLabel-root': { gap: '8px' }
});

const checkboxCheckedIconSx: TSxStyles = (props) => ({
  width: 24,
  height: 24,
  backgroundColor: props?.theme?.palette.grey[100],
  border: `1px solid ${props?.theme?.palette.grey[200]}`,
  borderRadius: '6px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const arrowLeftIconSx: TSxStyles = () => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
});

const selectedColumnsSx: TSxStyles = (props) => ({
  borderRadius: '50%',
  width: '26px',
  height: '26px',
  backgroundColor: props?.theme?.palette.primary.main,
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '12px',
  fontWeight: 500,
  lineHeight: '18px'
});

const saveButtonSx: TSxStyles = () => ({
  minWidth: '111px',
  lineHeight: '20px',
  height: '44px'
});

const resetButtonSx: TSxStyles = (props) => ({
  color: props?.theme?.palette.grey[600]
});

const settingsModalStyles = {
  draggableBoxSx,
  dividerSx,
  searchInputSx,
  searchInputElementSx,
  visibleColumnsContainerSx,
  checkboxCheckedIconSx,
  arrowLeftIconSx,
  selectedColumnsSx,
  saveButtonSx,
  resetButtonSx
};

export default settingsModalStyles;
