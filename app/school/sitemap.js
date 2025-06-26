import { base } from "../api/airtable";

async function fetchAllRecords(tableName) {
  try {
    const records = await base(tableName).select({}).all();
    return records;
  } catch (error) {
    console.error(`Error fetching data from table: ${tableName}`, error);
    return [];
  }
}

export default async function sitemap() {
  const hostname = "edulister.com";

  const citySheet = await fetchAllRecords("city");

  let schoolLinks = [];

  for (const city of citySheet) {
    const sheetName = city.fields.sheetName;

    const schoolData = await fetchAllRecords(sheetName);
    const links = schoolData.map((school) => {
      return {
        key: school.id || school.fields.slug,
        url: `https://${hostname}/school/${sheetName}/${school.fields.slug}`,
        lastModified: school.fields.modifiedDate || new Date().toISOString(),
      };
    });

    schoolLinks = [...schoolLinks, ...links];
  }

  return [...schoolLinks];
}
