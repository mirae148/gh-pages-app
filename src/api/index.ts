export interface ApiData {
  title: string;
  author: string;
  group: string;
  topics: string[];
}

export async function getJson(): Promise<ApiData> {
  const url = process.env.NODE_ENV === "production"
    ? "https://raw.githubusercontent.com/mirae148/gh-pages-app/gh-pages/static/db/data.json"
    : "http://localhost:3001/api/data";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Не удалось загрузить данные");
  }
  return response.json();
}
