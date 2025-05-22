{
  pkgs,
  ...
}:

{
  # https://devenv.sh/packages/
  packages = with pkgs; [
    just
    nodejs
    cypress

    # For treefmt
    treefmt
    nodePackages.prettier
    shfmt
    nixfmt-rfc-style
    statix
    taplo
  ];

  enterShell = ''
    echo "🛠️ e2e-tests dev shell"
  '';

  # https://devenv.sh/git-hooks/
  git-hooks.hooks.treefmt.enable = true;

  # See full reference at https://devenv.sh/reference/options/
}
