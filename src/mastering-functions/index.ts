// * tag functions
// * --------------

export function htmlEscape(
  literals: TemplateStringsArray,
  ...placeholders: any[]
) {
  let result = "";
  for (let i = 0; i < placeholders.length; i++) {
    result += literals[i];
    result += placeholders[i]
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/"/g, "'")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
  result += literals[literals.length - 1];
  return result;
}

let name = "safwat";
let surname = "fathi";

export const html = htmlEscape`<h1>${name} ${surname}</h1>`;
