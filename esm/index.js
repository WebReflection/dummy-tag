function dummyTag(t) {
  for (var s = t[0], i = 1, l = arguments.length; i < l; i++)
    s += arguments[i] + t[i];
  return s;
}
export default dummyTag;
