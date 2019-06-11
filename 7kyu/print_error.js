function printerError(s) {
    return s.match(/[^a-m]/g).length + "/" + s.length;
}
