/**
 * @file Tree Sitter parser for the Aria lang
 * @author Borja Castellano <borjacastellano1@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "aria",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
