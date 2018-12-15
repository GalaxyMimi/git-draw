# Git Draw

This is a HTML and JavaScript project which will allow you to freely draw on a GitHub heatmap (GitHub commit history calendar). You can then export your drawing to a shell script containing a git commit log. Once you've run and pushed this script to a new repository, your commit log will match the drawing you made.

![demo-video](media/demo-video.gif)

Created by [Ben Friedland](http://www.bugben.com).  
Revised by [Shuqiao Zhang](https://zhangshuqiao.org).

## Install
Clone this repository:
```
git clone https://github.com/stevenjoezhang/git-draw.git
cd git-draw/src
```

Then open `index.html` with your browser -- Safari, Chrome and FireFox are all supported.

## Demo

You can draw it online: [Git Draw](https://galaxymimi.com/app/gitdraw/)

## Usage

- Draw in the GitHub heatmap.
- Click "Download" button to save the shell script (git-draw.sh).
- Create an empty repository on GitHub.
- Run this from your command line:
```
sudo chmod +x git-draw.sh
./git-draw.sh
cd git-drawing
git remote add origin https://github.com/your_username/your_repo.git
git push -u origin master
```

## Instructional Video

Ben Friedland's Brother, Rich Friedland, made a comprehensive video on how to use the extension.

https://www.youtube.com/watch?v=ptzDfPZ--Qk

## Acknowledgements

GitFiti: https://github.com/gelstudios/gitfiti - got the idea from here, and poked around their src to see how they were writing commit messages.
