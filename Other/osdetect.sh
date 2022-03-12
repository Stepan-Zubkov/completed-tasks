#!/bin/bash
# From "Bash and cybersecurity" book
if uname >/dev/null; then
    uname
else
    uname -o
fi
