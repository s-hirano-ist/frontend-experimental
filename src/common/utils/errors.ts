import { useSnackbar } from "@/common/hooks/useSnackbar";

export const useHandleError = () => {
  const { addSnackbar } = useSnackbar();

  const handleError = (e: Error) => {
    addSnackbar(
      e.name in errorMessages
        ? errorMessages[e.name as keyof typeof errorMessages]
        : errorMessages.default,
      {
        variant: "error",
      },
    );
  };

  return { handleError } as const;
};

export class UndefinedError extends Error {
  constructor(message: MessageType) {
    super(message);
    this.name = message;
  }
}

type MessageType = "UnknownException"; // TODO: add more message types here
type DefaultMessageType = "default";

export const errorMessages: Record<MessageType | DefaultMessageType, string> = {
  UnknownException:
    "何かしらの問題が発生しました。もう一度やり直してください。",
  default: "何らかの問題が発生しました。もう一度やり直してください。",
};
