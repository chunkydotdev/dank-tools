export const getSVGContent = (svgString: string) => {
	const div = document.createElement("div");
	div.innerHTML = svgString;
	const svg = div.querySelector("svg");
	if (!svg) return svgString;

	// Remove fixed dimensions but keep viewBox
	svg.removeAttribute("width");
	svg.removeAttribute("height");
	if (
		!svg.getAttribute("viewBox") &&
		svg.getAttribute("width") &&
		svg.getAttribute("height")
	) {
		svg.setAttribute(
			"viewBox",
			`0 0 ${svg.getAttribute("width")} ${svg.getAttribute("height")}`,
		);
	}
	// Add responsive attributes
	svg.setAttribute("width", "100%");
	svg.setAttribute("height", "100%");
	svg.setAttribute("preserveAspectRatio", "xMidYMid meet");

	return div.innerHTML;
};
