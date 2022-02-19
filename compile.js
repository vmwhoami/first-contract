const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.join(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

var input = {
  language: 'Solidity',
  sources: {
      'Inbox.sol': {content : source}
  },
  settings: {
      outputSelection: {
          '*': {
              '*': [ '*' ]
          }
      }
  }
};

var output = JSON.parse(solc.compile(JSON.stringify(input)))

for (var contractName in output.contracts['Inbox.sol']) {
  console.log(contractName + ': ' + output.contracts['Inbox.sol'][contractName].evm.bytecode.object)
}