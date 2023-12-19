import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";

const main = async (port: string): Promise<void> => {

    const connection = new Connection(clusterApiUrl("devnet"));
    const address = new PublicKey('CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN');
    const lamports = await connection.getBalance(address);
    
    console.log(`\nThe balance of the account at ${address} is ${lamports} lamports`); 
    console.log(`\nIn other words, that account has ${lamports / LAMPORTS_PER_SOL} SOL`)
}

export default main;