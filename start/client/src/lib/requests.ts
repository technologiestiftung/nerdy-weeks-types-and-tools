export interface ApiResponse {
  fruits: { description: string; data: string[] };
}

export async function getFoods(url: string): Promise<ApiResponse> {
  const response = await fetch(url);
  if (!response.ok) {
    console.error(await response.text());
    throw new Error("Failed to fetch food");
  }
  const json = (await response.json()) as ApiResponse;
  return json;
}
