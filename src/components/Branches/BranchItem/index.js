import React from 'react';
import PropTypes from 'prop-types'

import './BranchItemComponent.scss';

const BranchItem = ({branch, activeFirstStore }) => {
  return (
    <div className="branch-item" onClick={() => activeFirstStore(branch)}>
      <div className="branch-item__logo">
        <img src={branch.logoUrl} alt="" />
      </div>
      <div className="branch-item__info">
        <span>{branch.displayText}</span>
        <span>{branch.oldDisplayText}</span>
      </div>
    </div>
  );
};

export default BranchItem;

BranchItem.propTypes = {
  branch: PropTypes.objectOf(PropTypes.any),
  activeFirstStore: PropTypes.func
};

BranchItem.defaultProps = {
  branch: {},
  activeFirstStore: () => {}
};
