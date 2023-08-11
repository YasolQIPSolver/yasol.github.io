window.MathJax = {
    tex: {
        inlineMath: [["\\(", "\\)"]],
        displayMath: [["\\[", "\\]"]],
        processEscapes: true,
        processEnvironments: true
    },
    options: {
        ignoreHtmlClass: ".*|",
        processHtmlClass: "arithmatex"
    },
    chtml: {
        scale: 1
    },
    svg: {
        scale: 1
    }
};

document$.subscribe(() => {
    MathJax.typesetPromise()
})
