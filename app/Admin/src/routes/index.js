import React from "react";
import { Navigate } from "react-router-dom";

// Pages from EDAS based on menu_paths
import Home from "../pages/EDAS/home/index";
import AssetManagement from "../pages/EDAS/asset-management/index";
import VehicleAssignedToUser from "../pages/EDAS/asset-management/vehicle-assigned-to-user/index";
import BatchUpdate from "../pages/EDAS/batch-update/index";
import AutoBatchHistory from "../pages/EDAS/batch-update/auto-batch-history/index";
import ControlAutoBatch from "../pages/EDAS/batch-update/control-auto-batch/index";
import CustomSystemImport from "../pages/EDAS/batch-update/custom-system-import/index";
import MergeCustomers from "../pages/EDAS/batch-update/merge-customers/index";
import PmImport from "../pages/EDAS/batch-update/pm-import/index";
import SendImportExportEmails from "../pages/EDAS/batch-update/send-import-export-emails/index";
import CompanyProfile from "../pages/EDAS/company-profile/index";
import Ccia from "../pages/EDAS/company-profile/ccia/index";
import BrowseCcia from "../pages/EDAS/company-profile/ccia/browse-ccia/index";
import CciaSub from "../pages/EDAS/company-profile/ccia/ccia/index";
import CompanyProfileSub from "../pages/EDAS/company-profile/company-profile/index";
import CompanyQualifications from "../pages/EDAS/company-profile/company-qualifications/index";
import ComplianceDoc from "../pages/EDAS/company-profile/compliance-doc/index";
import ContractorAgreement from "../pages/EDAS/company-profile/contractor-agreement/index";
import ContractorAgreementTypes from "../pages/EDAS/company-profile/contractor-agreement/types/index";
import CustomerWarranties from "../pages/EDAS/company-profile/customer-warranties/index";
import DepartmentDefaultEquipment from "../pages/EDAS/company-profile/department-default-equipment/index";
import DepartmentTeams from "../pages/EDAS/company-profile/department-teams/index";
import Inductions from "../pages/EDAS/company-profile/inductions/index";
import QualificationImages from "../pages/EDAS/company-profile/qualification-images/index";
import QualificationFieldSetup from "../pages/EDAS/company-profile/qualification-field-setup/index";
import QualificationsInductions from "../pages/EDAS/company-profile/qualifications-inductions/index";
import TermsAndConditions from "../pages/EDAS/company-profile/terms-and-conditions/index";
import WarrantyProviders from "../pages/EDAS/company-profile/warranty-providers/index";
import CustomerManagement from "../pages/EDAS/customer-management/index";
import Customers from "../pages/EDAS/customer-management/customers/index";
import Job from "../pages/EDAS/customer-management/job/index";
import AllowedStatusChangeSetup from "../pages/EDAS/customer-management/job/allowed-status-change-setup/index";
import AssignedJobsToRelease from "../pages/EDAS/customer-management/job/assigned-jobs-to-release/index";
import JobsGoogle from "../pages/EDAS/customer-management/job/jobs-google/index";
import LinkTicketsForUpdate from "../pages/EDAS/customer-management/job/link-tickets-for-update/index";
import NonChargeJobs from "../pages/EDAS/customer-management/job/non-charge-jobs/index";
import ProcessPartsRequired from "../pages/EDAS/customer-management/job/process-parts-required/index";
import SetColumnsForViewJobs from "../pages/EDAS/customer-management/job/set-columns-for-view-jobs/index";
import SetupKanbanJobStatus from "../pages/EDAS/customer-management/job/setup-kanban-job-status/index";
import SubWorktype from "../pages/EDAS/customer-management/job/sub-worktype/index";
import UnbookedJobs from "../pages/EDAS/customer-management/job/unbooked-jobs/index";
import UnitOfMeasure from "../pages/EDAS/customer-management/job/unit-of-measure/index";
import UnitOutputs from "../pages/EDAS/customer-management/job/unit-outputs/index";
import ViewDefects from "../pages/EDAS/customer-management/job/view-defects/index";
import ViewJobs from "../pages/EDAS/customer-management/job/view-jobs/index";
import WorkPerformedGroupPretext from "../pages/EDAS/customer-management/job/work-performed-group-pretext/index";
import WorkPerformedPretext from "../pages/EDAS/customer-management/job/work-performed-pretext/index";
import WorkRequests from "../pages/EDAS/customer-management/job/work-requests/index";
import JobSettings from "../pages/EDAS/customer-management/job/settings/index";
import JobSetUp from "../pages/EDAS/customer-management/job/set-up/index";
import Location from "../pages/EDAS/customer-management/location/index";
import LocationArea from "../pages/EDAS/customer-management/location/location-area/index";
import LocationAreaDefaultSystems from "../pages/EDAS/customer-management/location/location-area-default-systems/index";
import LocationCategory from "../pages/EDAS/customer-management/location/location-category/index";
import LocationPrefix from "../pages/EDAS/customer-management/location/location-prefix/index";
import LocationSystemDetails from "../pages/EDAS/customer-management/location/location-system-details/index";
import LocationSystemLegend from "../pages/EDAS/customer-management/location/location-system-legend/index";
import LocationSystemWidgets from "../pages/EDAS/customer-management/location/location-system-widgets/index";
import LocationType from "../pages/EDAS/customer-management/location/location-type/index";
import LocationsGoogle from "../pages/EDAS/customer-management/location/locations-google/index";
import ViewLocationSystemSummary from "../pages/EDAS/customer-management/location/view-location-system-summary/index";
import Locations from "../pages/EDAS/customer-management/locations/index";
import Pm from "../pages/EDAS/customer-management/pm/index";
import WorkTypeDefaultCategory from "../pages/EDAS/customer-management/pm/work-type-default-category/index";
import WorkTypes from "../pages/EDAS/customer-management/pm/work-types/index";
import DashboardSettings from "../pages/EDAS/dashboard-settings/index";
import DashboardItems from "../pages/EDAS/dashboard-settings/dashboard-items/index";
import DashboardViews from "../pages/EDAS/dashboard-settings/dashboard-views/index";
import Email from "../pages/EDAS/email/index";
import AttachmentList from "../pages/EDAS/email/attachment-list/index";
import EmailAssetSurvey from "../pages/EDAS/email/email-asset-survey/index";
import EmailEditRunFromList from "../pages/EDAS/email/email-edit-run-from-list/index";
import EmailLog from "../pages/EDAS/email/email-log/index";
import EmailReceivedLog from "../pages/EDAS/email/email-log/email-received-log/index";
import EmailSentLog from "../pages/EDAS/email/email-log/email-sent-log/index";
import EmailRunFromGroup from "../pages/EDAS/email/email-run-from-group/index";
import EmailSystem from "../pages/EDAS/email/email-system/index";
import EmailTemplates from "../pages/EDAS/email/email-templates/index";
import SmsGateways from "../pages/EDAS/email/sms-gateways/index";
import Financial from "../pages/EDAS/financial/index";
import AccountItems from "../pages/EDAS/financial/account-items/index";
import AutoBatchCode from "../pages/EDAS/financial/auto-batch-code/index";
import ChargeCodes from "../pages/EDAS/financial/charge-codes/index";
import ChargeItemType from "../pages/EDAS/financial/charge-item-type/index";
import ChargeItems from "../pages/EDAS/financial/charge-items/index";
import ChargeMaster from "../pages/EDAS/financial/charge-master/index";
import ConsumerPriceIndex from "../pages/EDAS/financial/consumer-price-index/index";
import DefaultCategoryChargeCode from "../pages/EDAS/financial/default-category-charge-code/index";
import FinanceTerms from "../pages/EDAS/financial/finance-terms/index";
import FinancialItems from "../pages/EDAS/financial/financial-items/index";
import FinancialSystemError from "../pages/EDAS/financial/financial-system-error/index";
import FinancialSystems from "../pages/EDAS/financial/financial-systems/index";
import FinancialToPost from "../pages/EDAS/financial/financial-to-post/index";
import FinancialSystemPostingLogs from "../pages/EDAS/financial/financial-to-post/financial-system-posting-logs/index";
import InvoicesToPost from "../pages/EDAS/financial/financial-to-post/invoices-to-post/index";
import PaymentsToPost from "../pages/EDAS/financial/financial-to-post/payments-to-post/index";
import PurchaseToPost from "../pages/EDAS/financial/financial-to-post/purchase-to-post/index";
import SupplierInvoicesToPost from "../pages/EDAS/financial/financial-to-post/supplier-invoices-to-post/index";
import FinsysGuidDesc from "../pages/EDAS/financial/finsys-guid-desc/index";
import InvoiceLayout from "../pages/EDAS/financial/invoice-layout/index";
import InvoiceTerms from "../pages/EDAS/financial/invoice-terms/index";
import MonthlyClaim from "../pages/EDAS/financial/monthly-claim/index";
import MonthlyClaimCustomers from "../pages/EDAS/financial/monthly-claim-customers/index";
import OutOfPocketExpenseItems from "../pages/EDAS/financial/out-of-pocket-expense-items/index";
import PaymentMethodHeader from "../pages/EDAS/financial/payment-method-header/index";
import PaymentMethods from "../pages/EDAS/financial/payment-methods/index";
import PaymentSystems from "../pages/EDAS/financial/payment-systems/index";
import PaymentsRequest from "../pages/EDAS/financial/payments-request/index";
import PayrollCategory from "../pages/EDAS/financial/payroll-category/index";
import PeriodicPaymentTokens from "../pages/EDAS/financial/periodic-payment-tokens/index";
import FinancialReports from "../pages/EDAS/financial/reports/index";
import BankAccountStatements from "../pages/EDAS/financial/reports/bank-account-statements/index";
import StaffChargeRates from "../pages/EDAS/financial/staff-charge-rates/index";
import UndepositedFunds from "../pages/EDAS/financial/undeposited-funds/index";
import UploadPaymentsFromFinSys from "../pages/EDAS/financial/upload-payments-from-fin-sys/index";
import UploadedPaymentsLog from "../pages/EDAS/financial/uploaded-payments-log/index";
import ViewInvoices from "../pages/EDAS/financial/view-invoices/index";
import ViewMonthlyInvoices from "../pages/EDAS/financial/view-monthly-invoices/index";
import ViewPayments from "../pages/EDAS/financial/view-payments/index";
import ViewSupplierInvoice from "../pages/EDAS/financial/view-supplier-invoice/index";
import WorkTypeServiceFeeRelation from "../pages/EDAS/financial/work-type-service-fee-relation/index";
import Forms from "../pages/EDAS/forms/index";
import ExamsPollsAndReports from "../pages/EDAS/forms/exams-polls-and-reports/index";
import HelpDocuments from "../pages/EDAS/help-documents/index";
import Inventory from "../pages/EDAS/inventory/index";
import Items from "../pages/EDAS/inventory/items/index";
import ItemsInStock from "../pages/EDAS/inventory/items/items-in-stock/index";
import ItemsInStore from "../pages/EDAS/inventory/items/items-in-store/index";
import PickingList from "../pages/EDAS/inventory/picking-list/index";
import PurchaseOrders from "../pages/EDAS/inventory/purchase-orders/index";
import StoreLocations from "../pages/EDAS/inventory/store-locations/index";
import StoreLocationReorders from "../pages/EDAS/inventory/store-locations/store-location-reorders/index";
import Maintenance from "../pages/EDAS/maintenance/index";
import BatchSystemTypeActiveForPm from "../pages/EDAS/maintenance/batch-system-type-active-for-pm/index";
import GeneratePmFromJobs from "../pages/EDAS/maintenance/generate-pm-from-jobs/index";
import PmByMonth from "../pages/EDAS/maintenance/pm-by-month/index";
import PmDueBatch from "../pages/EDAS/maintenance/pm-due-batch/index";
import ProgrammedMaintenance from "../pages/EDAS/maintenance/programmed-maintenance/index";
import Marketing from "../pages/EDAS/marketing/index";
import Competitors from "../pages/EDAS/marketing/competitors/index";
import Enquiry from "../pages/EDAS/marketing/enquiry/index";
import EnquiryTypes from "../pages/EDAS/marketing/enquiry/enquiry-types/index";
import LeadForms from "../pages/EDAS/marketing/lead-forms/index";
import LeadSource from "../pages/EDAS/marketing/lead-source/index";
import Leads from "../pages/EDAS/marketing/leads/index";
import LeadsStatus from "../pages/EDAS/marketing/leads-status/index";
import MarketingByJobDateRange from "../pages/EDAS/marketing/marketing-by-job-date-range/index";
import Promotion from "../pages/EDAS/marketing/promotion/index";
import Notifications from "../pages/EDAS/notifications/index";
import NotificationEnabled from "../pages/EDAS/notifications/notification-enabled/index";
import NotificationsGroup from "../pages/EDAS/notifications/notifications-group/index";
import NotifyNewPmJobs from "../pages/EDAS/notifications/notify-new-pm-jobs/index";
import StatusResultAlert from "../pages/EDAS/notifications/status-result-alert/index";
import SystemNotices from "../pages/EDAS/notifications/system-notices/index";
import ViewMessages from "../pages/EDAS/notifications/view-messages/index";
import ViewNotificationsDefine from "../pages/EDAS/notifications/view-notifications-define/index";
import Quoting from "../pages/EDAS/quoting/index";
import QuoteSectionTemplate from "../pages/EDAS/quoting/quote-section-template/index";
import QuoteTemplates from "../pages/EDAS/quoting/quote-templates/index";
import ViewQuotes from "../pages/EDAS/quoting/view-quotes/index";
import Reports from "../pages/EDAS/reports/index";
import AdminAutobatchSetupReport from "../pages/EDAS/reports/admin-autobatch-setup-report/index";
import BrowseReports from "../pages/EDAS/reports/browse-reports/index";
import BulkJobDetailsExport from "../pages/EDAS/reports/bulk-job-details-export/index";
import CustomerDefaultReportTypes from "../pages/EDAS/reports/customer-default-report-types/index";
import CustomerDefaultSystemReportTypes from "../pages/EDAS/reports/customer-default-system-report-types/index";
import DefaultSystemReportType from "../pages/EDAS/reports/default-system-report-type/index";
import EnquiryReportRecommendation from "../pages/EDAS/reports/enquiry-report-recommendation/index";
import ExportInvoicesToCsv from "../pages/EDAS/reports/export-invoices-to-csv/index";
import InvoiceReports from "../pages/EDAS/reports/invoice-reports/index";
import MoveReportTablesToNewActivity from "../pages/EDAS/reports/move-report-tables-to-new-activity/index";
import PickingListReport from "../pages/EDAS/reports/picking-list-report/index";
import ReportAlertWorkTypes from "../pages/EDAS/reports/report-alert-work-types/index";
import ReportImages from "../pages/EDAS/reports/report-images/index";
import ReportTypes from "../pages/EDAS/reports/report-types/index";
import ViewBatchReport from "../pages/EDAS/reports/view-batch-report/index";
import ViewSystems from "../pages/EDAS/reports/view-systems/index";
import Scheduling from "../pages/EDAS/scheduling/index";
import AssignUserShifts from "../pages/EDAS/scheduling/assign-user-shifts/index";
import BookingTimes from "../pages/EDAS/scheduling/booking-times/index";
import BreakTimes from "../pages/EDAS/scheduling/break-times/index";
import CustomerPmSchedule from "../pages/EDAS/scheduling/customer-pm-schedule/index";
import DayPilotGanttChart from "../pages/EDAS/scheduling/day-pilot-gantt-chart/index";
import GanttChart from "../pages/EDAS/scheduling/gantt-chart/index";
import JobSchedule from "../pages/EDAS/scheduling/job-schedule/index";
import MapDays from "../pages/EDAS/scheduling/map-days/index";
import MapLegend from "../pages/EDAS/scheduling/map-legend/index";
import MonthlyCalendar from "../pages/EDAS/scheduling/monthly-calendar/index";
import OperatingHours from "../pages/EDAS/scheduling/operating-hours/index";
import RescheduleReq from "../pages/EDAS/scheduling/reschedule-req/index";
import Roster from "../pages/EDAS/scheduling/roster/index";
import RosterTypes from "../pages/EDAS/scheduling/roster-types/index";
import RunScheduler from "../pages/EDAS/scheduling/run-scheduler/index";
import RunSchedulingSetup from "../pages/EDAS/scheduling/run-scheduling-setup/index";
import Runsheet from "../pages/EDAS/scheduling/runsheet/index";
import ScheduleWorkContract from "../pages/EDAS/scheduling/schedule-work-contract/index";
import StopClockHours from "../pages/EDAS/scheduling/stop-clock-hours/index";
import TimeInterval from "../pages/EDAS/scheduling/time-interval/index";
import TodaysJobsMap from "../pages/EDAS/scheduling/todays-jobs-map/index";
import UserSchedule from "../pages/EDAS/scheduling/user-schedule/index";
import ViewMap from "../pages/EDAS/scheduling/view-map/index";
import Supplier from "../pages/EDAS/supplier/index";
import ViewSuppliers from "../pages/EDAS/supplier/view-suppliers/index";
import SystemConfiguration from "../pages/EDAS/system-configuration/index";
import CurlRequestLogs from "../pages/EDAS/system-configuration/curl-request-logs/index";
import DefaultReportTypes from "../pages/EDAS/system-configuration/default-report-types/index";
import Form from "../pages/EDAS/system-configuration/form/index";
import FormGlobalQuestion from "../pages/EDAS/system-configuration/form/form-global-question/index";
import FormSqlColumns from "../pages/EDAS/system-configuration/form/form-sql-columns/index";
import FormSqlQueries from "../pages/EDAS/system-configuration/form/form-sql-queries/index";
import PollInputTypes from "../pages/EDAS/system-configuration/form/poll-input-types/index";
import PollTypes from "../pages/EDAS/system-configuration/form/poll-types/index";
import SetupForms from "../pages/EDAS/system-configuration/form/setup-forms/index";
import Imports from "../pages/EDAS/system-configuration/imports/index";
import LetterFunctionOrder from "../pages/EDAS/system-configuration/letter-function-order/index";
import LetterTemplates from "../pages/EDAS/system-configuration/letter-templates/index";
import MatrixColumn from "../pages/EDAS/system-configuration/matrix-column/index";
import MatrixData from "../pages/EDAS/system-configuration/matrix-data/index";
import MenuSystem from "../pages/EDAS/system-configuration/menu-system/index";
import MimeTypes from "../pages/EDAS/system-configuration/mime-types/index";
import MobileDeviceSetup from "../pages/EDAS/system-configuration/mobile-device-setup/index";
import OrderImportLog from "../pages/EDAS/system-configuration/order-import-log/index";
import PatTesterUploads from "../pages/EDAS/system-configuration/pat-tester-uploads/index";
import PcrSetup from "../pages/EDAS/system-configuration/pcr-setup/index";
import PcrTreeSetup from "../pages/EDAS/system-configuration/pcr-tree-setup/index";
import Postcodes from "../pages/EDAS/system-configuration/postcodes/index";
import QueryBuilderMaintScreens from "../pages/EDAS/system-configuration/query-builder-maint-screens/index";
import RecordEditTimeControl from "../pages/EDAS/system-configuration/record-edit-time-control/index";
import Regions from "../pages/EDAS/system-configuration/regions/index";
import SetColumnsByProgramName from "../pages/EDAS/system-configuration/set-columns-by-program-name/index";
import SetDirectoriesAccess from "../pages/EDAS/system-configuration/set-directories-access/index";
import SetTabsByWorkTypeByRole from "../pages/EDAS/system-configuration/set-tabs-by-work-type-by-role/index";
import SetUp from "../pages/EDAS/system-configuration/set-up/index";
import Codes from "../pages/EDAS/system-configuration/set-up/codes/index";
import Colours from "../pages/EDAS/system-configuration/set-up/colours/index";
import Settings from "../pages/EDAS/system-configuration/settings/index";
import CustomerFileNamePattern from "../pages/EDAS/system-configuration/settings/customer-file-name-pattern/index";
import DateFieldsColourSetup from "../pages/EDAS/system-configuration/settings/date-fields-colour-setup/index";
import DateRange from "../pages/EDAS/system-configuration/settings/date-range/index";
import DaysColour from "../pages/EDAS/system-configuration/settings/days-colour/index";
import Directories from "../pages/EDAS/system-configuration/settings/directories/index";
import FileNamePattern from "../pages/EDAS/system-configuration/settings/file-name-pattern/index";
import SetupOrder from "../pages/EDAS/system-configuration/setup-order/index";
import SetupTrackers from "../pages/EDAS/system-configuration/setup-trackers/index";
import SqlTables from "../pages/EDAS/system-configuration/sql-tables/index";
import State from "../pages/EDAS/system-configuration/state/index";
import Swms from "../pages/EDAS/system-configuration/swms/index";
import RiskActivityGroup from "../pages/EDAS/system-configuration/swms/risk-activity-group/index";
import RiskActivityStep from "../pages/EDAS/system-configuration/swms/risk-activity-step/index";
import RiskLevel from "../pages/EDAS/system-configuration/swms/risk-level/index";
import RiskMatrix from "../pages/EDAS/system-configuration/swms/risk-matrix/index";
import RiskMatrixConsequence from "../pages/EDAS/system-configuration/swms/risk-matrix-consequence/index";
import RiskMatrixLikelihood from "../pages/EDAS/system-configuration/swms/risk-matrix-likelihood/index";
import RiskMatrixRisk from "../pages/EDAS/system-configuration/swms/risk-matrix-risk/index";
import SystemActivities from "../pages/EDAS/system-configuration/system-activities/index";
import SystemActivityTypes from "../pages/EDAS/system-configuration/system-activity-types/index";
import SystemConditions from "../pages/EDAS/system-configuration/system-conditions/index";
import SystemFieldSetup from "../pages/EDAS/system-configuration/system-field-setup/index";
import SystemSections from "../pages/EDAS/system-configuration/system-sections/index";
import SystemType from "../pages/EDAS/system-configuration/system-type/index";
import TimeZoneOffset from "../pages/EDAS/system-configuration/time-zone-offset/index";
import ViewSoapSetup from "../pages/EDAS/system-configuration/view-soap-setup/index";
import WebPages from "../pages/EDAS/system-configuration/web-pages/index";
import Zones from "../pages/EDAS/system-configuration/zones/index";
import Timesheet from "../pages/EDAS/timesheet/index";
import TimesheetReports from "../pages/EDAS/timesheet/timesheet-reports/index";
import TimesheetShifts from "../pages/EDAS/timesheet/timesheet-shifts/index";
import TimesheetWeeks from "../pages/EDAS/timesheet/timesheet-weeks/index";
import ViewTimesheet from "../pages/EDAS/timesheet/view-timesheet/index";
import ViewTimesheetRdo from "../pages/EDAS/timesheet/view-timesheet-rdo/index";
import ViewUserShifts from "../pages/EDAS/timesheet/view-user-shifts/index";
import User from "../pages/EDAS/user/index";
import LeaveRequestHistory from "../pages/EDAS/user/leave-request-history/index";
import MyAccountProfile from "../pages/EDAS/user/my-account-profile/index";
import RegisterRequests from "../pages/EDAS/user/register-requests/index";
import StaffSkillLevel from "../pages/EDAS/user/staff-skill-level/index";
import UserAccounts from "../pages/EDAS/user/user-accounts/index";
import UserAllowanceTypes from "../pages/EDAS/user/user-allowance-types/index";
import UserFieldDescriptions from "../pages/EDAS/user/user-field-descriptions/index";



// Utility pages


import Chat from "../pages/Chat/Chat";

// File Manager
import FileManager from "../pages/FileManager/index";

// Profile
import UserProfile from "../pages/Authentication/user-profile";

// Pages Calendar
import Calendar from "../pages/Calendar/index";

// //Tasks
import TasksList from "../pages/Tasks/tasks-list";
import TasksCreate from "../pages/Tasks/tasks-create";
import TasksKanban from "../pages/Tasks/tasks-kanban";

// //Projects
import ProjectsGrid from "../pages/Projects/projects-grid";
import ProjectsList from "../pages/Projects/projects-list";
import ProjectsOverview from "../pages/Projects/ProjectOverview/projects-overview";
import ProjectsCreate from "../pages/Projects/projects-create";

// //Ecommerce Pages
import EcommerceProducts from "../pages/Ecommerce/EcommerceProducts";
import EcommerceProductDetail from "../pages/Ecommerce/EcommerceDetails/index";
import EcommerceOrders from "../pages/Ecommerce/EcommerceOrders/index";
import EcommerceCustomers from "../pages/Ecommerce/EcommerceCustomers/index";
import EcommerceCart from "../pages/Ecommerce/EcommerceCart";
import EcommerceCheckout from "../pages/Ecommerce/EcommerceCheckout";
import EcommerceShops from "../pages/Ecommerce/EcommerceShops/index";
import EcommerceAddProduct from "../pages/Ecommerce/EcommerceAddProduct";

//Email
import EmailInbox from "../pages/Email/email-inbox";
import EmailRead from "../pages/Email/email-read";
import EmailBasicTemplte from "../pages/Email/email-basic-templte";
import EmailAlertTemplte from "../pages/Email/email-template-alert";
import EmailTemplateBilling from "../pages/Email/email-template-billing";

//Invoices
import InvoicesList from "../pages/Invoices/invoices-list";
import InvoiceDetail from "../pages/Invoices/invoices-detail";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";

//  // Inner Authentication
import Login1 from "../pages/AuthenticationInner/Login";
import Login2 from "../pages/AuthenticationInner/Login2";
import Register1 from "../pages/AuthenticationInner/Register";
import Register2 from "../pages/AuthenticationInner/Register2";
import Recoverpw from "../pages/AuthenticationInner/Recoverpw";
import Recoverpw2 from "../pages/AuthenticationInner/Recoverpw2";
import ForgetPwd1 from "../pages/AuthenticationInner/ForgetPassword";
import ForgetPwd2 from "../pages/AuthenticationInner/ForgetPassword2";
import LockScreen from "../pages/AuthenticationInner/auth-lock-screen";
import LockScreen2 from "../pages/AuthenticationInner/auth-lock-screen-2";
import ConfirmMail from "../pages/AuthenticationInner/page-confirm-mail";
import ConfirmMail2 from "../pages/AuthenticationInner/page-confirm-mail-2";
import EmailVerification from "../pages/AuthenticationInner/auth-email-verification";
import EmailVerification2 from "../pages/AuthenticationInner/auth-email-verification-2";
import TwostepVerification from "../pages/AuthenticationInner/auth-two-step-verification";
import TwostepVerification2 from "../pages/AuthenticationInner/auth-two-step-verification-2";

// Dashboard
import Dashboard from "../pages/Dashboard/index";
import DashboardSaas from "../pages/Dashboard-saas/index";
import DashboardCrypto from "../pages/Dashboard-crypto/index";
import Blog from "../pages/Dashboard-Blog/index";
import DashboardJob from "../pages/DashboardJob/index";

//Crypto
import CryptoWallet from "../pages/Crypto/CryptoWallet/crypto-wallet";
import CryptoBuySell from "../pages/Crypto/crypto-buy-sell";
import CryptoExchange from "../pages/Crypto/crypto-exchange";
import CryptoLending from "../pages/Crypto/crypto-lending";
import CryptoOrders from "../pages/Crypto/CryptoOrders/crypto-orders";
import CryptoKYCApplication from "../pages/Crypto/crypto-kyc-application";
import CryptoIcoLanding from "../pages/Crypto/CryptoIcoLanding/index";

// Charts
import ChartApex from "../pages/Charts/Apexcharts";
import ChartjsChart from "../pages/Charts/ChartjsChart";
import EChart from "../pages/Charts/EChart";
import SparklineChart from "../pages/Charts/SparklineChart";
import ChartsKnob from "../pages/Charts/charts-knob";
import ReCharts from "../pages/Charts/ReCharts";

// Maps
import MapsGoogle from "../pages/Maps/MapsGoogle";

//Icons
import IconBoxicons from "../pages/Icons/IconBoxicons";
import IconDripicons from "../pages/Icons/IconDripicons";
import IconMaterialdesign from "../pages/Icons/IconMaterialdesign";
import IconFontawesome from "../pages/Icons/IconFontawesome";

//Tables
import BasicTables from "../pages/Tables/BasicTables";
import DatatableTables from "../pages/Tables/DatatableTables";

//Blog
import BlogList from "../pages/Blog/BlogList/index";
import BlogGrid from "../pages/Blog/BlogGrid/index";
import BlogDetails from "../pages/Blog/BlogDetails";

//Job
import JobGrid from "../pages/JobPages/JobGrid/index";
import JobDetails from "../pages/JobPages/JobDetails";
import JobCategories from "../pages/JobPages/JobCategories";
import JobList from "../pages/JobPages/JobList";
import ApplyJobs from "../pages/JobPages/ApplyJobs/index";
import CandidateList from "../pages/JobPages/CandidateList";
import CandidateOverview from "../pages/JobPages/CandidateOverview";

// Forms
import FormElements from "../pages/Forms/FormElements";
import FormLayouts from "../pages/Forms/FormLayouts";
import FormAdvanced from "../pages/Forms/FormAdvanced";
import FormEditors from "../pages/Forms/FormEditors";
import FormValidations from "../pages/Forms/FormValidations";
import FormMask from "../pages/Forms/FormMask";
import FormRepeater from "../pages/Forms/FormRepeater";
import FormUpload from "../pages/Forms/FormUpload";
import FormWizard from "../pages/Forms/FormWizard";

//Ui
import UiAlert from "../pages/Ui/UiAlert";
import UiButtons from "../pages/Ui/UiButtons";
import UiCards from "../pages/Ui/UiCards";
import UiCarousel from "../pages/Ui/UiCarousel";
import UiColors from "../pages/Ui/UiColors";
import UiDropdown from "../pages/Ui/UiDropdown";
import UiGeneral from "../pages/Ui/UiGeneral";
import UiGrid from "../pages/Ui/UiGrid";
import UiImages from "../pages/Ui/UiImages";
import UiLightbox from "../pages/Ui/UiLightbox";
import UiModal from "../pages/Ui/UiModal";
import UiProgressbar from "../pages/Ui/UiProgressbar";
import UiTabsAccordions from "../pages/Ui/UiTabsAccordions";
import UiTypography from "../pages/Ui/UiTypography";
import UiVideo from "../pages/Ui/UiVideo";
import UiSessionTimeout from "../pages/Ui/UiSessionTimeout";
import UiRating from "../pages/Ui/UiRating";
import UiRangeSlider from "../pages/Ui/UiRangeSlider";
import UiNotifications from "../pages/Ui/ui-notifications";
import UiOffCanvas from "pages/Ui/UiOffCanvas";
import UiUtilitie from "../pages/Ui/UiUtilitie";
import UiPlaceholders from "../pages/Ui/UiPlaceholders";
import UiToasts from "../pages/Ui/UiToast";

//Pages
import PagesStarter from "../pages/Utility/pages-starter";
import PagesMaintenance from "../pages/Utility/pages-maintenance";
import PagesComingsoon from "../pages/Utility/pages-comingsoon";
import PagesTimeline from "../pages/Utility/pages-timeline";
import PagesFaqs from "../pages/Utility/pages-faqs";
import PagesPricing from "../pages/Utility/pages-pricing";
import Pages404 from "../pages/Utility/pages-404";
import Pages500 from "../pages/Utility/pages-500";

//Contacts
import ContactsGrid from "../pages/Contacts/contacts-grid";
import ContactsList from "../pages/Contacts/ContactList/contacts-list";
import ContactsProfile from "../pages/Contacts/ContactsProfile/contacts-profile";

const authProtectedRoutes = [
  { path: "/home", component: <Home /> },
  { path: "/asset-management", component: <AssetManagement /> },
  { path: "/asset-management/vehicle-assigned-to-user", component: <VehicleAssignedToUser /> },
  { path: "/batch-update", component: <BatchUpdate /> },
  { path: "/batch-update/auto-batch-history", component: <AutoBatchHistory /> },
  { path: "/batch-update/control-auto-batch", component: <ControlAutoBatch /> },
  { path: "/batch-update/custom-system-import", component: <CustomSystemImport /> },
  { path: "/batch-update/merge-customers", component: <MergeCustomers /> },
  { path: "/batch-update/pm-import", component: <PmImport /> },
  { path: "/batch-update/send-import-export-emails", component: <SendImportExportEmails /> },
  { path: "/company-profile", component: <CompanyProfile /> },
  { path: "/company-profile/ccia", component: <Ccia /> },
  { path: "/company-profile/ccia/browse-ccia", component: <BrowseCcia /> },
  { path: "/company-profile/ccia/ccia", component: <CciaSub /> },
  { path: "/company-profile/company-profile", component: <CompanyProfileSub /> },
  { path: "/company-profile/company-qualifications", component: <CompanyQualifications /> },
  { path: "/company-profile/compliance-doc", component: <ComplianceDoc /> },
  { path: "/company-profile/contractor-agreement", component: <ContractorAgreement /> },
  { path: "/company-profile/contractor-agreement/types", component: <ContractorAgreementTypes /> },
  { path: "/company-profile/customer-warranties", component: <CustomerWarranties /> },
  { path: "/company-profile/department-default-equipment", component: <DepartmentDefaultEquipment /> },
  { path: "/company-profile/department-teams", component: <DepartmentTeams /> },
  { path: "/company-profile/inductions", component: <Inductions /> },
  { path: "/company-profile/qualification-images", component: <QualificationImages /> },
  { path: "/company-profile/qualification-field-setup", component: <QualificationFieldSetup /> },
  { path: "/company-profile/qualifications-inductions", component: <QualificationsInductions /> },
  { path: "/company-profile/terms-and-conditions", component: <TermsAndConditions /> },
  { path: "/company-profile/warranty-providers", component: <WarrantyProviders /> },
  { path: "/customer-management", component: <CustomerManagement /> },
  { path: "/customer-management/customers", component: <Customers /> },
  { path: "/customer-management/job", component: <Job /> },
  { path: "/customer-management/job/allowed-status-change-setup", component: <AllowedStatusChangeSetup /> },
  { path: "/customer-management/job/assigned-jobs-to-release", component: <AssignedJobsToRelease /> },
  { path: "/customer-management/job/jobs-google", component: <JobsGoogle /> },
  { path: "/customer-management/job/link-tickets-for-update", component: <LinkTicketsForUpdate /> },
  { path: "/customer-management/job/non-charge-jobs", component: <NonChargeJobs /> },
  { path: "/customer-management/job/process-parts-required", component: <ProcessPartsRequired /> },
  { path: "/customer-management/job/set-columns-for-view-jobs", component: <SetColumnsForViewJobs /> },
  { path: "/customer-management/job/setup-kanban-job-status", component: <SetupKanbanJobStatus /> },
  { path: "/customer-management/job/sub-worktype", component: <SubWorktype /> },
  { path: "/customer-management/job/unbooked-jobs", component: <UnbookedJobs /> },
  { path: "/customer-management/job/unit-of-measure", component: <UnitOfMeasure /> },
  { path: "/customer-management/job/unit-outputs", component: <UnitOutputs /> },
  { path: "/customer-management/job/view-defects", component: <ViewDefects /> },
  { path: "/customer-management/job/view-jobs", component: <ViewJobs /> },
  { path: "/customer-management/job/work-performed-group-pretext", component: <WorkPerformedGroupPretext /> },
  { path: "/customer-management/job/work-performed-pretext", component: <WorkPerformedPretext /> },
  { path: "/customer-management/job/work-requests", component: <WorkRequests /> },
  { path: "/customer-management/job/settings", component: <JobSettings /> },
  { path: "/customer-management/job/set-up", component: <JobSetUp /> },
  { path: "/customer-management/location", component: <Location /> },
  { path: "/customer-management/location/location-area", component: <LocationArea /> },
  { path: "/customer-management/location/location-area-default-systems", component: <LocationAreaDefaultSystems /> },
  { path: "/customer-management/location/location-category", component: <LocationCategory /> },
  { path: "/customer-management/location/location-prefix", component: <LocationPrefix /> },
  { path: "/customer-management/location/location-system-details", component: <LocationSystemDetails /> },
  { path: "/customer-management/location/location-system-legend", component: <LocationSystemLegend /> },
  { path: "/customer-management/location/location-system-widgets", component: <LocationSystemWidgets /> },
  { path: "/customer-management/location/location-type", component: <LocationType /> },
  { path: "/customer-management/location/locations-google", component: <LocationsGoogle /> },
  { path: "/customer-management/location/view-location-system-summary", component: <ViewLocationSystemSummary /> },
  { path: "/customer-management/locations", component: <Locations /> },
  { path: "/customer-management/pm", component: <Pm /> },
  { path: "/customer-management/pm/work-type-default-category", component: <WorkTypeDefaultCategory /> },
  { path: "/customer-management/pm/work-types", component: <WorkTypes /> },
  { path: "/dashboard-settings", component: <DashboardSettings /> },
  { path: "/dashboard-settings/dashboard-items", component: <DashboardItems /> },
  { path: "/dashboard-settings/dashboard-views", component: <DashboardViews /> },
  { path: "/email", component: <Email /> },
  { path: "/email/attachment-list", component: <AttachmentList /> },
  { path: "/email/email-asset-survey", component: <EmailAssetSurvey /> },
  { path: "/email/email-edit-run-from-list", component: <EmailEditRunFromList /> },
  { path: "/email/email-log", component: <EmailLog /> },
  { path: "/email/email-log/email-received-log", component: <EmailReceivedLog /> },
  { path: "/email/email-log/email-sent-log", component: <EmailSentLog /> },
  { path: "/email/email-run-from-group", component: <EmailRunFromGroup /> },
  { path: "/email/email-system", component: <EmailSystem /> },
  { path: "/email/email-templates", component: <EmailTemplates /> },
  { path: "/email/sms-gateways", component: <SmsGateways /> },
  { path: "/financial", component: <Financial /> },
  { path: "/financial/account-items", component: <AccountItems /> },
  { path: "/financial/auto-batch-code", component: <AutoBatchCode /> },
  { path: "/financial/charge-codes", component: <ChargeCodes /> },
  { path: "/financial/charge-item-type", component: <ChargeItemType /> },
  { path: "/financial/charge-items", component: <ChargeItems /> },
  { path: "/financial/charge-master", component: <ChargeMaster /> },
  { path: "/financial/consumer-price-index", component: <ConsumerPriceIndex /> },
  { path: "/financial/default-category-charge-code", component: <DefaultCategoryChargeCode /> },
  { path: "/financial/finance-terms", component: <FinanceTerms /> },
  { path: "/financial/financial-items", component: <FinancialItems /> },
  { path: "/financial/financial-system-error", component: <FinancialSystemError /> },
  { path: "/financial/financial-systems", component: <FinancialSystems /> },
  { path: "/financial/financial-to-post", component: <FinancialToPost /> },
  { path: "/financial/financial-to-post/financial-system-posting-logs", component: <FinancialSystemPostingLogs /> },
  { path: "/financial/financial-to-post/invoices-to-post", component: <InvoicesToPost /> },
  { path: "/financial/financial-to-post/payments-to-post", component: <PaymentsToPost /> },
  { path: "/financial/financial-to-post/purchase-to-post", component: <PurchaseToPost /> },
  { path: "/financial/financial-to-post/supplier-invoices-to-post", component: <SupplierInvoicesToPost /> },
  { path: "/financial/finsys-guid-desc", component: <FinsysGuidDesc /> },
  { path: "/financial/invoice-layout", component: <InvoiceLayout /> },
  { path: "/financial/invoice-terms", component: <InvoiceTerms /> },
  { path: "/financial/monthly-claim", component: <MonthlyClaim /> },
  { path: "/financial/monthly-claim-customers", component: <MonthlyClaimCustomers /> },
  { path: "/financial/out-of-pocket-expense-items", component: <OutOfPocketExpenseItems /> },
  { path: "/financial/payment-method-header", component: <PaymentMethodHeader /> },
  { path: "/financial/payment-methods", component: <PaymentMethods /> },
  { path: "/financial/payment-systems", component: <PaymentSystems /> },
  { path: "/financial/payments-request", component: <PaymentsRequest /> },
  { path: "/financial/payroll-category", component: <PayrollCategory /> },
  { path: "/financial/periodic-payment-tokens", component: <PeriodicPaymentTokens /> },
  { path: "/financial/reports", component: <FinancialReports /> },
  { path: "/financial/reports/bank-account-statements", component: <BankAccountStatements /> },
  { path: "/financial/staff-charge-rates", component: <StaffChargeRates /> },
  { path: "/financial/undeposited-funds", component: <UndepositedFunds /> },
  { path: "/financial/upload-payments-from-fin-sys", component: <UploadPaymentsFromFinSys /> },
  { path: "/financial/uploaded-payments-log", component: <UploadedPaymentsLog /> },
  { path: "/financial/view-invoices", component: <ViewInvoices /> },
  { path: "/financial/view-monthly-invoices", component: <ViewMonthlyInvoices /> },
  { path: "/financial/view-payments", component: <ViewPayments /> },
  { path: "/financial/view-supplier-invoice", component: <ViewSupplierInvoice /> },
  { path: "/financial/work-type-service-fee-relation", component: <WorkTypeServiceFeeRelation /> },
  { path: "/forms", component: <Forms /> },
  { path: "/forms/exams-polls-and-reports", component: <ExamsPollsAndReports /> },
  { path: "/help-documents", component: <HelpDocuments /> },
  { path: "/inventory", component: <Inventory /> },
  { path: "/inventory/items", component: <Items /> },
  { path: "/inventory/items/items-in-stock", component: <ItemsInStock /> },
  { path: "/inventory/items/items-in-store", component: <ItemsInStore /> },
  { path: "/inventory/picking-list", component: <PickingList /> },
  { path: "/inventory/purchase-orders", component: <PurchaseOrders /> },
  { path: "/inventory/store-locations", component: <StoreLocations /> },
  { path: "/inventory/store-locations/store-location-reorders", component: <StoreLocationReorders /> },
  { path: "/maintenance", component: <Maintenance /> },
  { path: "/maintenance/batch-system-type-active-for-pm", component: <BatchSystemTypeActiveForPm /> },
  { path: "/maintenance/generate-pm-from-jobs", component: <GeneratePmFromJobs /> },
  { path: "/maintenance/pm-by-month", component: <PmByMonth /> },
  { path: "/maintenance/pm-due-batch", component: <PmDueBatch /> },
  { path: "/maintenance/programmed-maintenance", component: <ProgrammedMaintenance /> },
  { path: "/marketing", component: <Marketing /> },
  { path: "/marketing/competitors", component: <Competitors /> },
  { path: "/marketing/enquiry", component: <Enquiry /> },
  { path: "/marketing/enquiry/enquiry-types", component: <EnquiryTypes /> },
  { path: "/marketing/lead-forms", component: <LeadForms /> },
  { path: "/marketing/lead-source", component: <LeadSource /> },
  { path: "/marketing/leads", component: <Leads /> },
  { path: "/marketing/leads-status", component: <LeadsStatus /> },
  { path: "/marketing/marketing-by-job-date-range", component: <MarketingByJobDateRange /> },
  { path: "/marketing/promotion", component: <Promotion /> },
  { path: "/notifications", component: <Notifications /> },
  { path: "/notifications/notification-enabled", component: <NotificationEnabled /> },
  { path: "/notifications/notifications-group", component: <NotificationsGroup /> },
  { path: "/notifications/notify-new-pm-jobs", component: <NotifyNewPmJobs /> },
  { path: "/notifications/status-result-alert", component: <StatusResultAlert /> },
  { path: "/notifications/system-notices", component: <SystemNotices /> },
  { path: "/notifications/view-messages", component: <ViewMessages /> },
  { path: "/notifications/view-notifications-define", component: <ViewNotificationsDefine /> },
  { path: "/quoting", component: <Quoting /> },
  { path: "/quoting/quote-section-template", component: <QuoteSectionTemplate /> },
  { path: "/quoting/quote-templates", component: <QuoteTemplates /> },
  { path: "/quoting/view-quotes", component: <ViewQuotes /> },
  { path: "/reports", component: <Reports /> },
  { path: "/reports/admin-autobatch-setup-report", component: <AdminAutobatchSetupReport /> },
  { path: "/reports/browse-reports", component: <BrowseReports /> },
  { path: "/reports/bulk-job-details-export", component: <BulkJobDetailsExport /> },
  { path: "/reports/customer-default-report-types", component: <CustomerDefaultReportTypes /> },
  { path: "/reports/customer-default-system-report-types", component: <CustomerDefaultSystemReportTypes /> },
  { path: "/reports/default-system-report-type", component: <DefaultSystemReportType /> },
  { path: "/reports/enquiry-report-recommendation", component: <EnquiryReportRecommendation /> },
  { path: "/reports/export-invoices-to-csv", component: <ExportInvoicesToCsv /> },
  { path: "/reports/invoice-reports", component: <InvoiceReports /> },
  { path: "/reports/move-report-tables-to-new-activity", component: <MoveReportTablesToNewActivity /> },
  { path: "/reports/picking-list-report", component: <PickingListReport /> },
  { path: "/reports/report-alert-work-types", component: <ReportAlertWorkTypes /> },
  { path: "/reports/report-images", component: <ReportImages /> },
  { path: "/reports/report-types", component: <ReportTypes /> },
  { path: "/reports/view-batch-report", component: <ViewBatchReport /> },
  { path: "/reports/view-systems", component: <ViewSystems /> },
  { path: "/scheduling", component: <Scheduling /> },
  { path: "/scheduling/assign-user-shifts", component: <AssignUserShifts /> },
  { path: "/scheduling/booking-times", component: <BookingTimes /> },
  { path: "/scheduling/break-times", component: <BreakTimes /> },
  { path: "/scheduling/customer-pm-schedule", component: <CustomerPmSchedule /> },
  { path: "/scheduling/day-pilot-gantt-chart", component: <DayPilotGanttChart /> },
  { path: "/scheduling/gantt-chart", component: <GanttChart /> },
  { path: "/scheduling/job-schedule", component: <JobSchedule /> },
  { path: "/scheduling/map-days", component: <MapDays /> },
  { path: "/scheduling/map-legend", component: <MapLegend /> },
  { path: "/scheduling/monthly-calendar", component: <MonthlyCalendar /> },
  { path: "/scheduling/operating-hours", component: <OperatingHours /> },
  { path: "/scheduling/reschedule-req", component: <RescheduleReq /> },
  { path: "/scheduling/roster", component: <Roster /> },
  { path: "/scheduling/roster-types", component: <RosterTypes /> },
  { path: "/scheduling/run-scheduler", component: <RunScheduler /> },
  { path: "/scheduling/run-scheduling-setup", component: <RunSchedulingSetup /> },
  { path: "/scheduling/runsheet", component: <Runsheet /> },
  { path: "/scheduling/schedule-work-contract", component: <ScheduleWorkContract /> },
  { path: "/scheduling/stop-clock-hours", component: <StopClockHours /> },
  { path: "/scheduling/time-interval", component: <TimeInterval /> },
  { path: "/scheduling/todays-jobs-map", component: <TodaysJobsMap /> },
  { path: "/scheduling/user-schedule", component: <UserSchedule /> },
  { path: "/scheduling/view-map", component: <ViewMap /> },
  { path: "/supplier", component: <Supplier /> },
  { path: "/supplier/view-suppliers", component: <ViewSuppliers /> },
  { path: "/system-configuration", component: <SystemConfiguration /> },
  { path: "/system-configuration/curl-request-logs", component: <CurlRequestLogs /> },
  { path: "/system-configuration/default-report-types", component: <DefaultReportTypes /> },
  { path: "/system-configuration/form", component: <Form /> },
  { path: "/system-configuration/form/form-global-question", component: <FormGlobalQuestion /> },
  { path: "/system-configuration/form/form-sql-columns", component: <FormSqlColumns /> },
  { path: "/system-configuration/form/form-sql-queries", component: <FormSqlQueries /> },
  { path: "/system-configuration/form/poll-input-types", component: <PollInputTypes /> },
  { path: "/system-configuration/form/poll-types", component: <PollTypes /> },
  { path: "/system-configuration/form/setup-forms", component: <SetupForms /> },
  { path: "/system-configuration/imports", component: <Imports /> },
  { path: "/system-configuration/letter-function-order", component: <LetterFunctionOrder /> },
  { path: "/system-configuration/letter-templates", component: <LetterTemplates /> },
  { path: "/system-configuration/matrix-column", component: <MatrixColumn /> },
  { path: "/system-configuration/matrix-data", component: <MatrixData /> },
  { path: "/system-configuration/menu-system", component: <MenuSystem /> },
  { path: "/system-configuration/mime-types", component: <MimeTypes /> },
  { path: "/system-configuration/mobile-device-setup", component: <MobileDeviceSetup /> },
  { path: "/system-configuration/order-import-log", component: <OrderImportLog /> },
  { path: "/system-configuration/pat-tester-uploads", component: <PatTesterUploads /> },
  { path: "/system-configuration/pcr-setup", component: <PcrSetup /> },
  { path: "/system-configuration/pcr-tree-setup", component: <PcrTreeSetup /> },
  { path: "/system-configuration/postcodes", component: <Postcodes /> },
  { path: "/system-configuration/query-builder-maint-screens", component: <QueryBuilderMaintScreens /> },
  { path: "/system-configuration/record-edit-time-control", component: <RecordEditTimeControl /> },
  { path: "/system-configuration/regions", component: <Regions /> },
  { path: "/system-configuration/set-columns-by-program-name", component: <SetColumnsByProgramName /> },
  { path: "/system-configuration/set-directories-access", component: <SetDirectoriesAccess /> },
  { path: "/system-configuration/set-tabs-by-work-type-by-role", component: <SetTabsByWorkTypeByRole /> },
  { path: "/system-configuration/set-up", component: <SetUp /> },
  { path: "/system-configuration/set-up/codes", component: <Codes /> },
  { path: "/system-configuration/set-up/colours", component: <Colours /> },
  { path: "/system-configuration/settings", component: <Settings /> },
  { path: "/system-configuration/settings/customer-file-name-pattern", component: <CustomerFileNamePattern /> },
  { path: "/system-configuration/settings/date-fields-colour-setup", component: <DateFieldsColourSetup /> },
  { path: "/system-configuration/settings/date-range", component: <DateRange /> },
  { path: "/system-configuration/settings/days-colour", component: <DaysColour /> },
  { path: "/system-configuration/settings/directories", component: <Directories /> },
  { path: "/system-configuration/settings/file-name-pattern", component: <FileNamePattern /> },
  { path: "/system-configuration/setup-order", component: <SetupOrder /> },
  { path: "/system-configuration/setup-trackers", component: <SetupTrackers /> },
  { path: "/system-configuration/sql-tables", component: <SqlTables /> },
  { path: "/system-configuration/state", component: <State /> },
  { path: "/system-configuration/swms", component: <Swms /> },
  { path: "/system-configuration/swms/risk-activity-group", component: <RiskActivityGroup /> },
  { path: "/system-configuration/swms/risk-activity-step", component: <RiskActivityStep /> },
  { path: "/system-configuration/swms/risk-level", component: <RiskLevel /> },
  { path: "/system-configuration/swms/risk-matrix", component: <RiskMatrix /> },
  { path: "/system-configuration/swms/risk-matrix-consequence", component: <RiskMatrixConsequence /> },
  { path: "/system-configuration/swms/risk-matrix-likelihood", component: <RiskMatrixLikelihood /> },
  { path: "/system-configuration/swms/risk-matrix-risk", component: <RiskMatrixRisk /> },
  { path: "/system-configuration/system-activities", component: <SystemActivities /> },
  { path: "/system-configuration/system-activity-types", component: <SystemActivityTypes /> },
  { path: "/system-configuration/system-conditions", component: <SystemConditions /> },
  { path: "/system-configuration/system-field-setup", component: <SystemFieldSetup /> },
  { path: "/system-configuration/system-sections", component: <SystemSections /> },
  { path: "/system-configuration/system-type", component: <SystemType /> },
  { path: "/system-configuration/time-zone-offset", component: <TimeZoneOffset /> },
  { path: "/system-configuration/view-soap-setup", component: <ViewSoapSetup /> },
  { path: "/system-configuration/web-pages", component: <WebPages /> },
  { path: "/system-configuration/zones", component: <Zones /> },
  { path: "/timesheet", component: <Timesheet /> },
  { path: "/timesheet/timesheet-reports", component: <TimesheetReports /> },
  { path: "/timesheet/timesheet-shifts", component: <TimesheetShifts /> },
  { path: "/timesheet/timesheet-weeks", component: <TimesheetWeeks /> },
  { path: "/timesheet/view-timesheet", component: <ViewTimesheet /> },
  { path: "/timesheet/view-timesheet-rdo", component: <ViewTimesheetRdo /> },
  { path: "/timesheet/view-user-shifts", component: <ViewUserShifts /> },
  { path: "/user", component: <User /> },
  { path: "/user/leave-request-history", component: <LeaveRequestHistory /> },
  { path: "/user/my-account-profile", component: <MyAccountProfile /> },
  { path: "/user/register-requests", component: <RegisterRequests /> },
  { path: "/user/staff-skill-level", component: <StaffSkillLevel /> },
  { path: "/user/user-accounts", component: <UserAccounts /> },
  { path: "/user/user-allowance-types", component: <UserAllowanceTypes /> },
  { path: "/user/user-field-descriptions", component: <UserFieldDescriptions /> },
  { path: "/", exact: true, component: <Navigate to="/home" /> },
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/dashboard-saas", component: <DashboardSaas /> },
  { path: "/dashboard-crypto", component: <DashboardCrypto /> },
  { path: "/blog", component: <Blog /> },
  { path: "/dashboard-job", component: <DashboardJob /> },

  //Crypto
  { path: "/crypto-wallet", component: <CryptoWallet /> },
  { path: "/crypto-buy-sell", component: <CryptoBuySell /> },
  { path: "/crypto-exchange", component: <CryptoExchange /> },
  { path: "/crypto-lending", component: <CryptoLending /> },
  { path: "/crypto-orders", component: <CryptoOrders /> },
  { path: "/crypto-kyc-application", component: <CryptoKYCApplication /> },

  //chat
  { path: "/chat", component: <Chat /> },

  //File Manager
  { path: "/apps-filemanager", component: <FileManager /> },

  // //calendar
  { path: "/calendar", component: <Calendar /> },

  // //profile
  { path: "/profile", component: <UserProfile /> },

  //Ecommerce
  { path: "/ecommerce-product-detail/:id", component: <EcommerceProductDetail /> },
  { path: "/ecommerce-products", component: <EcommerceProducts /> },
  { path: "/ecommerce-orders", component: <EcommerceOrders /> },
  { path: "/ecommerce-customers", component: <EcommerceCustomers /> },
  { path: "/ecommerce-cart", component: <EcommerceCart /> },
  { path: "/ecommerce-checkout", component: <EcommerceCheckout /> },
  { path: "/ecommerce-shops", component: <EcommerceShops /> },
  { path: "/ecommerce-add-product", component: <EcommerceAddProduct /> },

  //Email
  { path: "/email-inbox", component: <EmailInbox /> },
  { path: "/email-read/:id?", component: <EmailRead /> },
  { path: "/email-template-basic", component: <EmailBasicTemplte /> },
  { path: "/email-template-alert", component: <EmailAlertTemplte /> },
  { path: "/email-template-billing", component: <EmailTemplateBilling /> },

  //Invoices
  { path: "/invoices-list", component: <InvoicesList /> },
  { path: "/invoices-detail/:id", component: <InvoiceDetail /> },
  { path: "/invoices-detail", component: <InvoiceDetail /> },

  // Tasks
  { path: "/tasks-list", component: <TasksList /> },
  { path: "/tasks-create", component: <TasksCreate /> },
  { path: "/tasks-kanban", component: <TasksKanban /> },

  //Projects
  { path: "/projects-grid", component: <ProjectsGrid /> },
  { path: "/projects-list", component: <ProjectsList /> },
  { path: "/projects-overview", component: <ProjectsOverview /> },
  { path: "/projects-overview/:id", component: <ProjectsOverview /> },
  { path: "/projects-create", component: <ProjectsCreate /> },

  //Blog
  { path: "/blog-list", component: <BlogList /> },
  { path: "/blog-grid", component: <BlogGrid /> },
  { path: "/blog-details", component: <BlogDetails /> },

  //job
  { path: "/job-grid", component: <JobGrid /> },
  { path: "/job-details", component: <JobDetails /> },
  { path: "/job-categories", component: <JobCategories /> },
  { path: "/job-list", component: <JobList /> },
  { path: "/job-apply", component: <ApplyJobs /> },
  { path: "/candidate-list", component: <CandidateList /> },
  { path: "/candidate-overview", component: <CandidateOverview /> },

  // Contacts
  { path: "/contacts-grid", component: <ContactsGrid /> },
  { path: "/contacts-list", component: <ContactsList /> },
  { path: "/contacts-profile", component: <ContactsProfile /> },

  //Charts
  { path: "/apex-charts", component: <ChartApex /> },
  { path: "/chartjs-charts", component: <ChartjsChart /> },
  { path: "/e-charts", component: <EChart /> },
  { path: "/sparkline-charts", component: <SparklineChart /> },
  { path: "/charts-knob", component: <ChartsKnob /> },
  { path: "/re-charts", component: <ReCharts /> },

  // Icons
  { path: "/icons-boxicons", component: <IconBoxicons /> },
  { path: "/icons-dripicons", component: <IconDripicons /> },
  { path: "/icons-materialdesign", component: <IconMaterialdesign /> },
  { path: "/icons-fontawesome", component: <IconFontawesome /> },

  // Tables
  { path: "/tables-basic", component: <BasicTables /> },
  { path: "/tables-datatable", component: <DatatableTables /> },

  // Maps
  { path: "/maps-google", component: <MapsGoogle /> },

  // Forms
  { path: "/form-elements", component: <FormElements /> },
  { path: "/form-layouts", component: <FormLayouts /> },
  { path: "/form-advanced", component: <FormAdvanced /> },
  { path: "/form-editors", component: <FormEditors /> },
  { path: "/form-mask", component: <FormMask /> },
  { path: "/form-repeater", component: <FormRepeater /> },
  { path: "/form-uploads", component: <FormUpload /> },
  { path: "/form-wizard", component: <FormWizard /> },
  { path: "/form-validation", component: <FormValidations /> },

  // Ui
  { path: "/ui-alerts", component: <UiAlert /> },
  { path: "/ui-buttons", component: <UiButtons /> },
  { path: "/ui-cards", component: <UiCards /> },
  { path: "/ui-carousel", component: <UiCarousel /> },
  { path: "/ui-colors", component: <UiColors /> },
  { path: "/ui-dropdowns", component: <UiDropdown /> },
  { path: "/ui-general", component: <UiGeneral /> },
  { path: "/ui-grid", component: <UiGrid /> },
  { path: "/ui-images", component: <UiImages /> },
  { path: "/ui-lightbox", component: <UiLightbox /> },
  { path: "/ui-modals", component: <UiModal /> },
  { path: "/ui-progressbars", component: <UiProgressbar /> },
  { path: "/ui-tabs-accordions", component: <UiTabsAccordions /> },
  { path: "/ui-typography", component: <UiTypography /> },
  { path: "/ui-video", component: <UiVideo /> },
  { path: "/ui-session-timeout", component: <UiSessionTimeout /> },
  { path: "/ui-rating", component: <UiRating /> },
  { path: "/ui-rangeslider", component: <UiRangeSlider /> },
  { path: "/ui-notifications", component: <UiNotifications /> },
  { path: "/ui-offcanvas", component: <UiOffCanvas /> },
  { path: "/ui-utilities", component: <UiUtilitie /> },
  { path: "/ui-placeholders", component: <UiPlaceholders /> },
  { path: "/ui-toasts", component: <UiToasts /> },

  //Utility
  { path: "/pages-starter", component: <PagesStarter /> },
  { path: "/pages-timeline", component: <PagesTimeline /> },
  { path: "/pages-faqs", component: <PagesFaqs /> },
  { path: "/pages-pricing", component: <PagesPricing /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
];

const publicRoutes = [
  { path: "/login", component: <Login /> },
  { path: "/logout", component: <Logout /> },
  { path: "/forgot-password", component: <ForgetPwd /> },
  { path: "/register", component: <Register /> },



  // Authentication Inner
  { path: "/pages-login", component: <Login1 /> },
  { path: "/pages-login-2", component: <Login2 /> },
  { path: "/pages-register", component: <Register1 /> },
  { path: "/pages-register-2", component: <Register2 /> },
  { path: "/page-recoverpw", component: <Recoverpw /> },
  { path: "/page-recoverpw-2", component: <Recoverpw2 /> },
  { path: "/pages-forgot-pwd", component: <ForgetPwd1 /> },
  { path: "/auth-forgot-pwd-2", component: <ForgetPwd2 /> },
  { path: "/auth-lock-screen", component: <LockScreen /> },
  { path: "/auth-lock-screen-2", component: <LockScreen2 /> },
  { path: "/page-confirm-mail", component: <ConfirmMail /> },
  { path: "/page-confirm-mail-2", component: <ConfirmMail2 /> },
  { path: "/auth-email-verification", component: <EmailVerification /> },
  { path: "/auth-email-verification-2", component: <EmailVerification2 /> },
  { path: "/auth-two-step-verification", component: <TwostepVerification /> },
  { path: "/auth-two-step-verification-2", component: <TwostepVerification2 /> },
  { path: "/login", component: <Login /> },
  { path: "/logout", component: <Logout /> },
  { path: "/forgot-password", component: <ForgetPwd /> },
  { path: "/register", component: <Register /> },
  { path: "/pages-maintenance", component: <PagesMaintenance /> },
  { path: "/pages-comingsoon", component: <PagesComingsoon /> },
  { path: "/pages-404", component: <Pages404 /> },
  { path: "/pages-500", component: <Pages500 /> },
  { path: "/pages-login", component: <Login1 /> },
  { path: "/pages-login-2", component: <Login2 /> },
  { path: "/pages-register", component: <Register1 /> },
  { path: "/pages-register-2", component: <Register2 /> },
  { path: "/page-recoverpw", component: <Recoverpw /> },
  { path: "/page-recoverpw-2", component: <Recoverpw2 /> },
  { path: "/pages-forgot-pwd", component: <ForgetPwd1 /> },
  { path: "/auth-forgot-pwd-2", component: <ForgetPwd2 /> },
  { path: "/auth-lock-screen", component: <LockScreen /> },
  { path: "/auth-lock-screen-2", component: <LockScreen2 /> },
  { path: "/page-confirm-mail", component: <ConfirmMail /> },
  { path: "/page-confirm-mail-2", component: <ConfirmMail2 /> },
  { path: "/auth-email-verification", component: <EmailVerification /> },
  { path: "/auth-email-verification-2", component: <EmailVerification2 /> },
  { path: "/auth-two-step-verification", component: <TwostepVerification /> },
  { path: "/auth-two-step-verification-2", component: <TwostepVerification2 /> },
];




export { authProtectedRoutes, publicRoutes };