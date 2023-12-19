import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from '@solana/web3.js';

export default async () => {
    const mySonicPk = process.env.SONIC_SOLANA_PK!;

    const publicKey = new PublicKey(mySonicPk);
    const connection = new Connection(clusterApiUrl('mainnet-beta'));

    console.log('💰 SOL:\n');
    
    let count = 1;
    var myInterval = setInterval(async () => {
        if (count < 10){
            const balanceInLamports = await connection.getBalance(publicKey);
            const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
            
            const now = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute:'2-digit', second:'2-digit'});
            console.log(`${now} - ${balanceInSOL.toFixed(4)}`);

            // process.stdout.clearLine(0);
            // process.stdout.cursorTo(0);
            // process.stdout.write(balanceInSOL.toString());
            
            // count++;
        } else {
            clearInterval(myInterval);
        }
    }, 1500);
};

