{ pkgs, ... }:

{
  # https://devenv.sh/packages/
  packages = with pkgs; [
    cypress
  ];

  enterShell = ''
    echo "🛠️ e2e-tests dev shell"
  '';

  git-hooks.hooks = {
    eslint.enable = false;
  };

  # See full reference at https://devenv.sh/reference/options/
}
