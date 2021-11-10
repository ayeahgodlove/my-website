import React from "react";
import styled from "styled-components";
import Title from "../../components/Title";
import { InnerLayout, MainLayout } from "../../styles/Layouts";
import { useQuery, gql } from "@apollo/client";
import { Spin } from "antd";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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

const BlogsPage: React.FC = () => {
  const { data, loading } = useQuery(QUERY);

  if (!loading) {
    console.log("data: ", data.myBlogPostsCollection);
  }
  return (
    <MainLayout>
      <BlogsStyled>
        <Title title={"Blogs"} span={"Blogs"} />
        <InnerLayout className={"blog"}>
          {loading ? (
            <>
              <Spin size="large" style={{ color: "#f4f4f4" }} />
            </>
          ) : (
            <>
              {data.myBlogPostsCollection.items.map(
                (item: any, index: number) => {
                  return (
                    <div key={index} className={"blog-item"}>
                      <div className="image">
                        <img
                          src={item.image.url}
                          alt={item.image.description}
                        />
                      </div>
                      <div className="title">
                        <a href={item.link}>{item.title}</a>
                      </div>
                    </div>
                  );
                }
              )}
            </>
          )}
        </InnerLayout>
      </BlogsStyled>
    </MainLayout>
  );
};

const BlogsStyled = styled.div`
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    @media screen and (max-width: 770px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .blog-item {
      background-color: var(--background-dark-grey);
      padding: 1rem 1rem;
    }
    .image {
      width: 100%;
      overflow: hidden;
      padding-bottom: 0.5rem;
      img {
        width: 100%;
        height: 90%;
        object-fit: cover;
        transition: all 0.4s ease-in-out;
        &:hover {
          cursor: pointer;
          transform: rotate(3deg) scale(1.1);
        }
      }
    }

    .title {
      a {
        font-size: 1.8rem;
        padding: 2rem 0;
        color: var(--white-color);
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
`;

export default BlogsPage;
