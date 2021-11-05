import React from 'react';
import SelectedOption from './SelectedOptions';
import AvailableOption from './AvailableOptions';
const TransferList = () => {
  return (
    <div className="transfer-list">
      <AvailableOption title={'Available options'} />
      <SelectedOption title={'Selected options'} />
    </div>
  );
};
export default TransferList;
