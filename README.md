
                        string ReportFileName = "";
                        string[] arrTabNames = { "CHARTS Automation Report" };
                        ReportParameter[] RParameterArray = new ReportParameter[2];
                        RParameterArray[0] = new Microsoft.Reporting.WebForms.ReportParameter("ReportHeader", lblReportHeader.Text);
                        RParameterArray[1] = new Microsoft.Reporting.WebForms.ReportParameter("ReportStartDate", StartDate);

                        ReportFileName = "ReportAutomationDetail.rdlc";
                        RenderReportToExcel(ReportFileName, "DSAutomationDetail_DTAutomationDetail", dsReportData.Tables[0], RParameterArray, "CHARTSAutomationReport", arrTabNames);

 void RenderReportToExcel(string ReportFileName, string XSDDatasetName, System.Data.DataTable dtReportData, ReportParameter[] reportParams, string ExcelFileDisplayName, string[] TabNames)
        {

            LocalReport localReport = new LocalReport();
            Warning[] warnings;
            string[] streams;
            byte[] renderedBytes;
            byte[] renamedBytes;
            string mimeType;
            string encoding;
            string fileNameExtension;
            localReport.ReportPath = Server.MapPath("../ReportManagement/rdlc/" + ReportFileName);

            if (reportParams != null)
                localReport.SetParameters(reportParams);
            ReportDataSource rdsReport = new ReportDataSource();
            rdsReport.Name = XSDDatasetName;
            rdsReport.Value = dtReportData;

            localReport.DataSources.Clear();
            localReport.DataSources.Add(rdsReport);

            string reportType = "EXCEL";

            string deviceInfo =
            "<DeviceInfo>" +
            "  <OutputFormat>EXCEL</OutputFormat>" +
            "  <OmitDocumentMap>false</OmitDocumentMap>" +
            "  <OmitFormulas>true</OmitFormulas>" +
            "  <SimplePageHeaders>false</SimplePageHeaders>" +
            "</DeviceInfo>";

            //Render the report in excel byte stream
            renderedBytes = localReport.Render(reportType, deviceInfo, out mimeType, out encoding, out fileNameExtension, out streams, out warnings);

            Response.Clear();
            Response.ContentType = mimeType;
            Response.AddHeader("content-disposition", "attachment; filename=" + ExcelFileDisplayName + "." + fileNameExtension);
            Response.BinaryWrite(renderedBytes);
            Response.End();
        }
