#!/usr/bin/env python3

from os import listdir, makedirs
import re
from shutil import copytree, rmtree

FILES_RE = r"\w+-(\d+)\.\w+"

if __name__ == "__main__":

    rmtree('public')
    makedirs('public')
    copytree('src/static', 'public', dirs_exist_ok=True)

    files = listdir('src/sections')
    processed_files = []
    for f in files:
        match = re.match(FILES_RE, f)
        if match:
            processed_files.append((int(match.group(1)), f))
    ordered_files = sorted(processed_files, key=lambda e: e[0])
    
    out_file = open('public/index.html', 'w')
    for i in range(len(ordered_files)):
        f = ordered_files[i]
        with open(f'src/sections/{f[1]}', 'r') as read_file:
            to_write = read_file.read()
            out_file.write(to_write)
            # if i < len(ordered_files) - 1:
            #     out_file.write('\n')
    out_file.close()
    