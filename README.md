
                        string ReportFileName = "";
                        string[] arrTabNames = { "CHARTS Automation Report" };
                        ReportParameter[] RParameterArray = new ReportParameter[2];
                        RParameterArray[0] = new Microsoft.Reporting.WebForms.ReportParameter("ReportHeader", lblReportHeader.Text);
                        RParameterArray[1] = new Microsoft.Reporting.WebForms.ReportParameter("ReportStartDate", StartDate);

                        ReportFileName = "ReportAutomationDetail.rdlc";
                        RenderReportToExcel(ReportFileName, "DSAutomationDetail_DTAutomationDetail", dsReportData.Tables[0], RParameterArray, "CHARTSAutomationReport", arrTabNames);
