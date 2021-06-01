const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'merry film assist inmate disagree cheap sketch friend margin dice license mention',
    'https://goerli.infura.io/v3/32c7b78d3447433a8488396c66051605'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account',accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode})
        .send({gas:'1000000',from :accounts[0]});
    
    console.log('Contract deployed to',result.options.address);
};

deploy();