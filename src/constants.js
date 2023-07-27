function onError(event) {
  const defaultAvatar =
    "https://cdn.vectorstock.com/i/preview-1x/70/84/default-avatar-profile-icon-symbol-for-website-vector-46547084.jpg";
  event.target.src = defaultAvatar;
  event.onerror = null;
}

export { onError };
