import re
import urllib.request
from pathlib import Path

IMG_RE = re.compile('<img[^>]+src="https:\/\/(?P<src>[^"]+)"')
DATE_RE = re.compile('(?P<date>[0-9]+\-[0-9]+\-[0-9]+)')
THUMB_RE = re.compile('thumbnail: (?P<thumb>.+)')
files = sorted(Path("_posts").glob("*.html"))

for file in files:
    filename = file.absolute().as_posix()
    date_prefix = DATE_RE.search(filename).group('date')
    with open(filename, 'r') as f:
        file_index = 0
        contents = f.read()
        for match in IMG_RE.finditer(contents):
            sourceurl = f"https://{match.group('src')}"
            thumburl = THUMB_RE.findall(contents)[0]
            extstart = sourceurl.rfind('.')
            extension = sourceurl[extstart:]
            newfile = date_prefix + '-image-{:04d}{}'.format(file_index, extension)
            file_index += 1
            print('{} => {}'.format(sourceurl, newfile))
            urllib.request.urlretrieve(sourceurl, '../assets/posts/blogger/' + newfile)
            contents = contents.replace(sourceurl, '/assets/posts/blogger/' + newfile)
            contents = contents.replace(thumburl, '/assets/posts/blogger/' + contents)

    with open(filename, 'w') as f:
        f.write(contents)