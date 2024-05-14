---
layout: post
title: Showcase the blog site elements
description: Sometimes, you can give it a little push
tags: 
- Thoughts
- Tips
image: /assets/posts/bg-lisbon-skyline.jpg
---

## The standard paragraphs
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

---

## Headings by default:
# H1 Default styles for headings
## H2 Default styles for headings
### H3 Default styles for headings
#### H4 Default styles for headings
##### H5 Default styles for headings

---

## Tables

| Header 1     | Header 2     |   Header 3   | Header 4     |     Header 5 |
|--------------|--------------|:------------:|--------------|-------------:|
| Row:1 Cell:1 | Row:1 Cell:2 | Row:1 Cell:3 | Row:1 Cell:4 | Row:1 Cell:5 |
| Row:2 Cell:1 | Row:2 Cell:2 | Row:2 Cell:3 | Row:2 Cell:4 | Row:2 Cell:5 |
| Row:3 Cell:1 | Row:3 Cell:2 | Row:3 Cell:3 | Row:3 Cell:4 | Row:3 Cell:5 |
| Row:4 Cell:1 | Row:4 Cell:2 | Row:4 Cell:3 | Row:4 Cell:4 | Row:4 Cell:5 |
| Row:5 Cell:1 | Row:5 Cell:2 | Row:5 Cell:3 | Row:5 Cell:4 | Row:5 Cell:5 |
| Row:6 Cell:1 | Row:6 Cell:2 | Row:6 Cell:3 | Row:6 Cell:4 | Row:6 Cell:5 |

---

## Quotes
A quote looks like this:
> The longer I live, the more I realize that I am never wrong about anything, and that all the pains I have so humbly taken to verify my notions have only wasted my time!
>
> -- <cite>George Bernard Shaw</cite>

---

## Lists

### Unordered list example:
- Poutine drinking vinegar bitters.
- Coloring book distillery fanny pack.
- Venmo biodiesel gentrify enamel pin meditation.
- Jean shorts shaman listicle pickled portland.
- Salvia mumblecore brunch iPhone migas.

---

### Ordered list example:
1. Bitters semiotics vice thundercats synth.
2. Literally cred narwhal bitters wayfarers.
3. Kale chips chartreuse paleo tbh street art marfa.
4. Mlkshk polaroid sriracha brooklyn.
5. Pug you probably haven’t heard of them air plant man bun.

---

## Syntax Highlighter

```cs
public class Program
{
    public static void Main(string[] args)
    {
        System.Console.WriteLine("Hello, World!");
    }
}
```

```python
import re
import sys
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
            contents = contents.replace(thumburl, '/assets/posts/blogger/' + newfile)

    with open(filename, 'w') as f:
        f.write(contents)
```

---

## YouTube Embed

<iframe width="100%" height="468" src="https://www.youtube.com/embed/B3szaVzQx0o?si=WyOlq3ZfHGYs3DWf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Vimeo Embed

<iframe width="100%" height="468" src="https://player.vimeo.com/video/148834441?h=9dae3ab297" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

---

## Images
![bg](/assets/posts/bg-sunshine-coast.jpg){: .center }