import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import BranchItem from "../BranchItem";
import { swapArrayElements, findIndex } from "../../../utils";

import "./BranchListComponent.scss";

const BranchList = ({ stores, categoryName, categoryId, isMobile }) => {
  const [data, setData] = useState([]);
  const [viewAll, toggleViewAll] = useState(false);

  useEffect(() => {
    const idStoreActive = localStorage.getItem("idStoreActive");
    if (stores && stores.length && stores.length > 0) {
      if (idStoreActive) {
        const indexStoreActive =
          typeof stores[0].id === "number"
            ? findIndex(stores, "id", Number(idStoreActive))
            : findIndex(stores, "id", idStoreActive);
        setData(swapArrayElements(stores, 0, indexStoreActive));
      }
      else {
        setData(stores);
      }
    }
  }, [stores]);

  const activeFirstStore = (store) => {
    const indexStore = data.indexOf(store);

    localStorage.setItem("idStoreActive", store.id);
    setData(swapArrayElements(data, 0, indexStore));
  };

  const matchBranch = (branches) => {
    let result = branches.filter((item) => categoryId === item.categoryId);
    // console.log('result: ', result);
    if (!viewAll) {
      return isMobile ? [...result.slice(0, 8)] : [...result.slice(0, 12)];
    }
    return result;
  };

  const handleButtonViewAll = () => {
    toggleViewAll(!viewAll);
  };

  const renderBranchItem = (branches) => {
    let result = "";

    if (branches && branches.length && branches.length > 0) {
      result = matchBranch(branches).map((branch, index) => (
        <BranchItem
          key={index}
          branch={branch}
          activeFirstStore={activeFirstStore}
        />
      ));
    }
    return result;
  };

  return (
    <div className="branch-list">
      {renderBranchItem(data)}
      <div className="branch-list__button">
        <button type="button" onClick={handleButtonViewAll}>
          {isMobile ? "All Stores" : `View All ${categoryName} stores`}
        </button>
      </div>
    </div>
  );
};

export default BranchList;

BranchList.propTypes = {
  isMobile: PropTypes.bool,
  categoryName: PropTypes.string,
  stores: PropTypes.objectOf(PropTypes.any),
  categoryId: PropTypes.number,
};

BranchList.defaultProps = {
  PropTypes: false,
  categoryName: "",
  stores: [],
  categoryId: 0,
};
