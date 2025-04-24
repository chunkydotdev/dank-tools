"use client";

import { Button } from "@/components/ui/button";
import { getSVGContent } from "@/lib/get-svg-content";
import { cn } from "@/lib/utils";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

type SVGUploadProps = {
	onSVGUpload: (svg: string) => void;
	currentSVG?: string;
};

export function SVGUpload({ onSVGUpload, currentSVG }: SVGUploadProps) {
	const onDrop = useCallback(
		(acceptedFiles: File[]) => {
			const file = acceptedFiles[0];
			if (file) {
				const reader = new FileReader();
				reader.onload = (e) => {
					const text = e.target?.result;
					if (typeof text === "string") {
						onSVGUpload(text);
					}
				};
				reader.readAsText(file);
			}
		},
		[onSVGUpload],
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: {
			"image/svg+xml": [".svg"],
		},
		multiple: false,
	});

	const processedSVG = currentSVG ? getSVGContent(currentSVG) : undefined;

	return (
		<div className="space-y-2">
			<div
				{...getRootProps()}
				className={cn(
					"border border-zinc-200 shadow-md rounded-lg p-8 transition-shadow text-center bg-white/60 cursor-pointer",
					isDragActive
						? "border-primary-500 bg-primary-500/10"
						: "border-gray-200 hover:shadow-lg",
				)}
			>
				<input {...getInputProps()} />
				{processedSVG ? (
					<div className="flex flex-col items-center gap-4">
						<div className="w-full max-w-[200px] aspect-square bg-white rounded-lg p-4">
							<div
								className="w-full h-full"
								// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
								dangerouslySetInnerHTML={{ __html: processedSVG }}
							/>
						</div>
						<Button variant="secondary" size="sm">
							Change SVG
						</Button>
					</div>
				) : (
					<div className="text-sm text-muted-foreground">
						{isDragActive ? (
							<p>Drop the SVG file here</p>
						) : (
							<p>Drag and drop an SVG file here, or click to select one</p>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
