const baseUrl = "/api/v1/jobs";

export const getJobs = async (): Promise<[]> => {
  try {
    const res = await fetch(baseUrl);
    const data = await res.json();
    return data;
  } catch (e: any) {
    throw new Error("Error fetching data", e);
  }
};
