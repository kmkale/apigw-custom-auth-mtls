/* getAccounts.js
This lambda returns a stubbed response for CDR Get Accounts API
https://consumerdatastandardsaustralia.github.io/standards/#get-accounts
*/

exports.handler = async (event, context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      data: {
        accounts: [
          {
            accountId: 'string',
            creationDate: 'string',
            displayName: 'string',
            nickname: 'string',
            openStatus: 'OPEN',
            isOwned: true,
            maskedNumber: 'string',
            productCategory: 'TRANS_AND_SAVINGS_ACCOUNTS',
            productName: 'string',
          },
        ],
      },
      links: {
        self: 'string',
        first: 'string',
        prev: 'string',
        next: 'string',
        last: 'string',
      },
      meta: {
        totalRecords: 1,
        totalPages: 1,
      },
    }),
  };
  return response;
};
