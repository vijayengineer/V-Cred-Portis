import Portis from '@portis/web3';
import Web3 from 'web3';


const myBSCNode = {
    nodeUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
    chainId: '97'
}


export const portis = new Portis('1eec0edb-8b04-4423-894f-98b83d2bccd7', myBSCNode);
export const web3 = new Web3(portis.provider);