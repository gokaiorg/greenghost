"use client";

import { useEffect, useState, createContext, useContext } from "react";
import sdk from "@farcaster/miniapp-sdk";

type FarcasterContextType = {
  isSDKLoaded: boolean;
  context?: Awaited<typeof sdk.context>;
};

const FarcasterContext = createContext<FarcasterContextType>({
  isSDKLoaded: false,
});

export const useFarcaster = () => useContext(FarcasterContext);

export default function FarcasterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [context, setContext] = useState<Awaited<typeof sdk.context>>();

  useEffect(() => {
    const load = async () => {
      setContext(await sdk.context);
      sdk.actions.ready();
    };
    if (sdk && !isSDKLoaded) {
      setIsSDKLoaded(true);
      load();
    }
  }, [isSDKLoaded]);

  return (
    <FarcasterContext.Provider value={{ isSDKLoaded, context }}>
      {children}
    </FarcasterContext.Provider>
  );
}
