import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Tabs } from "antd";

import BranchList from "./BranchList";
import { swapArrayElements, findIndex } from "../../utils";

import "./BranchesComponent.scss";

const { TabPane } = Tabs;
const Branches = (props) => {
  const { categories, stores, isMobile } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    const idCategoryActive = localStorage.getItem("idCategoryActive");
    if (categories && categories.length && categories.length > 0) {
      if (idCategoryActive) {
        const indexCategoryActive =
          typeof categories[0].id === "number"
            ? findIndex(categories, "id", Number(idCategoryActive))
            : findIndex(categories, "id", idCategoryActive);
        setData(swapArrayElements(categories, 0, indexCategoryActive));
      }
      else {
        setData(categories);
      }
    }
  }, [categories]);

  useEffect(() => {
    console.log();
  }, []);

  const activeFirstCategory = (id) => {
    const indexCategory = findIndex(data, "id", id);

    localStorage.setItem("idCategoryActive", id);
    setData(swapArrayElements(data, 0, indexCategory));
  };

  const renderCategories = (categories) => {
    let result = "";

    if (categories && categories.length && categories.length > 0) {
      result = categories.map((category, index) => (
        <TabPane
          tab={
            <div
              className="tab-title"
              onClick={() => activeFirstCategory(category.id)}
            >
              <div className="tab-title__icon">
                <img src={category.categoryUrl} alt="" />
              </div>
              <span>{category.name}</span>
            </div>
          }
          key={index}
        >
          <BranchList
            stores={stores}
            categoryName={category.name}
            categoryId={category.id}
            isMobile={isMobile}
          />
        </TabPane>
      ));
    }
    return result;
  };

  return (
    <div className="branches">
      <div className="wrapper">
        <div className="branches__tabs">
          <Tabs activeKey="0">{renderCategories(data)}</Tabs>
        </div>
      </div>
    </div>
  );
};

export default Branches;

Branches.propTypes = {
  isMobile: PropTypes.bool,
  categories: PropTypes.objectOf(PropTypes.any),
  stores: PropTypes.objectOf(PropTypes.any),
};

Branches.defaultProps = {
  isMobile: false,
  categories: [],
  stores: [],
};
