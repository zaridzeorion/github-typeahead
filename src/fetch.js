export async function GET(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) throw new Error(response.statusText);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
