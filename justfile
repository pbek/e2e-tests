# Use `just <recipe>` to run a recipe
# https://just.systems/man/en/

# By default, run the `--choose` command
default:
    @just --choose

nix-cypress-open:
    steam-run npx cypress open

# Format all justfiles
just-format:
    #!/usr/bin/env bash
    # Find all files named "justfile" recursively and run just --fmt --unstable on them
    find . -type f -name "justfile" -print0 | while IFS= read -r -d '' file; do
        echo "Formatting $file"
        just --fmt --unstable -f "$file"
    done
