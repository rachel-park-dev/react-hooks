import React from "react";

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
      onCancel();
    }
  };

  return confirmAction;
};

export default useConfirm;
