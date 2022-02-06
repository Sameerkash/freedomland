import { useState } from "react";

export default function useUserProfile() {
  const [user, setUser] = useState(null);

  function updateUser(updatedUser) {
    setUser(updatedUser);
  }

  return [user, updateUser];
}
