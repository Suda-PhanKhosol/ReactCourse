import React, { Suspense } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import PrivateRoute from "./modules/Auth/components/PrivateRoute";
import ErrorUnAuthorized from "./modules/Auth/pages/ErrorUnAuthorized";
import TokenHandler from "./modules/Auth/components/TokenHandler";
import { ROLES } from "../Constants";
import AlertDemo from "./modules/_Demo/pages/AlertDemo";
import Test from "./pages/Test";
import ReduxDemo from "./modules/_Demo/pages/ReduxDemo";
import FormDemo from "./modules/_Demo/pages/formComponents/FormDemo";
import FormWithTextField from "./modules/_Demo/pages/formComponents/FormWithTextField";
import FormWithAutoComplete from "./modules/_Demo/pages/formComponents/FormWithAutoComplete";
import FormWithCheckBox from "./modules/_Demo/pages/formComponents/FormWithCheckBox";
import FormWithCheckboxGroup from "./modules/_Demo/pages/formComponents/FormWithCheckboxGroup";
import FormWithDatePicker from "./modules/_Demo/pages/formComponents/FormWithDatePicker";
import FormWithDateTimePicker from "./modules/_Demo/pages/formComponents/FormWithDateTimePicker";
import FormWithDropdown from "./modules/_Demo/pages/formComponents/FormWithDropdown";
import FormWithDropdownCascade from "./modules/_Demo/pages/formComponents/FormWithDropdownCascade";
import FormWithRadioGroup from "./modules/_Demo/pages/formComponents/FormWithRadioGroup";
import FormWithRating from "./modules/_Demo/pages/formComponents/FormWithRating";
import FormWithSlider from "./modules/_Demo/pages/formComponents/FormWithSlider";
import FormWithSwitch from "./modules/_Demo/pages/formComponents/FormWithSwitch";
import FormWithTimePicker from "./modules/_Demo/pages/formComponents/FormWithTimePicker";
import DatatableListDemo from "./modules/_Demo/pages/DatatableListDemo";
import pdfGenerrate from "./modules/_Demo/pages/PdfGenerateDemo";
import QRGenerateDemo from "./modules/_Demo/pages/QRGenerateDemo";
import BarcodeGenerateDemo from "./modules/_Demo/pages/BarcodeGenerateDemo";
import ChartDemo from "./modules/_Demo/pages/ChartDemo";
import PrintComponent from "./modules/_Demo/pages/PrintComponent";
import FormWithTextMaskCardId from "./modules/_Demo/pages/formComponents/FormWithTextMaskCardId";
import FormWithTextNumber from "./modules/_Demo/pages/formComponents/FormWithTextNumber";
import FormWithUploader from "./modules/_Demo/pages/formComponents/FormWithUploader";
import TabBasic from "./modules/_Demo/pages/TabBasic";

import ChartDrillDownDemo from "./modules/_Demo/pages/ChartDrillDownDemo";
import QRReaderDemo from "./modules/_Demo/pages/QRReaderDemo";
import Payment from "./modules/Payment/pages/Payment";
import Income from "./modules/Payment/pages/Income";
import Product from "./modules/Product/page/Product";
import ProductAddEdit from "./modules/Product/page/ProductAddEdit";




export default function BasePage(props) {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {<Redirect exact from="/" to="/test" />}
        <ContentRoute exact path="/test" component={Test} title="test" />

        {/* Start Demo part สามารถ comment ได้ */}
        <ContentRoute exact path="/alert" component={AlertDemo} title="alert" />
        <PrivateRoute
          exact
          path="/test"
          roles={[ROLES.admin, ROLES.developer]}
          component={Test}
        />
        <ContentRoute
          exact
          path="/demo/reduxDemo"
          component={ReduxDemo}
          title="reduxDemo"
        />
        <ContentRoute
          exact
          path="/demo/formDemo"
          component={FormDemo}
          title="formDemo"
        />
        <ContentRoute
          exact
          path="/demo/formWithAutoComplete"
          component={FormWithAutoComplete}
          title="formWithAutoComplete"
        />
        <ContentRoute
          exact
          path="/demo/formWithCheckBox"
          component={FormWithCheckBox}
          title="FormWithCheckBox"
        />
        <ContentRoute
          exact
          path="/demo/formWithCheckboxGroup"
          component={FormWithCheckboxGroup}
          title="FormWithCheckboxGroup"
        />
        <ContentRoute
          exact
          path="/demo/formWithDatePicker"
          component={FormWithDatePicker}
          title="FormWithDatePicker"
        />
        <ContentRoute
          exact
          path="/demo/formWithDateTimePicker"
          component={FormWithDateTimePicker}
          title="FormWithDateTimePicker"
        />
        <ContentRoute
          exact
          path="/demo/formWithDropdown"
          component={FormWithDropdown}
          title="FormWithDropdown"
        />
        <ContentRoute
          exact
          path="/demo/formWithDropdownCascade"
          component={FormWithDropdownCascade}
          title="FormWithDropdownCascade"
        />
        <ContentRoute
          exact
          path="/demo/formWithRadioGroup"
          component={FormWithRadioGroup}
          title="FormWithRadioGroup"
        />
        <ContentRoute
          exact
          path="/demo/formWithRating"
          component={FormWithRating}
          title="FormWithRating"
        />
        <ContentRoute
          exact
          path="/demo/formWithSlider"
          component={FormWithSlider}
          title="FormWithSlider"
        />
        <ContentRoute
          exact
          path="/demo/formWithSwitch"
          component={FormWithSwitch}
          title="FormWithSwitch"
        />
        <ContentRoute
          exact
          path="/demo/formWithTextMaskCardId"
          component={FormWithTextMaskCardId}
          title="FormWithTextMaskCardId"
        />
        <ContentRoute
          exact
          path="/demo/formWithTextField"
          component={FormWithTextField}
          title="FormWithTextField"
        />
        <ContentRoute
          exact
          path="/demo/formWithTextNumber"
          component={FormWithTextNumber}
          title="FormWithTextNumber"
        />
        <ContentRoute
          exact
          path="/demo/formWithTimePicker"
          component={FormWithTimePicker}
          title="FormWithTimePicker"
        />
        <ContentRoute
          exact
          path="/demo/formWithUploader"
          component={FormWithUploader}
          title="FormWithUploader"
        />
        <ContentRoute
          exact
          path="/demo/pdfGenerrate"
          component={pdfGenerrate}
          title="pdfGenerrate"
        />
        <ContentRoute
          exact
          path="/demo/QRGenerateDemo"
          component={QRGenerateDemo}
          title="QRGenerateDemo"
        />
        <ContentRoute
          exact
          path="/demo/QRReaderDemo"
          component={QRReaderDemo}
          title="QRReaderDemo"
        />
        <ContentRoute
          exact
          path="/demo/BarcodeGenerateDemo"
          component={BarcodeGenerateDemo}
          title="BarcodeGenerateDemo"
        />
        <ContentRoute
          exact
          path="/demo/apexcharts"
          component={ChartDemo}
          title="ChartDemo"
        />
        <ContentRoute
          exact
          path="/demo/chartDrillDown"
          component={ChartDrillDownDemo}
          title="ChartDrillDownDemo"
        />
        <ContentRoute
          exact
          path="/demo/PrintComponent"
          component={PrintComponent}
          title="PrintComponent"
        />
        <ContentRoute
          exact
          path="/demo/datatableList"
          component={DatatableListDemo}
          title="DatatableListDemo"
        />
        <ContentRoute
          exact
          path="/demo/tabBasic"
          component={TabBasic}
          title="Tab Basic"
        />
        {/* End Demo part สามารถ comment ได้ */}


        <ContentRoute
            exact
            path="/payment"
            component={Payment}
            title="Payment"
          />

        <ContentRoute
            exact
            path="/income"
            component={Income}
            title="Income"
          />    

        <ContentRoute
            exact
            path="/product"
            component={Product}
            title="Product"
          />   

            <ContentRoute
            exact
            path="/product/edit/:id"
            component={ProductAddEdit}
            title="Product"
          /> 

            <ContentRoute
            exact
            path="/product/new"
            component={ProductAddEdit}
            title="Product"
          />    

        <Route path="/errorUnAuthorized" component={ErrorUnAuthorized} />

        {/* nothing match - redirect to error */}
        <Redirect to="/error" />
      </Switch>
      <TokenHandler></TokenHandler>
    </Suspense>
  );
}
