import { qualifiersSpreadsheetId } from "@/constants";
import {
  getAuthClient,
  getSpreadSheetValues,
} from "@/services/googleSheetsService";

describe("Google Sheets Service", () => {
  it("Token can be obtained", async () => {
    await getAuthClient();
  });

  it("Google Sheet can be read", async () => {
    const authToken = await getAuthClient();
    const result = await getSpreadSheetValues(
      qualifiersSpreadsheetId,
      authToken,
      "'Masters Set A - Dumping Ground'!A2:H2"
    );

    expect(result.status).toBe(200);

    const headerRow = (result.data.values as string[][])[0];
    const firstHeaderCell = headerRow[0];

    expect(firstHeaderCell).toBe("Timestamp of last song");
  });
});
