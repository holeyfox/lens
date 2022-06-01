import { ethers } from 'ethers';

let getAddress;
let signText;

if (typeof window !== 'undefined') {

    let ethersProvider = new ethers.providers.Web3Provider(window.ethereum);

    getAddress = async() => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        return accounts[0];
    }

    signText = (text) => {
        console.log(ethersProvider.getSigner(), 'ethers')
        const signer = ethersProvider.getSigner();
        return signer.signMessage(text);
    }
}

export { getAddress, signText };