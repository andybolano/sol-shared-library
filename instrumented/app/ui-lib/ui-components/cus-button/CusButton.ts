function cov_1wzx6znzx7() {
  var path = "/home/andy/Documents/logistics-trip-management/shared-library/src/app/ui-lib/ui-components/cus-button/CusButton.ts";
  var hash = "7ed56ddc61efdee8d71c91e6c2da61255434b391";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/andy/Documents/logistics-trip-management/shared-library/src/app/ui-lib/ui-components/cus-button/CusButton.ts",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7ed56ddc61efdee8d71c91e6c2da61255434b391"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1wzx6znzx7 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1wzx6znzx7();
import { defineComponent } from "vue";
import { typeButton } from "./enums/ButtonType";
export default defineComponent({
  name: "CusButton",
  props: {
    value: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: typeButton.Primary
    },
    icon: {
      type: String,
      required: false
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMXd6eDZ6bnp4NyIsImFjdHVhbENvdmVyYWdlIiwiZGVmaW5lQ29tcG9uZW50IiwidHlwZUJ1dHRvbiIsIm5hbWUiLCJwcm9wcyIsInZhbHVlIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZGVmYXVsdCIsIlByaW1hcnkiLCJpY29uIl0sInNvdXJjZXMiOlsiQ3VzQnV0dG9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gXCJ2dWVcIlxuaW1wb3J0IHsgdHlwZUJ1dHRvbiB9IGZyb20gXCIuL2VudW1zL0J1dHRvblR5cGVcIlxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuXHRuYW1lOiBcIkN1c0J1dHRvblwiLFxuXHRwcm9wczoge1xuXHRcdHZhbHVlOiB7XG5cdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHR9LFxuXHRcdHR5cGU6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdGRlZmF1bHQ6IHR5cGVCdXR0b24uUHJpbWFyeSxcblx0XHR9LFxuXHRcdGljb246IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdHJlcXVpcmVkOiBmYWxzZSxcblx0XHR9LFxuXHR9LFxufSlcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGNBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGNBQUE7QUFmWixTQUFTRSxlQUFlLFFBQVEsS0FBSztBQUNyQyxTQUFTQyxVQUFVLFFBQVEsb0JBQW9CO0FBRS9DLGVBQWVELGVBQWUsQ0FBQztFQUM5QkUsSUFBSSxFQUFFLFdBQVc7RUFDakJDLEtBQUssRUFBRTtJQUNOQyxLQUFLLEVBQUU7TUFDTkMsSUFBSSxFQUFFQyxNQUFNO01BQ1pDLFFBQVEsRUFBRTtJQUNYLENBQUM7SUFDREYsSUFBSSxFQUFFO01BQ0xBLElBQUksRUFBRUMsTUFBTTtNQUNaRSxPQUFPLEVBQUVQLFVBQVUsQ0FBQ1E7SUFDckIsQ0FBQztJQUNEQyxJQUFJLEVBQUU7TUFDTEwsSUFBSSxFQUFFQyxNQUFNO01BQ1pDLFFBQVEsRUFBRTtJQUNYO0VBQ0Q7QUFDRCxDQUFDLENBQUMifQ==