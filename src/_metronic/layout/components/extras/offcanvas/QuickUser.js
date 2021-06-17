/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,no-undef */
import React from "react";
// import SVG from "react-inlinesvg";
import { useHistory } from "react-router-dom";
// import { toAbsoluteUrl } from "../../../../_helpers";

export function QuickUser() {
  const history = useHistory();

  const logoutClick = () => {
    const toggle = document.getElementById("kt_quick_user_toggle");
    if (toggle) {
      toggle.click();
    }
    history.push("/logout");
  };

  return (
    <div
      id="kt_quick_user"
      className="offcanvas offcanvas-right offcanvas p-10"
    >
      <div className="offcanvas-header d-flex align-items-center justify-content-between pb-5">
        <h3 className="font-weight-bold m-0">
          Profile
          {/* <small className="text-muted font-size-sm ml-2">12 messages</small> */}
        </h3>
        <a
          href="#"
          className="btn btn-xs btn-icon btn-light btn-hover-primary"
          id="kt_quick_user_close"
        >
          <i className="ki ki-close icon-xs text-muted" />
        </a>
      </div>

      <div className="offcanvas-content pr-5 mr-n5">
        <div className="d-flex align-items-center mt-5">
          <div className="d-flex flex-column">
            <a
              href="#"
              className="font-weight-bold font-size-h5 text-dark-75 text-hover-primary"
            >
              03438 - ปาริฉัตร ใบบัวเผื่อน
            </a>
            <div className="text-muted mt-1">แผนก : พัฒนาระบบ</div>
            <div className="text-muted mt-1">สาขา : สำนักงานใหญ่</div>
            <button
              className="btn btn-light-primary btn-bold"
              onClick={logoutClick}
            >
              Sign out
            </button>
          </div>
        </div>

        <div className="separator separator-dashed mt-8 mb-5" />
      </div>
    </div>
  );
}
