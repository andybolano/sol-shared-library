function cov_z2kfngqx8() {
  var path = "/home/andy/Documents/logistics-trip-management/shared-library/src/bootstrap.ts";
  var hash = "2bf87179427c1dcd252ed37fdd327bc0137d9817";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/andy/Documents/logistics-trip-management/shared-library/src/bootstrap.ts",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 12
        },
        end: {
          line: 8,
          column: 26
        }
      },
      "1": {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 9,
          column: 15
        }
      },
      "2": {
        start: {
          line: 10,
          column: 0
        },
        end: {
          line: 10,
          column: 13
        }
      },
      "3": {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 11,
          column: 17
        }
      },
      "4": {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 13,
          column: 46
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2bf87179427c1dcd252ed37fdd327bc0137d9817"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_z2kfngqx8 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_z2kfngqx8();
import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import router from "./router";
import "./assets/css/main.scss";
import filters from "./app/ui-lib/helpers/filters";
const app = (cov_z2kfngqx8().s[0]++, createApp(App));
cov_z2kfngqx8().s[1]++;
app.use(router);
cov_z2kfngqx8().s[2]++;
app.use(Antd);
cov_z2kfngqx8().s[3]++;
app.mount("#app");
cov_z2kfngqx8().s[4]++;
app.config.globalProperties.$filters = filters;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfejJrZm5ncXg4IiwiYWN0dWFsQ292ZXJhZ2UiLCJjcmVhdGVBcHAiLCJBcHAiLCJBbnRkIiwicm91dGVyIiwiZmlsdGVycyIsImFwcCIsInMiLCJ1c2UiLCJtb3VudCIsImNvbmZpZyIsImdsb2JhbFByb3BlcnRpZXMiLCIkZmlsdGVycyJdLCJzb3VyY2VzIjpbImJvb3RzdHJhcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tIFwidnVlXCJcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwLnZ1ZVwiXG5pbXBvcnQgQW50ZCBmcm9tIFwiYW50LWRlc2lnbi12dWVcIlxuaW1wb3J0IHJvdXRlciBmcm9tIFwiLi9yb3V0ZXJcIlxuaW1wb3J0IFwiLi9hc3NldHMvY3NzL21haW4uc2Nzc1wiXG5pbXBvcnQgZmlsdGVycyBmcm9tIFwiLi9hcHAvdWktbGliL2hlbHBlcnMvZmlsdGVyc1wiXG5cbmNvbnN0IGFwcCA9IGNyZWF0ZUFwcChBcHApXG5hcHAudXNlKHJvdXRlcilcbmFwcC51c2UoQW50ZClcbmFwcC5tb3VudChcIiNhcHBcIilcblxuYXBwLmNvbmZpZy5nbG9iYWxQcm9wZXJ0aWVzLiRmaWx0ZXJzID0gZmlsdGVyc1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsYUFBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsYUFBQTtBQWZaLFNBQVNFLFNBQVMsUUFBUSxLQUFLO0FBQy9CLE9BQU9DLEdBQUcsTUFBTSxXQUFXO0FBQzNCLE9BQU9DLElBQUksTUFBTSxnQkFBZ0I7QUFDakMsT0FBT0MsTUFBTSxNQUFNLFVBQVU7QUFDN0IsT0FBTyx3QkFBd0I7QUFDL0IsT0FBT0MsT0FBTyxNQUFNLDhCQUE4QjtBQUVsRCxNQUFNQyxHQUFHLElBQUFQLGFBQUEsR0FBQVEsQ0FBQSxPQUFHTixTQUFTLENBQUNDLEdBQUcsQ0FBQztBQUFBSCxhQUFBLEdBQUFRLENBQUE7QUFDMUJELEdBQUcsQ0FBQ0UsR0FBRyxDQUFDSixNQUFNLENBQUM7QUFBQUwsYUFBQSxHQUFBUSxDQUFBO0FBQ2ZELEdBQUcsQ0FBQ0UsR0FBRyxDQUFDTCxJQUFJLENBQUM7QUFBQUosYUFBQSxHQUFBUSxDQUFBO0FBQ2JELEdBQUcsQ0FBQ0csS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUFBVixhQUFBLEdBQUFRLENBQUE7QUFFakJELEdBQUcsQ0FBQ0ksTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQ0MsUUFBUSxHQUFHUCxPQUFPIn0=