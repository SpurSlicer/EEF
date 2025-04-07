import { ClientSchema } from "@aws-amplify/backend"
import { schema } from "./resource"

type EEF_Schema = ClientSchema<typeof schema>

export {
    EEF_Schema
}