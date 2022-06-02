import { getAddress, signText } from './ethers-service';
import { generateChallenge } from './generate-challenge'
import { authenticate } from './authenticate'

export const login = async () => {
    try {
    const address = await getAddress();
    const challengeResponse = await generateChallenge(address);

    console.log(challengeResponse);
  
    const signature = await signText(challengeResponse)
  
    const accessTokens = await authenticate(address, signature);
    localStorage.setItem('auth_token', accessTokens?.data?.authenticate?.accessToken);
    return accessTokens;
} catch (error) {
    console.log(error);
    return error;
}
}