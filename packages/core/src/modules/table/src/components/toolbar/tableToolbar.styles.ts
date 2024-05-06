import { TSxStyles } from "../../../../../types/styles.types"; 

const toolbarContainerSx: TSxStyles = () => ({
  mb: '16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '& > .end': {
    display: 'flex',
    gap: '12px'
  }
});

const toolbarButtonGroupSx: TSxStyles = (props) => ({
  border: `1px solid ${props?.theme?.palette.grey[400]}`,
  borderRadius: '8px',
  button: { padding: '7px' }
});

const buttonSx: TSxStyles = (props) => ({
  borderColor: props?.theme?.palette.grey[400],
  borderRadius: '8px',
  height: '36px',
  fontSize: '12px',
  fontWeight: 400,
  color: props?.theme?.palette.grey[600],
  '&:hover': {
    backgroundColor: props?.theme?.palette.grey[100],
    borderColor: props?.theme?.palette.grey[400]
  }
});

const toolbarContainerStyles = {
  toolbarContainerSx,
  buttonSx,
  toolbarButtonGroupSx
};

export default toolbarContainerStyles;
