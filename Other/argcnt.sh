#!/bin/bash
# From "Bash and cybersecurity" book

if [[ $# -eq 1 ]]; then
    echo "There is 1 argument."
elif [[ $# -eq 0 ]]; then
    echo "There are no arguments here..."
else
    echo "There are $# arguments."
fi

COUNT=$((1))
for i in $@; do
    if [[ $((COUNT % 2)) -eq 0 ]]; then
        echo "Argument $COUNT: $i"
    fi
    let COUNT++
done
