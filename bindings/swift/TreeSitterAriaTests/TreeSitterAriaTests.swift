import XCTest
import SwiftTreeSitter
import TreeSitterAria

final class TreeSitterAriaTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_aria())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Aria grammar")
    }
}
