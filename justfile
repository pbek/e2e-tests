# Use `just <recipe>` to run a recipe
# https://just.systems/man/en/

# By default, run the `--list` command
default:
    @just --list

cypress-open:
    nix-shell -p cypress --run "cypress"

cypress-open-steam:
    nix-shell -p steam-run --run "steam-run npx cypress open"

# Format all justfiles
just-format:
    #!/usr/bin/env bash
    # Find all files named "justfile" recursively and run just --fmt --unstable on them
    find . -type f -name "justfile" -print0 | while IFS= read -r -d '' file; do
        echo "Formatting $file"
        just --fmt --unstable -f "$file"
    done
