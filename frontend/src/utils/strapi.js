import qs from "qs";

export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://127.0.0.1:1337"
  }${path}`;
}

export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  try {
    // Merge default and user options
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    );
  }
}

export async function getPageBySlug(slug) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  const path = `/pages`;
  const urlParamsObject = {
    filters: { slug },
    populate: {
      metadata: true,
      sections: {
        populate: "*",
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };

  const response = await fetchAPI(path, urlParamsObject, options);

  return response.data[0].attributes;
}

export async function getGlobal() {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  const path = "/global";
  const options = { headers: { Authorization: `Bearer ${token}` } };

  const urlParamsObject = {
    populate: ["metadata"],
  };

  const response = await fetchAPI(path, urlParamsObject, options);

  return response.data.attributes;
}

export function strapiSectionNameToReactComponentName(component) {
  return snakeCaseToPascalCase(component.split(".")[1]);
}

export function snakeCaseToPascalCase(string) {
  return string
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}
