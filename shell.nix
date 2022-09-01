{ pkgs ? import <nixpkgs> {} 
}:

pkgs.mkShell {
  name="scalev-dev-env";
  buildInputs = [
    pkgs.nodejs-16_x
    pkgs.nodePackages.yarn
    pkgs.nodePackages.prettier
    pkgs.nodePackages.typescript
  ];
  shellHook = ''
  export PATH=~/.npm-packages/bin:$PATH
  export NODE_PATH=~/.npm-packages/lib/node_modules
  '';
}
