import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route } from "./router-C7q2OnTC.mjs";
import { t as CarDetail } from "./car-detail-Cjc4GrDJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/toyota._slug-nb7msMvF.js
var import_jsx_runtime = require_jsx_runtime();
function ToyotaModel() {
	const { car } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarDetail, { car });
}
//#endregion
export { ToyotaModel as component };
