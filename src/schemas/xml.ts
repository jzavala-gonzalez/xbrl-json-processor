import { z } from "zod";

// creating a schema for strings
export const mySchema = z.string();

// The keywords expanded name, NCName and QName
// are to be interpreted as described in the
// XML Names specification [XML Names].

// xml Char is any Unicode character, excluding the surrogate blocks, FFFE, and FFFF.
// see https://www.w3.org/TR/REC-xml/#NT-Char
// and https://www.ryadel.com/en/javascript-remove-xml-invalid-chars-characters-string-utf8-unicode-regex/
const Char_regex = /[\x09\x0A\x0D\x20-\uD7FF\uE000-\uFFFD\u{10000}-\u{10FFFF}]/u;
export const Char = z.string().regex(Char_regex);

// See https://www.w3.org/TR/REC-xml/#NT-Name
// NameStartChar (NameChar)*
// const Name_regex = /[:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\x2FF\x370-\x37D\x37F-\x1FFF\x200C-\x200D\x2070-\x218F\x2C00-\x2FEF\x3001-\xD7FF\xF900-\xFDCF\xFDF0-FFFD\u{10000}-\u{EFFFF}][:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\x2FF\x370-\x37D\x37F-\x1FFF\x200C-\x200D\x2070-\x218F\x2C00-\x2FEF\x3001-\xD7FF\xF900-\xFDCF\xFDF0-FFFD\u{10000}-\u{EFFFF}\-\.0-9\xB7\x0300-\x036F\x203F-\x2040]*/u;
// export const Name = z.string().regex(Name_regex);

// Note: regex101.com helps for this lol

// An XML Name, minus the ":"
// See https://www.w3.org/TR/2009/REC-xml-names-20091208/#NT-NCName
const NCName_regex = /^[A-Za-z_\xC0-\xD6\xD8-\xF6\u{F8}-\u{2FF}\u{370}-\u{37D}\u{37F}-\u{1FFF}\u{200C}-\u{200D}\u{2070}-\u{218F}\u{2C00}-\u{2FEF}\u{3001}-\u{D7FF}\u{F900}-\u{FDCF}\u{FDF0}-\u{FFFD}\u{10000}-\u{EFFFF}][A-Za-z_\xC0-\xD6\xD8-\xF6\u{F8}-\u{2FF}\u{370}-\u{37D}\u{37F}-\u{1FFF}\u{200C}-\u{200D}\u{2070}-\u{218F}\u{2C00}-\u{2FEF}\u{3001}-\u{D7FF}\u{F900}-\u{FDCF}\u{FDF0}-\u{FFFD}\u{10000}-\u{EFFFF}\-\.0-9\u{B7}\u{0300}-\u{036F}\u{203F}-\u{2040}]*$/u;
export const NCName = z.string().regex(NCName_regex);

const QName_regex = /^(?:(?:[A-Za-z_\xC0-\xD6\xD8-\xF6\u{F8}-\u{2FF}\u{370}-\u{37D}\u{37F}-\u{1FFF}\u{200C}-\u{200D}\u{2070}-\u{218F}\u{2C00}-\u{2FEF}\u{3001}-\u{D7FF}\u{F900}-\u{FDCF}\u{FDF0}-\u{FFFD}\u{10000}-\u{EFFFF}][A-Za-z_\xC0-\xD6\xD8-\xF6\u{F8}-\u{2FF}\u{370}-\u{37D}\u{37F}-\u{1FFF}\u{200C}-\u{200D}\u{2070}-\u{218F}\u{2C00}-\u{2FEF}\u{3001}-\u{D7FF}\u{F900}-\u{FDCF}\u{FDF0}-\u{FFFD}\u{10000}-\u{EFFFF}\-\.0-9\u{B7}\u{0300}-\u{036F}\u{203F}-\u{2040}]*):)?(?:[A-Za-z_\xC0-\xD6\xD8-\xF6\u{F8}-\u{2FF}\u{370}-\u{37D}\u{37F}-\u{1FFF}\u{200C}-\u{200D}\u{2070}-\u{218F}\u{2C00}-\u{2FEF}\u{3001}-\u{D7FF}\u{F900}-\u{FDCF}\u{FDF0}-\u{FFFD}\u{10000}-\u{EFFFF}][A-Za-z_\xC0-\xD6\xD8-\xF6\u{F8}-\u{2FF}\u{370}-\u{37D}\u{37F}-\u{1FFF}\u{200C}-\u{200D}\u{2070}-\u{218F}\u{2C00}-\u{2FEF}\u{3001}-\u{D7FF}\u{F900}-\u{FDCF}\u{FDF0}-\u{FFFD}\u{10000}-\u{EFFFF}\-\.0-9\u{B7}\u{0300}-\u{036F}\u{203F}-\u{2040}]*)$/u;
export const QName = z.string().regex(QName_regex);