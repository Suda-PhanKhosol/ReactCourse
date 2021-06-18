/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";
import { useSelector } from "react-redux";
import { ROLES } from "../../../../../Constants";
import DvrIcon from "@material-ui/icons/Dvr";
import Icon from "@material-ui/core/Icon";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const authReducer = useSelector(({ auth }) => auth);

  const isShowMenu = (roles) => {
    roles = roles === undefined ? [] : roles;
    if (roles.length > 0) {
      // check if route is restricted by role
      let intersection = roles.filter((x) => authReducer.roles.includes(x));
      return intersection.length > 0;
    } else {
      return true;
    }
  };

  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu && "menu-item-active"} menu-item-open `
      : "";
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/* begin::section */}
        <li className="menu-section ">
          <h4 className="menu-text">Menu</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li>
        {/* end:: section */}

        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/test", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/test">
            <span className="svg-icon menu-icon">
              <DvrIcon></DvrIcon>
            </span>
            <span className="menu-text">Test</span>
          </NavLink>
        </li>

        {/* Demo zone สามารถ comment ทิ้งได้ */}
        <>
          {/* Custom roles */}
          {isShowMenu([ROLES.admin, ROLES.Manager]) && (
            <>
              {/* begin::section */}
              <li className="menu-section ">
                <h4 className="menu-text">Demo Custom roles</h4>
                <i className="menu-icon flaticon-more-v2"></i>
              </li>

              {/* end:: section */}

              {/*begin::1 Level*/}
              <li
                className={`menu-item ${getMenuItemActive("/test", false)}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/test">
                  <span className="svg-icon menu-icon">
                    <SVG
                      src={toAbsoluteUrl("/media/svg/icons/Food/Bucket.svg")}
                    />
                  </span>
                  <span className="menu-text">Show only Admin and Manager</span>
                </NavLink>
              </li>
              {/*end::1 Level*/}
            </>
          )}

          {/* Menu Example */}
          {/* begin::section */}
          <li className="menu-section ">
            <h4 className="menu-text">Demo Menu</h4>
            <i className="menu-icon flaticon-more-v2"></i>
          </li>

          {/* end:: section */}

          {/*begin::1 Level*/}
          <li
            className={`menu-item menu-item-submenu ${getMenuItemActive(
              "/demo/pages",
              false
            )}`}
            aria-haspopup="true"
            data-menu-toggle="hover"
          >
            <NavLink to="/" className="menu-link menu-toggle">
              <span className="svg-icon menu-icon">
                <Icon>star</Icon>
              </span>
              <span className="menu-text">Level 1</span>
              <i className="menu-arrow" />
            </NavLink>
            <div className="menu-submenu ">
              <i className="menu-arrow" />
              <ul className="menu-subnav">
                {/* Inputs */}
                {/*begin: Alert*/}
                <li
                  className={`menu-item  ${getMenuItemActive("/alert")}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/alert">
                    <span className="svg-icon menu-icon">
                      <Icon>star</Icon>
                    </span>
                    <span className="menu-text">alert</span>
                  </NavLink>
                </li>
                {/* end: Alert */}

                {/*begin: Form Demo*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/demo/formDemo",
                    false
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/demo/formDemo">
                    <span className="svg-icon menu-icon">
                      <Icon>star</Icon>
                    </span>
                    <span className="menu-text">FormDemo</span>
                  </NavLink>
                </li>
                {/*End:Form Demo*/}

                {/*begin  Datatable Demo*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/demo/datatableList",
                    false
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/demo/datatableList">
                    <span className="svg-icon menu-icon">
                      <Icon>star</Icon>
                    </span>
                    <span className="menu-text">Datatable List</span>
                  </NavLink>
                </li>
                {/*End: Datatable Demo*/}

                {/* begin: pdfGenerrate */}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/demo/pdfGenerrate",
                    false
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/demo/pdfGenerrate">
                    <span className="svg-icon menu-icon">
                      <Icon>star</Icon>
                    </span>
                    <span className="menu-text">PDF GenerrateDemo</span>
                  </NavLink>
                </li>
                {/* End::1 pdfGenerrate */}

                {/* begin: QRGenerateDemo */}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/demo/QRGenerateDemo",
                    false
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/demo/QRGenerateDemo">
                    <span className="svg-icon menu-icon">
                      <Icon>star</Icon>
                    </span>
                    <span className="menu-text">QR GenerateDemo</span>
                  </NavLink>
                </li>
                {/* End::1 QRGenerateDemo */}

                {/* begin: QRReaderDemo */}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/demo/QRReaderDemo",
                    false
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/demo/QRReaderDemo">
                    <span className="svg-icon menu-icon">
                      <Icon>star</Icon>
                    </span>
                    <span className="menu-text">QR Reader Demo</span>
                  </NavLink>
                </li>
                {/* End::1 QRReaderDemo */}

                {/* begin: apexcharts */}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/demo/apexcharts",
                    false
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/demo/apexcharts">
                    <span className="svg-icon menu-icon">
                      <Icon>star</Icon>
                    </span>
                    <span className="menu-text">ApexchartsDemo</span>
                  </NavLink>
                </li>
                {/* End: apexcharts */}

                {/* begin: chartDrillDown */}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/demo/chartDrillDown",
                    false
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/demo/chartDrillDown">
                    <span className="svg-icon menu-icon">
                      <Icon>star</Icon>
                    </span>
                    <span className="menu-text">Chart DrillDown</span>
                  </NavLink>
                </li>
                {/* End: apexcharts */}

                {/* begin PrintComponent */}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/demo/PrintComponent",
                    false
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/demo/PrintComponent">
                    <span className="svg-icon menu-icon">
                      <Icon>star</Icon>
                    </span>
                    <span className="menu-text">PrintComponentDemo</span>
                  </NavLink>
                </li>
                {/* End PrintComponent */}

                {/* begin BarcodeGenerateDemo */}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/demo/BarcodeGenerateDemo",
                    false
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/demo/BarcodeGenerateDemo">
                    <span className="svg-icon menu-icon">
                      <Icon>star</Icon>
                    </span>
                    <span className="menu-text">BarcodeGenerateDemo</span>
                  </NavLink>
                </li>
                {/* end BarcodeGenerateDemo */}

                {/*begin: Redux Demo*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/demo/reduxDemo",
                    false
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/demo/reduxDemo">
                    <span className="svg-icon menu-icon">
                      <DvrIcon></DvrIcon>
                    </span>
                    <span className="menu-text">ReduxDemo</span>
                  </NavLink>
                </li>
                {/* end redux demo */}

                {/*begin: Redux Demo*/}
                <li
                  className={`menu-item ${getMenuItemActive(
                    "/demo/tabBasic",
                    false
                  )}`}
                  aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/demo/tabBasic">
                    <span className="svg-icon menu-icon">
                      <DvrIcon></DvrIcon>
                    </span>
                    <span className="menu-text">TabBasic</span>
                  </NavLink>
                </li>
                {/* end redux demo */}
                {/*end::2 Level*/}
              </ul>
            </div>
          </li>
          {/*end::1 Level*/}

          {/* End Menu Example */}
        </>
        {/* End Demo สามารถ comment ทิ้งได้ */}

        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/",
            false
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink to="/" className="menu-link menu-toggle">
            <span className="svg-icon menu-icon">
              <Icon>star</Icon>
            </span>
            <span className="menu-text">Product</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="menu-submenu ">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              {/* Inputs */}
              {/*begin: Payment*/}
              <li
                className={`menu-item  ${getMenuItemActive("/payment")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/payment">
                  <span className="svg-icon menu-icon">
                    <Icon>star</Icon>
                  </span>
                  <span className="menu-text">Payment (Redux)</span>
                </NavLink>
              </li>
              {/* end: Payment */}

              {/*begin: Payment*/}
              <li
                className={`menu-item  ${getMenuItemActive("/income")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/income">
                  <span className="svg-icon menu-icon">
                    <Icon>star</Icon>
                  </span>
                  <span className="menu-text">Income (Redux)</span>
                </NavLink>
              </li>
              {/* end: Payment */}


              
              {/*begin: Payment*/}
              <li
                className={`menu-item  ${getMenuItemActive("/product")}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/product">
                  <span className="svg-icon menu-icon">
                    <Icon>star</Icon>
                  </span>
                  <span className="menu-text">product (Data table)</span>
                </NavLink>
              </li>
              {/* end: Payment */}



              {/*end::2 Level*/}
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}
      </ul>
      {/* end::Menu Nav */}
    </>
  );
}
