import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AppRoutes } from "./routes/app-routes";
import { useQuery, gql } from "@apollo/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { usePost } from "./hooks/post/post.hook";
import { postService } from "./services/post/post.service";

const QUERY = gql`
  {
    myBlogPostsCollection {
      total
      items {
        title
        description {
          json
        }
        createdAt
        image {
          fileName
          size
          description
          url
        }
      }
    }
  }
`;
const App: React.FC = () => {
  const { data, loading } = useQuery(QUERY);

  const posts = postService
    .fetchPost()
    .then((data) => data)
    .catch((error) => error);

  console.log("Post: ", posts);
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ayeah Godlove Akoni</title>
      </Helmet>
      <>
        {loading ? (
          <h2>Loading Blog posts</h2>
        ) : (
          <>
            {data.myBlogPostsCollection.items.map((d: any, index: number) => (
              <div key={index}>
                <p>{d.title}</p>
                <div>{documentToReactComponents(d.description.json)}</div>
                {/* <div>
                  {d.description.json.content.map(
                    (item: any, index: number) => (
                      <p key={index}>{item.content[0].value}</p>
                    )
                  )}
                </div> */}
              </div>
            ))}
          </>
        )}
      </>
      <AppRoutes />
    </HelmetProvider>
  );
};

export default App;
