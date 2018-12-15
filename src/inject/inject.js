"use strict";

var gitDraw = {
	init: function() {
		for (var i = 0; i <= 52; i++) {
			var trans = 13 * i;
			var x = 13 - i;
			$("#main").append('\
					<g transform="translate(' + trans + ', 0)">\
						<rect class="day" width="10" height="10" x="' + x + '" y="0" fill="#ebedf0" data-count="0" data-date="' + gitDraw.calcDate(i, 0) + '"></rect>\
						<rect class="day" width="10" height="10" x="' + x + '" y="12" fill="#ebedf0" data-count="0" data-date="' + gitDraw.calcDate(i, 1) + '"></rect>\
						<rect class="day" width="10" height="10" x="' + x + '" y="24" fill="#ebedf0" data-count="0" data-date="' + gitDraw.calcDate(i, 2) + '"></rect>\
						<rect class="day" width="10" height="10" x="' + x + '" y="36" fill="#ebedf0" data-count="0" data-date="' + gitDraw.calcDate(i, 3) + '"></rect>\
						<rect class="day" width="10" height="10" x="' + x + '" y="48" fill="#ebedf0" data-count="0" data-date="' + gitDraw.calcDate(i, 4) + '"></rect>\
						<rect class="day" width="10" height="10" x="' + x + '" y="60" fill="#ebedf0" data-count="0" data-date="' + gitDraw.calcDate(i, 5) + '"></rect>\
						<rect class="day" width="10" height="10" x="' + x + '" y="72" fill="#ebedf0" data-count="0" data-date="' + gitDraw.calcDate(i, 6) + '"></rect>\
					</g>');
		}
		$(".month").each(function(i, item) {
			$(item).attr("x", gitDraw.positionArray[i]);
		});
		$("#father").html($("#father").html()); // force refresh svg
		$("rect[data-count]").each(function(i, item) {
			gitDraw.maxCommits = Math.max(gitDraw.maxCommits, item.getAttribute("data-count"));
			$(item).hover(function() {
				var r = this.getAttribute("data-date");
				var a = (function() {
					var a = document.createElement("div");
					a.classList.add("svg-tip", "svg-tip-one-line");
					var o = document.createElement("strong");
					o.textContent = r;
					a.append(o);
					return a;
				}());
				document.body.appendChild(a);
				var o = this.getBoundingClientRect(),
					s = o.left + window.pageXOffset - a.offsetWidth / 2 + o.width / 2,
					i = o.bottom + window.pageYOffset - a.offsetHeight - 2 * o.height;
				a.style.top = i + "px";
				a.style.left = s + "px";
			}, function() {
				$(".svg-tip").remove();
			});
		});
		gitDraw.commitBlockSize = Math.ceil(gitDraw.maxCommits / 4);
		$(".contrib-legend").unbind("click").on('mousedown', gitDraw.setBrush);
		$("svg rect").unbind("click").on("mousedown", gitDraw.colorCell);
		$("svg rect").on("mouseover", gitDraw.cellOver);
		var btnGroupNode = $("<div>").addClass("btn-group");
		var renderBtnNode = $("<button>").text("Render").addClass("btn").addClass("btn-sm");
		var downloadBtnNode = $(renderBtnNode).clone().text("");
		var downloadTextNode = $("<span>").text("Download");
		$(downloadBtnNode).append(downloadTextNode);
		$(renderBtnNode).click(gitDraw.output);
		$(downloadBtnNode).click(gitDraw.save);
		$(btnGroupNode).append(downloadBtnNode).append(renderBtnNode);
		$(".contrib-legend").html(function(index, html) {
			return html.replace('Less', 'Brush Colors');
		});
		$(".contrib-footer .float-left").empty().append(btnGroupNode);
	},
	brushMappings: ["#ebedf0", "#d6e685", "#8cc665", "#44a340", "#1e6823"],
	maxCommits: 4,
	shade: 1,
	script: null,
	positionArray: new Array(),
	calcDate: function(i, j) {
		function DateToStr(date) {
			var year = date.getFullYear();
			var month = (date.getMonth() + 1).toString();
			var day = (date.getDate()).toString();
			if (day == "1") gitDraw.positionArray[month - 1] = 36 + 12 * i;
			if (month.length == 1) {
				month = "0" + month;
			}
			if (day.length == 1) {
				day = "0" + day;
			}
			return `${year}-${month}-${day}`;
		} // 将日期转化字符串(yyyy-MM-dd)

		function getDay(i, j) {
			var date = new Date();
			var day = date.getDay() || 7;
			return new Date(date.getFullYear(), date.getMonth(), date.getDate() - day - 7 * (52 - i) + j);
		}
		return DateToStr(getDay(i, j));
	},
	brushColor: function() {
		return gitDraw.brushMappings[gitDraw.shade];
	},
	setBrush: function(e) {
		$(".legend>li").removeClass("selected");
		gitDraw.shade = $(e.target).index();
		$(e.target).addClass("selected");
	},
	colorCell: function(e) {
		$(e.target).attr("fill", gitDraw.brushColor())
			.attr("data-touched", "true")
			.attr("data-target-shade", gitDraw.shade);
	},
	cellOver: function(e) {
		// mouse drag
		if (e.buttons == 1) {
			gitDraw.colorCell(e);
		}
	},
	render: function() {
		gitDraw.script = "#!/bin/bash\n\n" +
			"REPO=git-drawing\n" +
			"git init $REPO\n" +
			"cd $REPO\n" +
			"echo \"Created with Git Draw (http://github.com/stevenjoezhang/git-draw)\" > README.md\n" +
			"git add README.md\n" +
			"touch git-drawing\n" +
			"git add git-drawing\n" +
			"echo 0 > git-drawing\n";
		$("svg rect").each(function(i, item) {
			if (!item.hasAttribute("data-touched")) {
				return true; // read as "continue"
			}
			var targetShade = gitDraw.brushMappings.indexOf($(item).attr("fill"));
			if (targetShade == -1) {
				targetShade = 0;
			}
			var existingCommitCount = $(item).attr("data-count");
			var targetCommitCount = targetShade * gitDraw.commitBlockSize;
			var commitsToAdd = targetCommitCount - existingCommitCount;
			var dateStr = $(item).attr("data-date");
			var canvas = $('svg')[0]
			canvas.onselectstart = function() {
				return false;
			}
			for (var j = 0; j < commitsToAdd; j++) {
				gitDraw.script += `GIT_AUTHOR_DATE=${dateStr}T12:00:00 GIT_COMMITTER_DATE=${dateStr}T12:00:00 git commit -a -m "Git Draw" > /dev/null\n`
				gitDraw.script += `echo ${i % 2}-${j % 2} > git-drawing\n`;
			}
		});
	},
	output: function() {
		gitDraw.render();
		$(".activity-listing").html(`<pre><code>${gitDraw.script}</code></pre>`)
			.css("font-size", "8px")
			.css("color", "#FFE")
			.css("background-color", "#333")
			.css("padding", "5px");
		var downloadBtnNode = $("<button>").text("").addClass("btn").addClass("btn-sm");
		var downloadTextNode = $("<span>").text("Download");
		$(downloadBtnNode).append(downloadTextNode).css("margin", "10px 0px");
		$(downloadBtnNode).click(gitDraw.save);
		$(".activity-listing").append(downloadBtnNode);
	},
	save: function() {
		gitDraw.render();
		// creates an invisible download link and clicks it
		var textFileAsBlob = new Blob([gitDraw.script], {
			type: 'text/plain'
		});
		var fileNameToSaveAs = 'git-draw.sh';
		var downloadLink = document.createElement("a");
		downloadLink.download = fileNameToSaveAs;
		downloadLink.innerHTML = "Download File";
		if (window.webkitURL != null) {
			downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
		} else {
			downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
			downloadLink.onclick = destroyClickedElement;
			downloadLink.style.display = "none";
			document.body.appendChild(downloadLink);
		}
		downloadLink.click();
	}
}

gitDraw.init();
