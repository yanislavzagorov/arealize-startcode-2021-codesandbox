import React from "react";

// Formats raw JSON into a nicely tabbed version that looks good.
function prettyPrint(value: string) {
  var ugly = value;
  var obj = JSON.parse(ugly.toString());
  var pretty = JSON.stringify(obj, undefined, 4);
  return pretty;
}

// Displays the JsonViewer
export const JsonViewer = (jsonValue: any, setJsonValue: any) => {
  return (
    <React.Fragment>
      <textarea
        name="jsonValueArea"
        id="JsonValue"
        cols={120}
        rows={20}
        value={jsonValue}
        onChange={(e) => setJsonValue(e.target.value)}
      ></textarea>
    </React.Fragment>
  );
};

export default JsonViewer;
