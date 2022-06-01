import { getAddress, signText } from './ethers-service';
import { generateChallenge } from './generate-challenge'
import { authenticate } from './authenticate'

export const login = async () => {
    const address = await getAddress();
    const challengeResponse = await generateChallenge(address);
  
    const signature = await signText(challengeResponse)
  
    const accessTokens = await authenticate(address, signature);
    console.log(accessTokens);
}