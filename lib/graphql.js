export async function fetchGraphQL(query, variables = {}) {
  const res = await fetch("https://radyinterior.ae/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`GraphQL request failed: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();

  if (json.errors) {
    console.error("GraphQL Errors:", json.errors);
  }

  return json.data;
}