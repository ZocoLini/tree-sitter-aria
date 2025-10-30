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
      source_file: $ => repeat($._definition),
  
      _definition: $ => choice(
        $.function_definition
        // TODO: other kinds of definitions
      ),
  
      function_definition: $ => seq(
        'func',
        $.identifier,
        $.parameter_list,
        $._type,
        $.block
      ),
  
      parameter_list: $ => seq(
        '(',
         // TODO: parameters
        ')'
      ),
  
      _type: $ => choice(
        'String',
        'Int',
        'Float'
      ),
  
      block: $ => seq(
        '{',
        repeat($._statement),
        '}'
      ),
  
      _statement: $ => choice(
        $.return_statement
        // TODO: other kinds of statements
      ),
  
      return_statement: $ => seq(
        'return',
        $.expression,
        ';'
      ),
  
      expression: $ => choice(
        $.identifier,
        $.number
        // TODO: other kinds of expressions
      ),
  
      identifier: $ => /[a-zA-Z_]+/,
  
      number: $ => /\d+/
    }
});
