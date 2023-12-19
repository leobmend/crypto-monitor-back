import main from './app';
import checkBalance from './functions/checkBalance';
import generateKey from './functions/generateKey';

const { PORT } = process.env;

checkBalance();
