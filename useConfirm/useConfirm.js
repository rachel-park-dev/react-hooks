import React from "react";
import { ReactDOM } from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (typeof onConfrim !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      try {
        onCancel();
      } catch (error) {
        return;
      }
    }
  };

  return confirmAction;
};

export default useConfirm;
