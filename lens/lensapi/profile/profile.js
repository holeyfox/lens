import { apolloClient } from '../auth/apollo-client';
import { gql } from '@apollo/client'

const query = gql`mutation CreateProfile($request: CreateProfileRequest!) {
  createProfile(request: $request) {
    ... on RelayerResult {
      txHash
    }
    ... on RelayError {
      reason
    }
    __typename
  }
}`

  export const createProfile = async (handle) => {
    const response = await apolloClient.mutate({
        mutation: query,
        variables: {
            request: { 
              handle,
              profilePictureUri: null,
              followNFTURI: null,
              followModule: null
              }
        }
   }
   
   ).catch(error => console.error(error));

   return response;
 }