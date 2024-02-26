export const COMMANDS_TREE: Command[] = [
  {
    commandName: 'query',
    description: '',
    arguments: [],
    childCommands: [
      {
        commandName: 'account',
        description: 'Query for account by address',
        arguments: [
          { argumentName: 'address', description: 'Address', mandatory: true },
        ],
        childCommands: [],
        flags: [
          {
            flagName: 'grpc-addr',
            description: 'The gRPC endpoint to use for this chain',
            dataType: 'string',
          },
          {
            flagName: 'grpc-insecure',
            description:
              ' allow gRPC over insecure channels, if not TLS the server must use TLS',
            dataType: null,
          },
          {
            flagName: 'height',
            description:
              'Use a specific height to query state at (this can error if the node is pruning state)',
            dataType: 'number',
          },
          { flagName: 'help', description: 'Help for account', dataType: null },
          {
            flagName: 'node',
            description:
              '<host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")',
            dataType: 'string',
          },
          {
            flagName: 'output',
            description: 'Output format (text|json) (default "text")',
            dataType: 'string',
          },
        ],
      },
      {
        commandName: 'auth',
        description: ' Querying commands for the auth module',
        arguments: [
          { argumentName: 'address', description: 'Address', mandatory: true },
        ],
        childCommands: [
          {
            commandName: 'account',
            description: 'Query for account by address',
            arguments: [
              {
                argumentName: 'address',
                description: 'Address',
                mandatory: true,
              },
            ],
            childCommands: [],
            flags: [
              {
                flagName: 'grpc-addr',
                description: 'The gRPC endpoint to use for this chain',
                dataType: 'string',
              },
              {
                flagName: 'grpc-insecure',
                description:
                  ' allow gRPC over insecure channels, if not TLS the server must use TLS',
                dataType: null,
              },
              {
                flagName: 'height',
                description:
                  'Use a specific height to query state at (this can error if the node is pruning state)',
                dataType: 'number',
              },
              {
                flagName: 'help',
                description: 'Help for account',
                dataType: null,
              },
              {
                flagName: 'node',
                description:
                  '<host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")',
                dataType: 'string',
              },
              {
                flagName: 'output',
                description: 'Output format (text|json) (default "text")',
                dataType: 'string',
              },
            ],
          },
          {
            commandName: 'accounts',
            description: 'Query all the accounts',
            arguments: [],
            childCommands: [],
            flags: [
              {
                flagName: 'count-total',
                description:
                  'count total number of records in all-accounts to query for',
                dataType: null,
              },
              {
                flagName: 'grpc-addr',
                description: 'The gRPC endpoint to use for this chain',
                dataType: 'string',
              },
              {
                flagName: 'grpc-insecure',
                description:
                  'Allow gRPC over insecure channels, if not TLS the server must use TLS',
                dataType: null,
              },
              {
                flagName: 'height',
                description:
                  'Use a specific height to query state at (this can error if the node is pruning state)',
                dataType: 'number',
              },
              {
                flagName: 'help',
                description: 'Help for accounts',
                dataType: 'number',
              },
              {
                flagName: 'limit',
                description:
                  'Pagination limit of all-accounts to query for (default 100)',
                dataType: 'number',
              },
              {
                flagName: 'node',
                description:
                  '<host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")',
                dataType: 'string',
              },
              {
                flagName: 'offset',
                description: 'Pagination offset of all-accounts to query for',
                dataType: 'number',
              },
              {
                flagName: 'output',
                description: 'Output format (text|json) (default "text")',
                dataType: 'string',
              },
              {
                flagName: 'page',
                description:
                  'Pagination page of all-accounts to query for. This sets offset to a multiple of limit (default 1)',
                dataType: 'number',
              },
              {
                flagName: 'page-key',
                description: 'Pagination page-key of all-accounts to query for',
                dataType: 'string',
              },
              {
                flagName: 'reverse',
                description: 'Results are sorted in descending order',
                dataType: null,
              },
            ],
          },
          {
            commandName: 'address-by-acc-num',
            description: 'Query for an address by account number',
            arguments: [
              {
                argumentName: 'acc-num',
                description: 'Account Number',
                mandatory: true,
              },
            ],
            childCommands: [],
            flags: [
              {
                flagName: 'grpc-addr',
                description: 'The gRPC endpoint to use for this chain',
                dataType: 'string',
              },
              {
                flagName: 'grpc-insecure',
                description:
                  'Allow gRPC over insecure channels, if not TLS the server must use TLS',
                dataType: null,
              },
              {
                flagName: 'height',
                description:
                  'Use a specific height to query state at (this can error if the node is pruning state)',
                dataType: 'number',
              },
              {
                flagName: 'help',
                description: 'Help for address-by-acc-num',
                dataType: 'number',
              },
              {
                flagName: 'node',
                description:
                  '<host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")',
                dataType: 'string',
              },
              {
                flagName: 'output',
                description: 'Output format (text|json) (default "text")',
                dataType: 'string',
              },
            ],
          },
          {
            commandName: 'module-account',
            description: 'Query module account info by module name',
            arguments: [
              {
                argumentName: 'module-name',
                description: 'Module Name',
                mandatory: true,
              },
            ],
            childCommands: [],
            flags: [
              {
                flagName: 'grpc-addr',
                description: 'The gRPC endpoint to use for this chain',
                dataType: 'string',
              },
              {
                flagName: 'grpc-insecure',
                description:
                  'Allow gRPC over insecure channels, if not TLS the server must use TLS',
                dataType: null,
              },
              {
                flagName: 'height',
                description:
                  'Use a specific height to query state at (this can error if the node is pruning state)',
                dataType: 'number',
              },
              {
                flagName: 'help',
                description: 'Help for module-account',
                dataType: 'number',
              },
              {
                flagName: 'node',
                description:
                  '<host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")',
                dataType: 'string',
              },
              {
                flagName: 'output',
                description: 'Output format (text|json) (default "text")',
                dataType: 'string',
              },
            ],
          },
          {
            commandName: 'module-accounts',
            description: 'Query all module accounts',
            arguments: [],
            childCommands: [],
            flags: [
              {
                flagName: 'grpc-addr',
                description: 'The gRPC endpoint to use for this chain',
                dataType: 'string',
              },
              {
                flagName: 'grpc-insecure',
                description:
                  'Allow gRPC over insecure channels, if not TLS the server must use TLS',
                dataType: null,
              },
              {
                flagName: 'height',
                description:
                  'Use a specific height to query state at (this can error if the node is pruning state)',
                dataType: 'number',
              },
              {
                flagName: 'help',
                description: 'Help for module-accounts',
                dataType: 'number',
              },
              {
                flagName: 'node',
                description:
                  '<host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")',
                dataType: 'string',
              },
              {
                flagName: 'output',
                description: 'Output format (text|json) (default "text")',
                dataType: 'string',
              },
            ],
          },
          {
            commandName: 'params',
            description: 'Query the current auth parameters',
            arguments: [],
            childCommands: [],
            flags: [],
          },
        ],
        flags: [
          {
            flagName: 'help',
            description: 'Help for auth',
            dataType: null,
          },
        ],
      },
      {
        commandName: 'authz',
        description: 'Querying commands for the authz module',
        arguments: [],
        childCommands: [
          {
            commandName: 'grants',
            description:
              'Query grants for a granter-grantee pair and optionally a msg-type-url',
            arguments: [
              {
                argumentName: 'granter-addr',
                description: 'Granter Address',
                mandatory: true,
              },
              {
                argumentName: 'grantee-addr',
                description: 'Grantee Address',
                mandatory: true,
              },
              {
                argumentName: 'msg-type-url',
                description: 'Message type URL',
                mandatory: false,
              },
            ],
            childCommands: [],
            flags: [
              {
                flagName: 'count-total',
                description:
                  'Count total number of records in grants to query for',
                dataType: null,
              },
              {
                flagName: 'grpc-addr',
                description: 'The gRPC endpoint to use for this chain',
                dataType: 'string',
              },
              {
                flagName: 'grpc-insecure',
                description:
                  'Allow gRPC over insecure channels, if not TLS the server must use TLS',
                dataType: null,
              },
              {
                flagName: 'height',
                description:
                  'Use a specific height to query state at (this can error if the node is pruning state)',
                dataType: 'number',
              },
              {
                flagName: 'help',
                description: 'Help for grants',
                dataType: 'number',
              },
              {
                flagName: 'limit',
                description:
                  'Pagination limit of grants to query for (default 100)',
                dataType: 'number',
              },
              {
                flagName: 'node',
                description:
                  '<host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")',
                dataType: 'string',
              },
              {
                flagName: 'offset',
                description: 'Pagination offset of grants to query for',
                dataType: 'number',
              },
              {
                flagName: 'output',
                description: 'Output format (text|json) (default "text")',
                dataType: 'string',
              },
              {
                flagName: 'page',
                description:
                  'Pagination page of grants to query for. This sets offset to a multiple of limit (default 1)',
                dataType: 'number',
              },
              {
                flagName: 'page-key',
                description: 'Pagination page-key of grants to query for',
                dataType: 'string',
              },
              {
                flagName: 'reverse',
                description: 'Results are sorted in descending order',
                dataType: null,
              },
            ],
          },
          {
            commandName: 'grants-by-grantee',
            description: 'Query authorization grants granted to a grantee',
            arguments: [
              {
                argumentName: 'grantee-addr',
                description: 'Grantee Address',
                mandatory: true,
              },
            ],
            childCommands: [],
            flags: [
              {
                flagName: 'count-total',
                description:
                  'Count total number of records in grantee-grants to query for',
                dataType: null,
              },
              {
                flagName: 'grpc-addr',
                description: 'The gRPC endpoint to use for this chain',
                dataType: 'string',
              },
              {
                flagName: 'grpc-insecure',
                description:
                  'Allow gRPC over insecure channels, if not TLS the server must use TLS',
                dataType: null,
              },
              {
                flagName: 'height',
                description:
                  'Use a specific height to query state at (this can error if the node is pruning state)',
                dataType: 'number',
              },
              {
                flagName: 'help',
                description: 'Help for grantee-grants',
                dataType: 'number',
              },
              {
                flagName: 'limit',
                description:
                  'Pagination limit of grants to query for (default 100)',
                dataType: 'number',
              },
              {
                flagName: 'node',
                description:
                  '<host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")',
                dataType: 'string',
              },
              {
                flagName: 'offset',
                description: 'Pagination offset of grantee-grants to query for',
                dataType: 'number',
              },
              {
                flagName: 'output',
                description: 'Output format (text|json) (default "text")',
                dataType: 'string',
              },
              {
                flagName: 'page',
                description:
                  'Pagination page of grantee-grants to query for. This sets offset to a multiple of limit (default 1)',
                dataType: 'number',
              },
              {
                flagName: 'page-key',
                description:
                  'Pagination page-key of grantee-grants to query for',
                dataType: 'string',
              },
              {
                flagName: 'reverse',
                description: 'Results are sorted in descending order',
                dataType: null,
              },
            ],
          },
          {
            commandName: 'grants-by-granter',
            description: 'Query authorization grants granted by granter',
            arguments: [
              {
                argumentName: 'granter-addr',
                description: 'Granter Address',
                mandatory: true,
              },
            ],
            childCommands: [],
            flags: [
              {
                flagName: 'count-total',
                description:
                  'Count total number of records in granter-grants to query for',
                dataType: null,
              },
              {
                flagName: 'grpc-addr',
                description: 'The gRPC endpoint to use for this chain',
                dataType: 'string',
              },
              {
                flagName: 'grpc-insecure',
                description:
                  'Allow gRPC over insecure channels, if not TLS the server must use TLS',
                dataType: null,
              },
              {
                flagName: 'height',
                description:
                  'Use a specific height to query state at (this can error if the node is pruning state)',
                dataType: 'number',
              },
              {
                flagName: 'help',
                description: 'Help for granter-grants',
                dataType: 'number',
              },
              {
                flagName: 'limit',
                description:
                  'Pagination limit of granter-grants to query for (default 100)',
                dataType: 'number',
              },
              {
                flagName: 'node',
                description:
                  '<host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")',
                dataType: 'string',
              },
              {
                flagName: 'offset',
                description: 'Pagination offset of granter-grants to query for',
                dataType: 'number',
              },
              {
                flagName: 'output',
                description: 'Output format (text|json) (default "text")',
                dataType: 'string',
              },
              {
                flagName: 'page',
                description:
                  'Pagination page of granter-grants to query for. This sets offset to a multiple of limit (default 1)',
                dataType: 'number',
              },
              {
                flagName: 'page-key',
                description:
                  'Pagination page-key of granter-grants to query for',
                dataType: 'string',
              },
              {
                flagName: 'reverse',
                description: 'Results are sorted in descending order',
                dataType: null,
              },
            ],
          },
        ],
        flags: [
          {
            flagName: 'help',
            description: 'Help for authz',
            dataType: null,
          },
        ],
      },
      {
        commandName: 'bank',
        description: 'Querying commands for the bank module',
        arguments: [],
        childCommands: [
          {
            commandName: 'balances',
            description: ' Query for account balances by address',
            arguments: [
              {
                argumentName: 'address',
                description: 'Address',
                mandatory: true,
              },
            ],
            childCommands: [],
            flags: [
              {
                flagName: 'count-total',
                description:
                  'Count total number of records in all balances to query for',
                dataType: null,
              },
              {
                flagName: 'denom',
                description: 'The specific balance denomination to query for',
                dataType: 'string',
              },
              {
                flagName: 'grpc-addr',
                description: 'The gRPC endpoint to use for this chain',
                dataType: 'string',
              },
              {
                flagName: 'grpc-insecure',
                description:
                  'Allow gRPC over insecure channels, if not TLS the server must use TLS',
                dataType: null,
              },
              {
                flagName: 'height',
                description:
                  'Use a specific height to query state at (this can error if the node is pruning state)',
                dataType: 'number',
              },
              {
                flagName: 'help',
                description: 'Help for balances',
                dataType: 'number',
              },
              {
                flagName: 'limit',
                description:
                  'Pagination limit of granter-grants to query for (default 100)',
                dataType: 'number',
              },
              {
                flagName: 'node',
                description:
                  '<host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")',
                dataType: 'string',
              },
              {
                flagName: 'offset',
                description: 'Pagination offset of granter-grants to query for',
                dataType: 'number',
              },
              {
                flagName: 'output',
                description: 'Output format (text|json) (default "text")',
                dataType: 'string',
              },
              {
                flagName: 'page',
                description:
                  'Pagination page of granter-grants to query for. This sets offset to a multiple of limit (default 1)',
                dataType: 'number',
              },
              {
                flagName: 'page-key',
                description:
                  'Pagination page-key of granter-grants to query for',
                dataType: 'string',
              },
              {
                flagName: 'reverse',
                description: 'Results are sorted in descending order',
                dataType: null,
              },
            ],
          },
          {
            commandName: 'denom-metadata',
            description: 'Query the client metadata for coin denominations',
            arguments: [],
            childCommands: [],
            flags: [],
          },
          {
            commandName: 'send-enabled',
            description: 'Query for send enabled entries',
            arguments: [],
            childCommands: [],
            flags: [],
          },
          {
            commandName: 'spendable-balances',
            description: 'Query for account spendable balances by address',
            arguments: [
              {
                argumentName: 'address',
                description: 'Address',
                mandatory: true,
              },
            ],
            childCommands: [],
            flags: [
              {
                flagName: 'count-total',
                description:
                  'Count total number of records in spendable balances to query for',
                dataType: null,
              },
              {
                flagName: 'denom',
                description: 'The specific balance denomination to query for',
                dataType: 'string',
              },
              {
                flagName: 'grpc-addr',
                description: 'The gRPC endpoint to use for this chain',
                dataType: 'string',
              },
              {
                flagName: 'grpc-insecure',
                description:
                  'Allow gRPC over insecure channels, if not TLS the server must use TLS',
                dataType: null,
              },
              {
                flagName: 'height',
                description:
                  'Use a specific height to query state at (this can error if the node is pruning state)',
                dataType: 'number',
              },
              {
                flagName: 'help',
                description: 'Help for spendable-balances',
                dataType: 'number',
              },
              {
                flagName: 'limit',
                description:
                  'Pagination limit of spendable-balances to query for (default 100)',
                dataType: 'number',
              },
              {
                flagName: 'node',
                description:
                  '<host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")',
                dataType: 'string',
              },
              {
                flagName: 'offset',
                description:
                  'Pagination offset of spendable balances to query for',
                dataType: 'number',
              },
              {
                flagName: 'output',
                description: 'Output format (text|json) (default "text")',
                dataType: 'string',
              },
              {
                flagName: 'page',
                description:
                  'Pagination page of spendable balances to query for. This sets offset to a multiple of limit (default 1)',
                dataType: 'number',
              },
              {
                flagName: 'page-key',
                description:
                  'Pagination page-key of spendable balances to query for',
                dataType: 'string',
              },
              {
                flagName: 'reverse',
                description: 'Results are sorted in descending order',
                dataType: null,
              },
            ],
          },
          {
            commandName: 'total',
            description: 'Query the total supply of coins of the chain',
            arguments: [
              {
                argumentName: 'granter-addr',
                description: 'Granter Address',
                mandatory: true,
              },
            ],
            childCommands: [],
            flags: [
              {
                flagName: 'count-total',
                description:
                  'Count total number of records in granter-grants to query for',
                dataType: null,
              },
              {
                flagName: 'grpc-addr',
                description: 'The gRPC endpoint to use for this chain',
                dataType: 'string',
              },
              {
                flagName: 'grpc-insecure',
                description:
                  'Allow gRPC over insecure channels, if not TLS the server must use TLS',
                dataType: null,
              },
              {
                flagName: 'height',
                description:
                  'Use a specific height to query state at (this can error if the node is pruning state)',
                dataType: 'number',
              },
              {
                flagName: 'help',
                description: 'Help for granter-grants',
                dataType: 'number',
              },
              {
                flagName: 'limit',
                description:
                  'Pagination limit of granter-grants to query for (default 100)',
                dataType: 'number',
              },
              {
                flagName: 'node',
                description:
                  '<host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")',
                dataType: 'string',
              },
              {
                flagName: 'offset',
                description: 'Pagination offset of granter-grants to query for',
                dataType: 'number',
              },
              {
                flagName: 'output',
                description: 'Output format (text|json) (default "text")',
                dataType: 'string',
              },
              {
                flagName: 'page',
                description:
                  'Pagination page of granter-grants to query for. This sets offset to a multiple of limit (default 1)',
                dataType: 'number',
              },
              {
                flagName: 'page-key',
                description:
                  'Pagination page-key of granter-grants to query for',
                dataType: 'string',
              },
              {
                flagName: 'reverse',
                description: 'Results are sorted in descending order',
                dataType: null,
              },
            ],
          },
        ],
        flags: [
          {
            flagName: 'help',
            description: 'Help for bank',
            dataType: null,
          },
        ],
      },
    ],
    flags: [
      {
        flagName: 'chain-id',
        description: 'The network chain ID',
        dataType: 'string',
      },
      {
        flagName: 'help',
        description: 'Help for query',
        dataType: null,
      },
    ],
  },
];

interface Command {
  commandName: string;
  description: string;
  childCommands: Command[];
  flags: Flag[];
  arguments: Argument[];
}

interface Flag {
  flagName: string;
  description: string;
  dataType: string | null;
}

interface Argument {
  argumentName: string;
  description: string;
  mandatory: boolean;
}
