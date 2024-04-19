function generateID(): string {
  // Create a timestamp in milliseconds
  const timestamp = new Date().getTime();

  // Generate a random number based on the timestamp
  const randomPart = Math.floor((Math.random() + 1) * timestamp);

  // Convert to base-36 (numbers + letters), and get the substring to ensure a fixed length
  return `${timestamp.toString(36)}-${randomPart.toString(36)}`;
}

export default generateID;
