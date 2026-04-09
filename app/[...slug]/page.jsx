import { fetchGraphQL } from "@/lib/graphql";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug
    ? "/" + resolvedParams.slug.join("/") + "/"
    : "/";

  const data = await fetchGraphQL(
    `
    query GetNodeByUri($uri: String!) {
      nodeByUri(uri: $uri) {
        __typename
        ... on Page {
          content
          databaseId
        }
        ... on Post {
          content
          databaseId
        }
      }
    }
    `,
    { uri: slug }
  );

  const page = data?.nodeByUri;

  if (!page) {
    notFound();
  }

  return (
    <>
      <link
        rel="stylesheet"
        href={`https://radyinterior.ae/wp-content/uploads/elementor/css/post-${page.databaseId}.css`}
      />
      <main
        className={`page page-id-${page.databaseId} elementor elementor-${page.databaseId}`}
        dangerouslySetInnerHTML={{ __html: page.content }}
      />
    </>
  );
}