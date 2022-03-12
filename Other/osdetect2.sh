#!/bin/bash
# From "Bash and cybersecurity" book
function detect() {
    if type -t wevutil &>/dev/null; then
        OS="Microsoft Windows"
    elif type -t scutil &>/dev/null; then
        OS="MacOS"
    else
        OS="Linux"
    fi
}

detect
echo $OS
