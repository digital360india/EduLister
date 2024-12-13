import { base } from "./api/airtable";

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
  const hostname = "edu123.in";

  const categoryData = await fetchAllRecords("category 2");
  const categoryLinks = categoryData.map((sing) => {
    return {
      key: sing.id,
      url: `https://${hostname}/category/${sing.fields.slug}`,
      lastModified: sing.fields.modifiedDate || new Date().toISOString(),
    };
  });

  const staticLinks = [
    { url: "https://edu123.in", lastModified: "2023-12-21T11:58:24.000Z" },
    {
      url: "https://edu123.in/about",
      lastModified: "2023-12-21T11:58:24.000Z",
    },
    {
      url: "https://edu123.in/compare-schools",
      lastModified: "2023-12-21T11:58:24.000Z",
    },
    {
      url: "https://edu123.in/privacy-policy",
      lastModified: "2023-12-21T11:58:24.000Z",
    },
    {
      url: "https://edu123.in/contact",
      lastModified: "2023-12-21T11:58:24.000Z",
    },
    {
      url: "https://edu123.in/terms-and-condition",
      lastModified: "2023-12-21T11:58:24.000Z",
    },
    {
      url: "https://edu123.in/author",
      lastModified: "2023-12-21T11:58:24.000Z",
    },
    {
      url: "https://edu123.in/school/sitemap.xml",
      lastModified: "2023-12-21T11:58:24.000Z",
    },
  ];

  return [...staticLinks, ...categoryLinks];
}
