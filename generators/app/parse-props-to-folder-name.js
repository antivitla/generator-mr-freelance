module.exports = function (props) {
  var folderName = [];
  // yyyy-mm
  folderName.push(props.year +
    props.delimiterOfSpace +
    ('0' + props.month).slice(-2));
  // client-name
  folderName.push(props.clientName
    .replace(/\s/g, props.delimiterOfSpace)
    .toLowerCase());
  // project-name
  folderName.push(props.projectName
    .replace(/\s/g, props.delimiterOfSpace)
    .toLowerCase());
  // yyyy-mm--client-name--project-name
  return folderName.join(props.delimiterOfType);
};
