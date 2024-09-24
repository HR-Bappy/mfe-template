export const checkServerStatus = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok; // True if status is 200-299
  } catch (error) {
    console.error(`Failed to fetch ${url}`, error);
    return false;
  }
};
