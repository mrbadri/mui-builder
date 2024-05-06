import { TSxStyles } from "../../../../../types/styles.types";

const pageCountSelectSx: TSxStyles = () => ({
  position: 'absolute',
  left: 0,
  top: 0
});

const pageCountTextFieldSx: TSxStyles = () => ({
  width: '52px'
});

const paginationStyles = {
  pageCountSelectSx,
  pageCountTextFieldSx
};

export default paginationStyles;
