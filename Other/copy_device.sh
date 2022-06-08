#!/bin/bash
if [[ $(ls /media/$USER) ]] ; then
    echo "Choose device:"
    count=0
    
    devices=$(ls /media/$USER)
    for f in $devices; do
        count=$(($count+1))
        echo "$count $f"  
    done

    read -p "Number of device: " chosen_device
    
    while [[ $chosen_device -le 0 ]] || [[ $chosen_device -gt $count ]]; do
        read -p "Invalid number! Try again: " chosen_device
    done
    echo "${devices[$(($chosen_device-1))]} chosen."
    
    read -p "Choose path to copy: " copy_path
    cp -r /media/$USER/${devices[$(($chosen_device-1))]} $copy_path
    echo "Files was successfuly copied!"
else
    echo "Media devices not found."
fi