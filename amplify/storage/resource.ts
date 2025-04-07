import { defineStorage } from "@aws-amplify/backend";

const storage = defineStorage({
  name: "amplifyEEF",
  access: (allow) => ({
    "media/{entity_id}/*": [
      allow.entity("identity").to(["read", "write", "delete"]),
    ],
  }),
});


export {
    storage
}