# Use `just <recipe>` to run a recipe
# https://just.systems/man/en/

# By default, run the `--list` command
default:
    @just --list

# Aliases

alias fmt := format

cypress-open:
    cypress

cypress-open-steam:
    NIXPKGS_ALLOW_UNFREE=1 nix-shell -p steam-run --run "steam-run npx cypress open"

# Format all files
[group('linter')]
format args='':
    treefmt {{ args }}
