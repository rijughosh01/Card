export const showToast = (message, icon = "✨") => {
  const event = new CustomEvent("app-toast", {
    detail: { message, icon, id: Date.now() + Math.random() },
  });
  window.dispatchEvent(event);
};
