export const mapMovementListApiToVm = movementList =>
    Array.isArray(movementList)
    ? movementList.map(account => mapMovementApiToVm(account))
    : [];

    export const mapAListHeaderApiToVm = movementList =>
    Array.isArray(movementList)
    ? movementList.map(account => mapAccountListToHeaderVm(account))
    : [];

const mapMovementApiToVm = movement => ({
    // id: account.id,
    // iban: account.iban,
    transaction: new Date(movement.transaction).toLocaleDateString(),
    realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
    description: movement.description,
    amount: `${movement.amount} €`,
    balance: `${movement.balance} €`,
});

const mapAccountListToHeaderVm = response => ({  //valores de A-L transformados a Vm 
    alias: response.name,
    balance: `${response.balance} €`,
    iban: response.iban,
})


// "account-list": [
//     {
//       "id": "1",
//       "iban": "ES91 2100 0418 4502 0005 1332",
//       "type": "1",
//       "name": "Gastos mes",
//       "balance": 1490,
//       "lastTransaction": "2019-12-09T21:30:00"
//     },


//movements

// "id": "4",
// "description": "Luz diciembre",
// "amount": -110,
// "balance": 2480,
// "transaction": "2020-01-02T10:00:00",
// "realTransaction": "2020-01-03T10:00:00",
// "accountId": "2"