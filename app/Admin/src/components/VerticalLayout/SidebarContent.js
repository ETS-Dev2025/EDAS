import React, { useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import SimpleBar from "simplebar-react";
import MetisMenu from "metismenujs";
import withRouter from "components/Common/withRouter";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

const SidebarContent = props => {
  const ref = useRef();
  const location = useLocation();

  const activateParentDropdown = useCallback((item) => {
    item.classList.add("active");
    const parent = item.parentElement;
    const parent2El = parent.childNodes[1];

    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show");
        const parent3 = parent2.parentElement;

        if (parent3) {
          parent3.classList.add("mm-active");
          parent3.childNodes[0].classList.add("mm-active");
          const parent4 = parent3.parentElement;
          if (parent4) {
            parent4.classList.add("mm-show");
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add("mm-show");
              parent5.childNodes[0].classList.add("mm-active");
            }
          }
        }
      }
      scrollElement(item);
      return false;
    }
    scrollElement(item);
    return false;
  }, []);

  const removeActivation = (items) => {
    for (let i = 0; i < items.length; ++i) {
      const item = items[i];
      const parent = items[i].parentElement;

      if (item && item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (parent) {
        const parent2El =
          parent.childNodes && parent.childNodes.length && parent.childNodes[1]
            ? parent.childNodes[1]
            : null;
        if (parent2El && parent2El.id !== "side-menu") {
          parent2El.classList.remove("mm-show");
        }

        parent.classList.remove("mm-active");
        const parent2 = parent.parentElement;

        if (parent2) {
          parent2.classList.remove("mm-show");
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.remove("mm-active");
            parent3.childNodes[0].classList.remove("mm-active");

            const parent4 = parent3.parentElement;
            if (parent4) {
              parent4.classList.remove("mm-show");
              const parent5 = parent4.parentElement;
              if (parent5) {
                parent5.classList.remove("mm-show");
                parent5.childNodes[0].classList.remove("mm-active");
              }
            }
          }
        }
      }
    }
  };

  const activeMenu = useCallback(() => {
    const pathName = location.pathname;
    let matchingMenuItem = null;
    const ul = document.getElementById("side-menu");
    const items = ul.getElementsByTagName("a");
    removeActivation(items);

    for (let i = 0; i < items.length; ++i) {
      if (pathName === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  }, [location.pathname, activateParentDropdown]);

  useEffect(() => {
    ref.current.recalculate();
  }, []);

  useEffect(() => {
    new MetisMenu("#side-menu");
    activeMenu();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    activeMenu();
  }, [activeMenu]);

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop;
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300;
      }
    }
  }

  return (
    <React.Fragment>
      <SimpleBar className="h-100" ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <div style={{padding:20, paddingBottom:0}}>
            <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder={props.t("Search") + "..."}
                />
                <span className="bx bx-search-alt" />
              </div>
            </form>
            </div>
            <li className="menu-title">{props.t("EDAS Menu")}</li>

            {/* Home */}
            <li>
              <Link to="/dashboard">
                <i className="bx bx-home"></i>
                <span>{props.t("Home")}</span>
              </Link>
            </li>

            {/* Asset Management */}
            <li>
              <Link to="/asset-management" className="has-arrow">
                <i className="bx bx-briefcase-alt"></i>
                <span>{props.t("Asset Management")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/asset-management/vehicle-assigned-to-user">
                    {props.t("Vehicle Assigned To User")}
                  </Link>
                </li>
              </ul>
            </li>

            {/* Batch Update */}
            <li>
              <Link to="/batch-update" className="has-arrow">
                <i className="bx bx-refresh"></i>
                <span>{props.t("Batch Update")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/batch-update/auto-batch-history">
                    {props.t("Auto Batch History")}
                  </Link>
                </li>
                <li>
                  <Link to="/batch-update/control-auto-batch">
                    {props.t("Control Auto Batch")}
                  </Link>
                </li>
                <li>
                  <Link to="/batch-update/custom-system-import">
                    {props.t("Custom System Import")}
                  </Link>
                </li>
                <li>
                  <Link to="/batch-update/merge-customers">
                    {props.t("Merge Customers")}
                  </Link>
                </li>
                <li>
                  <Link to="/batch-update/pm-import">
                    {props.t("PM Import (Customer, Location and PM)")}
                  </Link>
                </li>
                <li>
                  <Link to="/batch-update/send-import-export-emails">
                    {props.t("Send Import/Export Emails To")}
                  </Link>
                </li>
              </ul>
            </li>

            {/* Company Profile */}
            <li>
              <Link to="/company-profile" className="has-arrow">
                <i className="bx bx-building"></i>
                <span>{props.t("Company Profile")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/company-profile/ccia" className="has-arrow">
                    {props.t("CCIA")}
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/company-profile/ccia/browse-ccia">
                        {props.t("Browse CCIA")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/company-profile/ccia/ccia">
                        {props.t("CCIA")}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/company-profile/company-profile">
                    {props.t("Company Profile")}
                  </Link>
                </li>
                <li>
                  <Link to="/company-profile/company-qualifications">
                    {props.t("Company Qualifications")}
                  </Link>
                </li>
                <li>
                  <Link to="/company-profile/compliance-doc">
                    {props.t("Compliance Doc")}
                  </Link>
                </li>
                <li>
                  <Link to="/company-profile/contractor-agreement" className="has-arrow">
                    {props.t("Contractor Agreement")}
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/company-profile/contractor-agreement/types">
                        {props.t("Contractor Agreement Types")}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/company-profile/customer-warranties">
                    {props.t("Customer Warranties")}
                  </Link>
                </li>
                <li>
                  <Link to="/company-profile/department-default-equipment">
                    {props.t("Department Default Equipment")}
                  </Link>
                </li>
                <li>
                  <Link to="/company-profile/department-teams">
                    {props.t("Department Teams")}
                  </Link>
                </li>
                <li>
                  <Link to="/company-profile/inductions">
                    {props.t("Inductions")}
                  </Link>
                </li>
                <li>
                  <Link to="/company-profile/qualification-images">
                    {props.t("Qualification Images")}
                  </Link>
                </li>
                <li>
                  <Link to="/company-profile/qualification-field-setup">
                    {props.t("QualificationFieldSetup")}
                  </Link>
                </li>
                <li>
                  <Link to="/company-profile/qualifications-inductions">
                    {props.t("Qualifications/Inductions")}
                  </Link>
                </li>
                <li>
                  <Link to="/company-profile/terms-and-conditions">
                    {props.t("Terms and Conditions")}
                  </Link>
                </li>
                <li>
                  <Link to="/company-profile/warranty-providers">
                    {props.t("Warranty Providers")}
                  </Link>
                </li>
              </ul>
            </li>

            {/* Customer Management */}
            <li>
              <Link to="/customer-management" className="has-arrow">
                <i className="bx bx-user"></i>
                <span>{props.t("Cust. Management")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/customer-management/customers">
                    {props.t("Customers")}
                  </Link>
                </li>
                <li>
                  <Link to="/customer-management/job" className="has-arrow">
                    {props.t("Job")}
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/customer-management/job/allowed-status-change-setup">
                        {props.t("Allowed Status Change Setup")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer-management/job/assigned-jobs-to-release">
                        {props.t("Assigned Jobs To Release")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer-management/job/jobs-google">
                        {props.t("Jobs Google")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer-management/job/link-tickets-for-update">
                        {props.t("Link Tickets For Update")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer-management/job/non-charge-jobs">
                        {props.t("Non Charge Jobs")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer-management/job/process-parts-required">
                        {props.t("Process Parts Required")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer-management/job/set-columns-for-view-jobs">
                        {props.t("Set Columns for View Jobs")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer-management/job/setup-kanban-job-status">
                        {props.t("Setup Kanban Job Status")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer-management/job/sub-worktype">
                        {props.t("Sub WorkType")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer-management/job/unbooked-jobs">
                        {props.t("Unbooked Jobs")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer-management/job/unit-of-measure">
                        {props.t("Unit of Measure")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer-management/job/unit-outputs">
                        {props.t("Unit Outputs")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer-management/job/view-defects">
                        {props.t("View Defects")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer-management/job/view-jobs">
                        {props.t("View Jobs")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer-management/job/work-performed-group-pretext">
                        {props.t("Work Performed Group Pretext")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer-management/job/work-performed-pretext">
                        {props.t("Work Performed Pretext")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer-management/job/work-requests">
                        {props.t("Work Requests")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer-management/job/settings">
                        {props.t("Settings")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer-management/job/set-up">
                        {props.t("Set up")}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/customer-management/location" className="has-arrow">
                    {props.t("Location")}
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/customer-management/location/location-area">
                        {props.t("Location Area")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer-management/location/location-area-default-systems">
                        {props.t("Location Area Default Systems")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer-management/location/location-category">
                        {props.t("Location Category")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer-management/location/location-prefix">
                        {props.t("Location Prefix")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer-management/location/location-system-details">
                        {props.t("Location System Details")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer-management/location/location-system-legend">
                        {props.t("Location System Legend")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer-management/location/location-system-widgets">
                        {props.t("Location System Widgets")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer-management/location/location-type">
                        {props.t("Location Type")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer-management/location/locations-google">
                        {props.t("Locations Google")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer-management/location/view-location-system-summary">
                        {props.t("View Location System Summary")}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/customer-management/locations">
                    {props.t("Locations")}
                  </Link>
                </li>
                <li>
                  <Link to="/customer-management/pm" className="has-arrow">
                    {props.t("PM")}
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/customer-management/pm/work-type-default-category">
                        {props.t("Work Type Default Category")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/customer-management/pm/work-types">
                        {props.t("Work Types")}
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Dashboard Settings */}
            <li>
              <Link to="/dashboard-settings" className="has-arrow">
                <i className="bx bx-dialpad-alt"></i>
                <span>{props.t("Dashboard Settings")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/dashboard-settings/dashboard-items">
                    {props.t("Dashboard Items")}
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard-settings/dashboard-views">
                    {props.t("Dashboard Views")}
                  </Link>
                </li>
              </ul>
            </li>

            {/* Email */}
            <li>
              <Link to="/email" className="has-arrow">
                <i className="bx bx-envelope"></i>
                <span>{props.t("Email")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/email/attachment-list">
                    {props.t("Attachment List")}
                  </Link>
                </li>
                <li>
                  <Link to="/email/email-asset-survey">
                    {props.t("Email Asset Survey")}
                  </Link>
                </li>
                <li>
                  <Link to="/email/email-edit-run-from-list">
                    {props.t("Email Edit Run From List")}
                  </Link>
                </li>
                <li>
                  <Link to="/email/email-log" className="has-arrow">
                    {props.t("Email Log")}
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/email/email-log/email-received-log">
                        {props.t("Email Received Log")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/email/email-log/email-sent-log">
                        {props.t("Email Sent Log")}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/email/email-run-from-group">
                    {props.t("Email Run From Group")}
                  </Link>
                </li>
                <li>
                  <Link to="/email/email-system">
                    {props.t("Email System")}
                  </Link>
                </li>
                <li>
                  <Link to="/email/email-templates">
                    {props.t("Email Templates")}
                  </Link>
                </li>
                <li>
                  <Link to="/email/sms-gateways">
                    {props.t("SMS Gateways")}
                  </Link>
                </li>
              </ul>
            </li>

            {/* Financial */}
            <li>
              <Link to="/financial" className="has-arrow">
                <i className="bx bx-dollar"></i>
                <span>{props.t("Financial")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/financial/account-items">
                    {props.t("Account Items")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/auto-batch-code">
                    {props.t("Auto Batch Code")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/charge-codes">
                    {props.t("Charge Codes")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/charge-item-type">
                    {props.t("Charge Item Type")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/charge-items">
                    {props.t("Charge Items")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/charge-master">
                    {props.t("Charge Master")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/consumer-price-index">
                    {props.t("Consumer Price Index")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/default-category-charge-code">
                    {props.t("Default Category Charge Code")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/finance-terms">
                    {props.t("Finance Terms")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/financial-items">
                    {props.t("Financial Items")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/financial-system-error">
                    {props.t("Financial System Error")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/financial-systems">
                    {props.t("Financial Systems")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/financial-to-post" className="has-arrow">
                    {props.t("Financial to Post")}
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/financial/financial-to-post/financial-system-posting-logs">
                        {props.t("Financial System Posting Logs")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/financial/financial-to-post/invoices-to-post">
                        {props.t("Invoices to Post")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/financial/financial-to-post/payments-to-post">
                        {props.t("Payments to Post")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/financial/financial-to-post/purchase-to-post">
                        {props.t("Purchase to Post")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/financial/financial-to-post/supplier-invoices-to-post">
                        {props.t("Supplier Invoices to Post")}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/financial/finsys-guid-desc">
                    {props.t("FinSysGUIDDesc")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/invoice-layout">
                    {props.t("Invoice Layout")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/invoice-terms">
                    {props.t("Invoice Terms")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/monthly-claim">
                    {props.t("Monthly Claim")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/monthly-claim-customers">
                    {props.t("Monthly Claim Customers")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/out-of-pocket-expense-items">
                    {props.t("Out of Pocket Expense Items")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/payment-method-header">
                    {props.t("Payment Method Header")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/payment-methods">
                    {props.t("Payment Methods")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/payment-systems">
                    {props.t("Payment Systems")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/payments-request">
                    {props.t("Payments Request")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/payroll-category">
                    {props.t("Payroll Category")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/periodic-payment-tokens">
                    {props.t("Periodic Payment Tokens")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/reports" className="has-arrow">
                    {props.t("Reports")}
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/financial/reports/bank-account-statements">
                        {props.t("Bank Account Statements")}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/financial/staff-charge-rates">
                    {props.t("Staff Charge Rates")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/undeposited-funds">
                    {props.t("Undeposited Funds")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/upload-payments-from-fin-sys">
                    {props.t("Upload Payments from Fin Sys")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/uploaded-payments-log">
                    {props.t("Uploaded Payments Log")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/view-invoices">
                    {props.t("View Invoices")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/view-monthly-invoices">
                    {props.t("View Monthly Invoices")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/view-payments">
                    {props.t("View Payments")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/view-supplier-invoice">
                    {props.t("View Supplier Invoice")}
                  </Link>
                </li>
                <li>
                  <Link to="/financial/work-type-service-fee-relation">
                    {props.t("Work Type Service Fee Relation")}
                  </Link>
                </li>
              </ul>
            </li>

            {/* Forms */}
            <li>
              <Link to="/forms">
                <i className="bx bx-file"></i>
                <span>{props.t("Forms")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/forms/exams-polls-and-reports">
                    {props.t("Exams Polls and Reports")}
                  </Link>
                </li>
              </ul>
            </li>

            {/* Help Documents */}
            <li>
              <Link to="/help-documents">
                <i className="bx bx-help-circle"></i>
                <span>{props.t("Help Documents")}</span>
              </Link>
            </li>

            {/* Inventory */}
            <li>
              <Link to="/inventory" className="has-arrow">
                <i className="bx bx-store"></i>
                <span>{props.t("Inventory")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/inventory/items" className="has-arrow">
                    {props.t("Items")}
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/inventory/items/items-in-stock">
                        {props.t("Items In Stock")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/inventory/items/items-in-store">
                        {props.t("Items In Store")}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/inventory/picking-list">
                    {props.t("Picking List")}
                  </Link>
                </li>
                <li>
                  <Link to="/inventory/purchase-orders">
                    {props.t("Purchase Orders")}
                  </Link>
                </li>
                <li>
                  <Link to="/inventory/store-locations" className="has-arrow">
                    {props.t("Store Locations")}
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/inventory/store-locations/store-location-reorders">
                        {props.t("Store Location Reorders")}
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Maintenance */}
            <li>
              <Link to="/maintenance" className="has-arrow">
                <i className="bx bx-wrench"></i>
                <span>{props.t("Maintenance")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/maintenance/batch-system-type-active-for-pm">
                    {props.t("Batch System Type Active for PM")}
                  </Link>
                </li>
                <li>
                  <Link to="/maintenance/generate-pm-from-jobs">
                    {props.t("Generate PM From Jobs")}
                  </Link>
                </li>
                <li>
                  <Link to="/maintenance/pm-by-month">
                    {props.t("PM By Month")}
                  </Link>
                </li>
                <li>
                  <Link to="/maintenance/pm-due-batch">
                    {props.t("PM Due Batch")}
                  </Link>
                </li>
                <li>
                  <Link to="/maintenance/programmed-maintenance">
                    {props.t("Programmed Maintenance")}
                  </Link>
                </li>
              </ul>
            </li>

            {/* Marketing */}
            <li>
              <Link to="/marketing" className="has-arrow">
                <i className="bx bx-bullseye"></i>
                <span>{props.t("Marketing")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/marketing/competitors">
                    {props.t("Competitors")}
                  </Link>
                </li>
                <li>
                  <Link to="/marketing/enquiry" className="has-arrow">
                    {props.t("Enquiry")}
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/marketing/enquiry/enquiry-types">
                        {props.t("Enquiry Types")}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/marketing/lead-forms">
                    {props.t("Lead Forms")}
                  </Link>
                </li>
                <li>
                  <Link to="/marketing/lead-source">
                    {props.t("Lead Source")}
                  </Link>
                </li>
                <li>
                  <Link to="/marketing/leads">
                    {props.t("Leads")}
                  </Link>
                </li>
                <li>
                  <Link to="/marketing/leads-status">
                    {props.t("Leads Status")}
                  </Link>
                </li>
                <li>
                  <Link to="/marketing/marketing-by-job-date-range">
                    {props.t("Marketing By Job Date Range")}
                  </Link>
                </li>
                <li>
                  <Link to="/marketing/promotion">
                    {props.t("Promotion")}
                  </Link>
                </li>
              </ul>
            </li>

            {/* Notifications */}
            <li>
              <Link to="/notifications" className="has-arrow">
                <i className="bx bx-bell"></i>
                <span>{props.t("Notifications")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/notifications/notification-enabled">
                    {props.t("Notification Enabled")}
                  </Link>
                </li>
                <li>
                  <Link to="/notifications/notifications-group">
                    {props.t("Notifications Group")}
                  </Link>
                </li>
                <li>
                  <Link to="/notifications/notify-new-pm-jobs">
                    {props.t("Notify New PM Jobs")}
                  </Link>
                </li>
                <li>
                  <Link to="/notifications/status-result-alert">
                    {props.t("Status Result Alert")}
                  </Link>
                </li>
                <li>
                  <Link to="/notifications/system-notices">
                    {props.t("System Notices")}
                  </Link>
                </li>
                <li>
                  <Link to="/notifications/view-messages">
                    {props.t("View Messages")}
                  </Link>
                </li>
                <li>
                  <Link to="/notifications/view-notifications-define">
                    {props.t("View Notifications Define")}
                  </Link>
                </li>
              </ul>
            </li>

            {/* Quoting */}
            <li>
              <Link to="/quoting" className="has-arrow">
                <i className="bx bx-file"></i>
                <span>{props.t("Quoting")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/quoting/quote-section-template">
                    {props.t("Quote Section Template")}
                  </Link>
                </li>
                <li>
                  <Link to="/quoting/quote-templates">
                    {props.t("Quote Templates")}
                  </Link>
                </li>
                <li>
                  <Link to="/quoting/view-quotes">
                    {props.t("View Quotes")}
                  </Link>
                </li>
              </ul>
            </li>

            {/* Reports */}
            <li>
              <Link to="/reports" className="has-arrow">
                <i className="bx bx-bar-chart"></i>
                <span>{props.t("Reports")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/reports/admin-autobatch-setup-report">
                    {props.t("Admin Autobatch Setup Report")}
                  </Link>
                </li>
                <li>
                  <Link to="/reports/browse-reports">
                    {props.t("Browse Reports")}
                  </Link>
                </li>
                <li>
                  <Link to="/reports/bulk-job-details-export">
                    {props.t("Bulk Job Details Export")}
                  </Link>
                </li>
                <li>
                  <Link to="/reports/customer-default-report-types">
                    {props.t("Customer Default Report Types")}
                  </Link>
                </li>
                <li>
                  <Link to="/reports/customer-default-system-report-types">
                    {props.t("Customer Default System Report Types")}
                  </Link>
                </li>
                <li>
                  <Link to="/reports/default-system-report-type">
                    {props.t("Default System Report Type")}
                  </Link>
                </li>
                <li>
                  <Link to="/reports/enquiry-report-recommendation">
                    {props.t("Enquiry Report Recommendation")}
                  </Link>
                </li>
                <li>
                  <Link to="/reports/export-invoices-to-csv">
                    {props.t("Export Invoices To CSV")}
                  </Link>
                </li>
                <li>
                  <Link to="/reports/invoice-reports">
                    {props.t("Invoice Reports")}
                  </Link>
                </li>
                <li>
                  <Link to="/reports/move-report-tables-to-new-activity">
                    {props.t("Move Report Tables To New Activity")}
                  </Link>
                </li>
                <li>
                  <Link to="/reports/picking-list-report">
                    {props.t("Picking List Report")}
                  </Link>
                </li>
                <li>
                  <Link to="/reports/report-alert-work-types">
                    {props.t("Report Alert Work Types")}
                  </Link>
                </li>
                <li>
                  <Link to="/reports/report-images">
                    {props.t("Report Images")}
                  </Link>
                </li>
                <li>
                  <Link to="/reports/report-types">
                    {props.t("Report Types")}
                  </Link>
                </li>
                <li>
                  <Link to="/reports/view-batch-report">
                    {props.t("View Batch Report")}
                  </Link>
                </li>
                <li>
                  <Link to="/reports/view-systems">
                    {props.t("View Systems")}
                  </Link>
                </li>
              </ul>
            </li>

            {/* Scheduling */}
            <li>
              <Link to="/scheduling" className="has-arrow">
                <i className="bx bx-calendar"></i>
                
                <span>{props.t("Scheduling")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/scheduling/assign-user-shifts">
                    {props.t("Assign User Shifts")}
                  </Link>
                </li>
                <li>
                  <Link to="/scheduling/booking-times">
                    {props.t("Booking Times")}
                  </Link>
                </li>
                <li>
                  <Link to="/scheduling/break-times">
                    {props.t("Break Times")}
                  </Link>
                </li>
                <li>
                  <Link to="/scheduling/customer-pm-schedule">
                    {props.t("Customer PM Schedule")}
                  </Link>
                </li>
                <li>
                  <Link to="/scheduling/day-pilot-gantt-chart">
                    {props.t("Day Pilot Gantt Chart")}
                  </Link>
                </li>
                <li>
                  <Link to="/scheduling/gantt-chart">
                    {props.t("Gantt Chart")}
                  </Link>
                </li>
                <li>
                  <Link to="/scheduling/job-schedule">
                    {props.t("Job Schedule")}
                  </Link>
                </li>
                <li>
                  <Link to="/scheduling/map-days">
                    {props.t("Map Days")}
                  </Link>
                </li>
                <li>
                  <Link to="/scheduling/map-legend">
                    {props.t("Map Legend")}
                  </Link>
                </li>
                <li>
                  <Link to="/scheduling/monthly-calendar">
                    {props.t("Monthly Calendar")}
                  </Link>
                </li>
                <li>
                  <Link to="/scheduling/operating-hours">
                    {props.t("Operating Hours")}
                  </Link>
                </li>
                <li>
                  <Link to="/scheduling/reschedule-req">
                    {props.t("Reschedule Req.")}
                  </Link>
                </li>
                <li>
                  <Link to="/scheduling/roster">
                    {props.t("Roster")}
                  </Link>
                </li>
                <li>
                  <Link to="/scheduling/roster-types">
                    {props.t("Roster Types")}
                  </Link>
                </li>
                <li>
                  <Link to="/scheduling/run-scheduler">
                    {props.t("Run Scheduler")}
                  </Link>
                </li>
                <li>
                  <Link to="/scheduling/run-scheduling-setup">
                    {props.t("Run Scheduling Setup")}
                  </Link>
                </li>
                <li>
                  <Link to="/scheduling/runsheet">
                    {props.t("Runsheet")}
                  </Link>
                </li>
                <li>
                  <Link to="/scheduling/schedule-work-contract">
                    {props.t("Schedule Work Contract")}
                  </Link>
                </li>
                <li>
                  <Link to="/scheduling/stop-clock-hours">
                    {props.t("Stop Clock Hours")}
                  </Link>
                </li>
                <li>
                  <Link to="/scheduling/time-interval">
                    {props.t("Time Interval")}
                  </Link>
                </li>
                <li>
                  <Link to="/scheduling/todays-jobs-map">
                    {props.t("Todays Jobs Map")}
                  </Link>
                </li>
                <li>
                  <Link to="/scheduling/user-schedule">
                    {props.t("User Schedule")}
                  </Link>
                </li>
                <li>
                  <Link to="/scheduling/view-map">
                    {props.t("View Map")}
                  </Link>
                </li>
              </ul>
            </li>

            {/* Supplier */}
            <li>
              <Link to="/supplier">
                <i className="bx bx-store-alt"></i>
                <span>{props.t("Supplier")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/supplier/view-suppliers">
                    {props.t("View Suppliers")}
                  </Link>
                </li>
              </ul>
            </li>

            {/* System Configuration */}
            <li>
              <Link to="/system-configuration" className="has-arrow">
                <i className="bx bx-cog"></i>
                <span>{props.t("System Configuration")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/system-configuration/curl-request-logs">
                    {props.t("CURL Request Logs")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/default-report-types">
                    {props.t("Default Report Types")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/form" className="has-arrow">
                    {props.t("Form")}
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/system-configuration/form/form-global-question">
                        {props.t("Form Global Question")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/system-configuration/form/form-sql-columns">
                        {props.t("Form SQL Columns")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/system-configuration/form/form-sql-queries">
                        {props.t("Form SQL Queries")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/system-configuration/form/poll-input-types">
                        {props.t("Poll Input Types")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/system-configuration/form/poll-types">
                        {props.t("Poll Types")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/system-configuration/form/setup-forms">
                        {props.t("Setup Forms")}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/system-configuration/imports">
                    {props.t("Imports")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/letter-function-order">
                    {props.t("Letter Function Order")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/letter-templates">
                    {props.t("Letter Templates")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/matrix-column">
                    {props.t("Matrix Column")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/matrix-data">
                    {props.t("Matrix Data")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/menu-system">
                    {props.t("Menu System")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/mime-types">
                    {props.t("MIME Types")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/mobile-device-setup">
                    {props.t("Mobile Device Setup")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/order-import-log">
                    {props.t("Order Import Log")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/pat-tester-uploads">
                    {props.t("PAT Tester Uploads")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/pcr-setup">
                    {props.t("PCR Setup")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/pcr-tree-setup">
                    {props.t("PCR Tree Setup")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/postcodes">
                    {props.t("Postcodes")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/query-builder-maint-screens">
                    {props.t("Query Builder Maint Screens")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/record-edit-time-control">
                    {props.t("Record Edit Time Control")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/regions">
                    {props.t("Regions")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/set-columns-by-program-name">
                    {props.t("Set Columns By Program Name")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/set-directories-access">
                    {props.t("Set Directories Access")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/set-tabs-by-work-type-by-role">
                    {props.t("Set Tabs By Work Type By Role")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/set-up" className="has-arrow">
                    {props.t("Set up")}
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/system-configuration/set-up/codes">
                        {props.t("Codes")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/system-configuration/set-up/colours">
                        {props.t("Colours")}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/system-configuration/settings" className="has-arrow">
                    {props.t("Settings")}
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/system-configuration/settings/customer-file-name-pattern">
                        {props.t("Customer File Name Pattern")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/system-configuration/settings/date-fields-colour-setup">
                        {props.t("Date Fields Colour Setup")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/system-configuration/settings/date-range">
                        {props.t("Date Range")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/system-configuration/settings/days-colour">
                        {props.t("Days Colour")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/system-configuration/settings/directories">
                        {props.t("Directories")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/system-configuration/settings/file-name-pattern">
                        {props.t("File Name Pattern")}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/system-configuration/setup-order">
                    {props.t("Setup Order")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/setup-trackers">
                    {props.t("Setup Trackers")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/sql-tables">
                    {props.t("SQL Tables")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/state">
                    {props.t("State")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/swms" className="has-arrow">
                    {props.t("SWMS")}
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/system-configuration/swms/risk-activity-group">
                        {props.t("Risk Activity Group")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/system-configuration/swms/risk-activity-step">
                        {props.t("Risk Activity Step")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/system-configuration/swms/risk-level">
                        {props.t("Risk Level")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/system-configuration/swms/risk-matrix">
                        {props.t("Risk Matrix")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/system-configuration/swms/risk-matrix-consequence">
                        {props.t("Risk Matrix Consequence")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/system-configuration/swms/risk-matrix-likelihood">
                        {props.t("Risk Matrix Likelihood")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/system-configuration/swms/risk-matrix-risk">
                        {props.t("Risk Matrix Risk")}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/system-configuration/system-activities">
                    {props.t("System Activities")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/system-activity-types">
                    {props.t("System Activity Types")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/system-conditions">
                    {props.t("System Conditions")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/system-field-setup">
                    {props.t("System Field Setup")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/system-sections">
                    {props.t("System Sections")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/system-type">
                    {props.t("System Type")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/time-zone-offset">
                    {props.t("Time Zone Offset")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/view-soap-setup">
                    {props.t("View SOAP Setup")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/web-pages">
                    {props.t("Web Pages")}
                  </Link>
                </li>
                <li>
                  <Link to="/system-configuration/zones">
                    {props.t("Zones")}
                  </Link>
                </li>
              </ul>
            </li>

            {/* Timesheet */}
            <li>
              <Link to="/timesheet" className="has-arrow">
                <i className="bx bx-time"></i>
                <span>{props.t("Timesheet")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/timesheet/timesheet-reports">
                    {props.t("Timesheet Reports")}
                  </Link>
                </li>
                <li>
                  <Link to="/timesheet/timesheet-shifts">
                    {props.t("Timesheet Shifts")}
                  </Link>
                </li>
                <li>
                  <Link to="/timesheet/timesheet-weeks">
                    {props.t("Timesheet Weeks")}
                  </Link>
                </li>
                <li>
                  <Link to="/timesheet/view-timesheet">
                    {props.t("View Timesheet")}
                  </Link>
                </li>
                <li>
                  <Link to="/timesheet/view-timesheet-rdo">
                    {props.t("View Timesheet RDO")}
                  </Link>
                </li>
                <li>
                  <Link to="/timesheet/view-user-shifts">
                    {props.t("View User Shifts")}
                  </Link>
                </li>
              </ul>
            </li>

            {/* User */}
            <li>
              <Link to="/user" className="has-arrow">
                <i className="bx bx-user-circle"></i>
                <span>{props.t("User")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/user/leave-request-history">
                    {props.t("Leave Request History")}
                  </Link>
                </li>
                <li>
                  <Link to="/user/my-account-profile">
                    {props.t("My Account Profile")}
                  </Link>
                </li>
                <li>
                  <Link to="/user/register-requests">
                    {props.t("Register Requests")}
                  </Link>
                </li>
                <li>
                  <Link to="/user/staff-skill-level">
                    {props.t("Staff Skill Level")}
                  </Link>
                </li>
                <li>
                  <Link to="/user/user-accounts">
                    {props.t("User Accounts")}
                  </Link>
                </li>
                <li>
                  <Link to="/user/user-allowance-types">
                    {props.t("User Allowance Types")}
                  </Link>
                </li>
                <li>
                  <Link to="/user/user-field-descriptions">
                    {props.t("User Field Descriptions")}
                  </Link>
                </li>
              </ul>
            </li>

            {/* Miscellaneous */}
           
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  );
};

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
};

export default withRouter(withTranslation()(SidebarContent));