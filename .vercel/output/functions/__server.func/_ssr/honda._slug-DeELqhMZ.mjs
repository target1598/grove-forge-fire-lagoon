import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Route$1 } from "./router-C7q2OnTC.mjs";
import { t as CarDetail } from "./car-detail-Cjc4GrDJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/honda._slug-DeELqhMZ.js
var import_jsx_runtime = require_jsx_runtime();
function HondaModel() {
	const { car } = Route$1.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarDetail, { car });
}
//#endregion
export { HondaModel as component };
