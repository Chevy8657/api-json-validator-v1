# JSON Validator (v1)

## Description
Atomic API that validates whether a given string is valid JSON. Accepts a string input and returns a boolean validity result with an optional parse error message. Performs no transformation, correction, formatting, or schema validation.

## Endpoint
POST /v1/validate-json

## Input
{
  "input": "<string>"
}

## Output
{
  "valid": true | false,
  "error": "<string | null>"
}

## Constraints
- No mutation
- No schema validation
- No formatting
- No expansion beyond validation
