import React from "react";
import styled from "styled-components";
import Title from "../../components/Title";
import gallery from "../../data/gallery";
import { InnerLayout, MainLayout } from "../../styles/Layouts";

const GalleryPage: React.FC = () => {
  return (
    <MainLayout>
      <BlogsStyled>
        <Title title={"Gallery"} span={"Gallery"} />
        <InnerLayout className={"blog"}>
          {gallery.map((g) => {
            return (
              <div key={g.id} className={"blog-item"}>
                <div className="image">
                  <img src={g.image} alt="" />
                </div>
                <div className="title">
                  <a href={g.link}>{g.title}</a>
                </div>
              </div>
            );
          })}
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
      height: 300px;
      overflow: hidden;
      padding-bottom: 0 !important;
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
      text-align: center;
      a {
        font-size: 1.5rem;
        padding: 1.5rem 0;
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

export default GalleryPage;
