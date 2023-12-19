import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { fromLamportsToSol } from './utils/cryptoHelper';

const main = async (port: string): Promise<void> => {

    const connection = new Connection(clusterApiUrl("devnet"));
    const address = new PublicKey('CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN');
    const lamports = await connection.getBalance(address);
    
    console.log(`\nThe balance of the account at ${address} is ${lamports} lamports`); 
    console.log(`\nIn other words, that account has ${fromLamportsToSol(lamports)} SOL`)
}

export default main;