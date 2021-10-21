import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import * as tokenActions from "../../redux/token/token.actions";

const useToken = () => {
  const { getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();
  const [tokenLoaded, setTokenLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        dispatch(
          tokenActions.fetchTokensSuccess({ access_token: accessToken })
        );
        setTokenLoaded(true);
      } catch (e) {
        setTokenLoaded(false);
        dispatch(tokenActions.fetchTokensError(e.message));
      }
    })();
  }, [getAccessTokenSilently, tokenLoaded, dispatch]);

  return { loaded: tokenLoaded };
};

export { useToken };
