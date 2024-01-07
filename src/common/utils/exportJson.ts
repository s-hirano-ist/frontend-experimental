export function jsonUrl<T>(data: T) {
  const blobData = new Blob([JSON.stringify(data)], {
    type: "text/json",
  });
  return URL.createObjectURL(blobData);
}
