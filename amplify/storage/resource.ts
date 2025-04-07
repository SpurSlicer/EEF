import { defineStorage } from "@aws-amplify/backend";

const storage = defineStorage({
    name: "EEF_Storage",
    access: (allow) => ({
        "media/entity_id/*": [
            allow.entity("identity").to(["read", "write", "delete"])
        ]
    })
});

export {
    storage
}