// env variables
const url = import.meta.env.VITE_API_URL;
const apiToken = import.meta.env.VITE_API_TOKEN;
const expoTableId = import.meta.env.VITE_EXPO_TABLE_ID;
const collTableId = import.meta.env.VITE_COLLECTION_TABLE_ID;
const collCatTableId = import.meta.env.VITE_COLLECTION_CATEGORY_TABLE_ID;
const linkId = import.meta.env.VITE_COLLECTION_LINK_ID;

// set headers with api token
const headers = new Headers();
if (apiToken) {
  headers.append("xc-token", apiToken);
}

/*
 * EXPOSITIONS
 */

// GET all expositions
export const getAllExpositions = async () => {
  try {
    const response = await fetch(`${url}/${expoTableId}/records`, {
      method: "GET",
      headers,
    });
    let resp = await response.json();
    let data = resp.list;
    return data;
  } catch (error) {
    console.error(error);
  }
};

// GET exposition by id
export const getExpositionById = async (id: string | string[]) => {
  try {
    const response = await fetch(`${url}/${expoTableId}/records/${id}`, {
      method: "GET",
      headers,
    });
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

/*
 * COLLECTIONS
 */

// GET all collections
export const getAllCollections = async () => {
  try {
    const response = await fetch(`${url}/${collTableId}/records`, {
      method: "GET",
      headers,
    });
    let resp = await response.json();
    console.log(resp);
    let data = resp.list;
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

// GET collection by id
export const getCollectionById = async (id: string | string[]) => {
  try {
    const response = await fetch(`${url}/${collTableId}/records/${id}`, {
      method: "GET",
      headers,
    });
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// GET collections by collection category id
export const getCollectionByCategoryId = async (categoryId: string) => {
  try {
    const response = await fetch(
      `${url}/${collTableId}links/category/records/${categoryId}`,
      {
        method: "GET",
        headers,
      }
    );
    let resp = await response.json();
    let data = resp.list;
    return data;
  } catch (error) {
    console.error(error);
  }
};

/*
 * COLLECTION CATEGORIES
 */

// GET all collection categories
export const getAllCollectionCategories = async () => {
  try {
    const response = await fetch(`${url}/${collCatTableId}/records`, {
      method: "GET",
      headers,
    });
    let resp = await response.json();
    let data = resp.list;
    return data;
  } catch (error) {
    console.error(error);
  }
};

// GET collection category by id
export const getCollectionCategoryById = async (id: string | string[]) => {
  try {
    const response = await fetch(`${url}/${collCatTableId}/records/${id}`, {
      method: "GET",
      headers,
    });
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// GET collection category by id
export const getAllCollectionFromCategoryById = async (
  id: string | string[]
) => {
  try {
    const response = await fetch(
      `${url}/${collCatTableId}/links/${linkId}/records/${id}?fields=title%2Cthumbnails%2Cdescription%2Cimages`,
      {
        method: "GET",
        headers,
      }
    );
    let resp = await response.json();
    let data = resp.list;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default {
  getAllExpositions,
  getExpositionById,
  getAllCollections,
  getCollectionById,
  getCollectionByCategoryId,
  getAllCollectionCategories,
  getCollectionCategoryById,
  getAllCollectionFromCategoryById,
};
