import { gql } from "@apollo/client";

const INFO_PERSON = gql `
    querys{
        characters{
            results{
                name
                species
                gender
                image
            }
        }
    }
`;

export default INFO_PERSON