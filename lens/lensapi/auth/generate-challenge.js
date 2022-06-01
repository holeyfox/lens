import { apolloClient } from './apollo-client';
import { gql } from '@apollo/client'

const query = gql`query GetChallenge($request: ChallengeRequest!) {
  challenge(request: $request) {
        text
    }
  }
`

export const generateChallenge = async (address) => {
   const response = await apolloClient.query({
       query,
       variables: {
           request: {
               address
           }
       }
  })

  return response.data.challenge.text;
}