import { AxiosError, AxiosResponse } from "axios";
import { useEffect, ReactNode } from "react";

import { authRequest } from "#lib/api/axios";
import asyncWrapper from "#lib/asyncWrapper";

import { getAccessToken, setAccessToken } from "./accessToken";

type Props = {
  children: ReactNode;
  refetchInterval?: number;
};

type RefreshResponse = {
  accessToken: string;
};

const refetchToken = async () => {
  const [res, err] = await asyncWrapper<AxiosResponse<RefreshResponse>, AxiosError>(
    authRequest.post("/refresh")
  );
  if (err) {
    console.log(err.message);
    return;
  }

  const accessToken = res?.data?.accessToken || null;
  if (!accessToken) {
    console.log(err);
    return;
  }
  setAccessToken(accessToken);
};

const AuthProvider = ({ children, refetchInterval }: Props) => {
  useEffect(() => {
    if (refetchInterval) {
      const refetchIntervalTimer = setInterval(() => {
        const accessToken = getAccessToken();

        if (accessToken !== "") {
          refetchToken();
        }
      }, refetchInterval * 1000);

      return () => clearInterval(refetchIntervalTimer);
    }
  }, [refetchInterval]);

  return <>{children}</>;
};

export { AuthProvider };
