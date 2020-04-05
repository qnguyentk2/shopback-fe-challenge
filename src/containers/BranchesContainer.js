import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Branches from "../components/Branches";
import * as branchesAction from "../actions/branches";

class BranchesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: false,
    };
  }

  componentDidMount() {
    this.props.fetchBranchesData();
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    let currentHideNav = window.innerWidth <= 760;
    if (currentHideNav !== this.state.hideNav) {
      this.setState({ isMobile: currentHideNav });
    }
  };

  render() {
    const { categories, stores } = this.props;
    const { isMobile } = this.state;

    return (
      <Branches categories={categories} stores={stores} isMobile={isMobile} />
    );
  }
}

const mapStateToProps = (state) => {
  const { categories, stores } = state.branches;

  return { categories, stores };
};

const mapDispatchToProps = {
  fetchBranchesData: branchesAction.actFetchBranchesData
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BranchesContainer);

BranchesContainer.propTypes = {
  categories: PropTypes.objectOf(PropTypes.any),
  stores: PropTypes.objectOf(PropTypes.any),
  fetchBranchesData: PropTypes.func,
};

BranchesContainer.defaultProps = {
  categories: {},
  stores: {},
  fetchBranchesData: () => {},
};

