import { addMovementRows } from "./movements.helpers" // pinta en HTML
import { onSetValues} from "../../common/helpers" // pinta en HTML iban, balance, alias
import { mapMovementListApiToVm, mapAListHeaderApiToVm} from "./movements.mappers"  // OJO ! (mapea resultados de api)
import { getMovements} from "./movements.api" // respuesta de API en bruto
import { history } from "../../core/router/history"
import { getAccountList } from "../account-list/account-list.api"


let params = history.getParams();
const isT = Boolean(params.id);


if(isT){
    getMovements(params.id).then(movementList => {
        const movementFormat = mapMovementListApiToVm(movementList);
        addMovementRows(movementFormat)
    })
}

if(isT){
    getAccountList(params.id).then(accountList => {   // respuesta de AL 
        const headers = mapAListHeaderApiToVm(accountList);// mapea el Balance, Alias, IBAN.
        onSetValues(headers[params.id-1]);
    })
}