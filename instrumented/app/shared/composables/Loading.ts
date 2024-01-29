function cov_1icb4kiq61() {
  var path = "/home/andy/Documents/logistics-trip-management/shared-library/src/app/shared/composables/Loading.ts";
  var hash = "8a25210e40b51dc17cbcfca3af825affdb5d3cba";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/andy/Documents/logistics-trip-management/shared-library/src/app/shared/composables/Loading.ts",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 18
        },
        end: {
          line: 3,
          column: 28
        }
      },
      "1": {
        start: {
          line: 6,
          column: 1
        },
        end: {
          line: 16,
          column: 2
        }
      },
      "2": {
        start: {
          line: 10,
          column: 3
        },
        end: {
          line: 10,
          column: 25
        }
      },
      "3": {
        start: {
          line: 14,
          column: 3
        },
        end: {
          line: 14,
          column: 26
        }
      }
    },
    fnMap: {
      "0": {
        name: "useLoading",
        decl: {
          start: {
            line: 5,
            column: 16
          },
          end: {
            line: 5,
            column: 26
          }
        },
        loc: {
          start: {
            line: 5,
            column: 29
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 2
          },
          end: {
            line: 9,
            column: 3
          }
        },
        loc: {
          start: {
            line: 9,
            column: 17
          },
          end: {
            line: 11,
            column: 3
          }
        },
        line: 9
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 13,
            column: 3
          }
        },
        loc: {
          start: {
            line: 13,
            column: 16
          },
          end: {
            line: 15,
            column: 3
          }
        },
        line: 13
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8a25210e40b51dc17cbcfca3af825affdb5d3cba"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1icb4kiq61 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1icb4kiq61();
import { ref } from "vue";
const isLoading = (cov_1icb4kiq61().s[0]++, ref(false));
export function useLoading() {
  cov_1icb4kiq61().f[0]++;
  cov_1icb4kiq61().s[1]++;
  return {
    isLoading,
    startLoading() {
      cov_1icb4kiq61().f[1]++;
      cov_1icb4kiq61().s[2]++;
      isLoading.value = true;
    },
    stopLoading() {
      cov_1icb4kiq61().f[2]++;
      cov_1icb4kiq61().s[3]++;
      isLoading.value = false;
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMWljYjRraXE2MSIsImFjdHVhbENvdmVyYWdlIiwicmVmIiwiaXNMb2FkaW5nIiwicyIsInVzZUxvYWRpbmciLCJmIiwic3RhcnRMb2FkaW5nIiwidmFsdWUiLCJzdG9wTG9hZGluZyJdLCJzb3VyY2VzIjpbIkxvYWRpbmcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVmIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IGlzTG9hZGluZyA9IHJlZihmYWxzZSlcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvYWRpbmcoKSB7XG5cdHJldHVybiB7XG5cdFx0aXNMb2FkaW5nLFxuXG5cdFx0c3RhcnRMb2FkaW5nKCkge1xuXHRcdFx0aXNMb2FkaW5nLnZhbHVlID0gdHJ1ZVxuXHRcdH0sXG5cblx0XHRzdG9wTG9hZGluZygpIHtcblx0XHRcdGlzTG9hZGluZy52YWx1ZSA9IGZhbHNlXG5cdFx0fSxcblx0fVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsY0FBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsY0FBQTtBQWZaLFNBQVNFLEdBQUcsUUFBUSxLQUFLO0FBRXpCLE1BQU1DLFNBQVMsSUFBQUgsY0FBQSxHQUFBSSxDQUFBLE9BQUdGLEdBQUcsQ0FBQyxLQUFLLENBQUM7QUFFNUIsT0FBTyxTQUFTRyxVQUFVQSxDQUFBLEVBQUc7RUFBQUwsY0FBQSxHQUFBTSxDQUFBO0VBQUFOLGNBQUEsR0FBQUksQ0FBQTtFQUM1QixPQUFPO0lBQ05ELFNBQVM7SUFFVEksWUFBWUEsQ0FBQSxFQUFHO01BQUFQLGNBQUEsR0FBQU0sQ0FBQTtNQUFBTixjQUFBLEdBQUFJLENBQUE7TUFDZEQsU0FBUyxDQUFDSyxLQUFLLEdBQUcsSUFBSTtJQUN2QixDQUFDO0lBRURDLFdBQVdBLENBQUEsRUFBRztNQUFBVCxjQUFBLEdBQUFNLENBQUE7TUFBQU4sY0FBQSxHQUFBSSxDQUFBO01BQ2JELFNBQVMsQ0FBQ0ssS0FBSyxHQUFHLEtBQUs7SUFDeEI7RUFDRCxDQUFDO0FBQ0YifQ==