#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'
# generate by running
# code --list-extensions | xargs -L 1 echo code --install-extension
echo "You really should review this file before installing them all"
echo "within this file you will find a link to the marketplace page"
echo "after that remove the exit 0 to do the install"
exit 0

if ! command -v code &>/dev/null; then
  echo "The VSCode 'code' commad line tool is not installed"
  echo "Please check these docs https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line"
  open "https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line"
  exit 1
fi


# Nord - Visual Studio Marketplace
# https://marketplace.visualstudio.com/items?itemName=arcticicestudio.nord-visual-studio-code
code --install-extension arcticicestudio.nord-visual-studio-code

# Spell Right
# https://marketplace.visualstudio.com/items?itemName=ban.spellright
code --install-extension ban.spellright

# Unique Lines
# https://marketplace.visualstudio.com/items?itemName=bibhasdn.unique-lines
code --install-extension bibhasdn.unique-lines

# Toggle Quotes
# https://marketplace.visualstudio.com/items?itemName=BriteSnow.vscode-toggle-quotes
code --install-extension BriteSnow.vscode-toggle-quotes

# npm Intellisense
# https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense
code --install-extension christian-kohler.npm-intellisense

# gitignore
# https://marketplace.visualstudio.com/items?itemName=codezombiech.gitignore
code --install-extension codezombiech.gitignore

# ESLint
# https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
code --install-extension dbaeumer.vscode-eslint

# GitLens &#8212; Git supercharged
# https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens
code --install-extension eamodio.gitlens

# JSON Tools
# https://marketplace.visualstudio.com/items?itemName=eriklynd.json-tools
code --install-extension eriklynd.json-tools

# Prettier-Code formatter
# https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
code --install-extension esbenp.prettier-vscode

# Auto Rename Tag
# https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag
code --install-extension formulahendry.auto-rename-tag

# GitHub Pull Requests and Issues
# https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github
code --install-extension GitHub.vscode-pull-request-github

# ASCIIDecorator
# https://marketplace.visualstudio.com/items?itemName=helixquar.asciidecorator
code --install-extension helixquar.asciidecorator

# Peacock
# https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock
code --install-extension johnpapa.vscode-peacock

# GitHub Actions
# https://marketplace.visualstudio.com/items?itemName=me-dutour-mathieu.vscode-github-actions
code --install-extension me-dutour-mathieu.vscode-github-actions

# Docker
# https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker
code --install-extension ms-azuretools.vscode-docker

# Live Share
# https://marketplace.visualstudio.com/items?itemName=ms-vsliveshare.vsliveshare
code --install-extension ms-vsliveshare.vsliveshare

# Live Share Audio
# https://marketplace.visualstudio.com/items?itemName=ms-vsliveshare.vsliveshare-audio
code --install-extension ms-vsliveshare.vsliveshare-audio

# Live Share Extension Pack
# https://marketplace.visualstudio.com/items?itemName=ms-vsliveshare.vsliveshare-pack
code --install-extension ms-vsliveshare.vsliveshare-pack

# Visual Studio Marketplace
# https://marketplace.visualstudio.com/items?itemName=ms-vsonline.vsonline
code --install-extension ms-vsonline.vsonline

# Material Icon Theme
# https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme
code --install-extension PKief.material-icon-theme

# Polacode
# https://marketplace.visualstudio.com/items?itemName=pnp.polacode
code --install-extension pnp.polacode

# YAML - Visual Studio Marketplace
# https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml
code --install-extension redhat.vscode-yaml

# Markdown Preview Enhanced
# https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced
code --install-extension shd101wyy.markdown-preview-enhanced

# TabNine
# https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode
code --install-extension TabNine.tabnine-vscode

# shellcheck
# https://marketplace.visualstudio.com/items?itemName=timonwong.shellcheck
code --install-extension timonwong.shellcheck

# Sort lines
# https://marketplace.visualstudio.com/items?itemName=Tyriar.sort-lines
code --install-extension Tyriar.sort-lines

# Visual Studio IntelliCode
# https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode
code --install-extension VisualStudioExptTeam.vscodeintellicode

# TODO Highlight
# https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight
code --install-extension wayou.vscode-todo-highlight

# licenser
# https://marketplace.visualstudio.com/items?itemName=ymotongpoo.licenser
code --install-extension ymotongpoo.licenser

# Markdown All in One
# https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one
code --install-extension yzhang.markdown-all-in-one






