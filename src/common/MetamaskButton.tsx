import { useMetaMask } from "metamask-react";

export const MetamaskButton = () => {
  const { status, connect, account } = useMetaMask();

  const statusActions: Record<
    typeof status,
    { text: string; action?: () => void }
  > = {
    initializing: {
      text: "Syncing..."
    },
    unavailable: {
      text: "Install wallet"
    },
    notConnected: {
      text: "Connect",
      action: connect
    },
    connecting: {
      text: "Connecting..."
    },
    connected: {
      text: `Connected ${account}`
    }
  };

  return (
    <button
      onClick={statusActions[status].action}
      disabled={!statusActions[status].action}
    >
      {statusActions[status].text}
    </button>
  );
};
