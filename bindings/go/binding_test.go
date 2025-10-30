package tree_sitter_aria_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_aria "www.github.com/zocolini/tree-sitter-aria/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_aria.Language())
	if language == nil {
		t.Errorf("Error loading Aria grammar")
	}
}
