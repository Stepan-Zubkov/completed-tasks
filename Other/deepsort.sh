#!/bin/bash
dir=$1
while [[ ! $dir ]]; do
    read dir
done

cd $dir
mkdir Images Videos Archives Documents &>/dev/null
mv *.png *.jpg *.gif *.svg Images/ &>/dev/null
mv *.mp4 *.mpeg *.mpg *.3gp Videos/ &>/dev/null
mv *.zip *.tar *.tar.gz *.gz *.7z *.deb *.gzip *.rar *.rpm *.zipx Archives/ &>/dev/null
mv *.doc *.docx *.ppt *.pptx *.txt *.md *.markdown *.markup *.xlsx *.fb2 *.epub *.pdf *.odt *.ods *.xls Documents/ &>/dev/null
# If Dirs are empty after all changes, delete them
rmdir Images Videos Archives Documents &>/dev/null
