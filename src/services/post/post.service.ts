import axios from "axios";

export const postService = {
  fetchPost: (): Promise<any> =>
    axios.get(
      `${process.env.REACT_APP_CONTENTFUL_BASE_URL}/spaces/${process.env.REACT_APP_SPACE_ID}/entries?access_token=${process.env.REACT_APP_CONTENT_DELIVERY_API_KEY}&content_type=myBlogPosts`
    ),
};
